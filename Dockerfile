# build stage
FROM node:20.6.0 as build-stage
RUN npm install -g npm@10.4.0
WORKDIR /app
COPY package*.json ./
# Disable strict SSL for npm
RUN npm config set strict-ssl false
RUN apt-get install ca-certificates
RUN npm config set registry https://registry.npmjs.org/
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]