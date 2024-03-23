# Estágio de compilação
FROM node:18 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Estágio de produção
FROM node:18

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install --only=production

EXPOSE 3000
CMD ["npm", "start"]