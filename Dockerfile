#building angular image
FROM node:alpine3.15 as build
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN npm run build --prod

#final stage 
 FROM nginx:alpine
COPY --from=build /usr/local/app/dist/projetecole /usr/share/nginx/html
