

#we are going to remove nginx default.co file and replace with own custom default.co file


FROM nginx:1.21.3-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf