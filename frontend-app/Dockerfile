FROM node:16 as angular

WORKDIR /frontend-app
COPY . .
RUN npm install
RUN npm run build


FROM nginx:1.21.4 as ngnx
COPY --from=angular /frontend-app/dist/frontend-app /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
