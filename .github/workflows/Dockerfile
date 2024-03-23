# Estágio de compilação
FROM node:18 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html