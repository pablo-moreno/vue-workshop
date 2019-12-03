FROM registry.gitlab.com/pablo-moreno/nginx:latest

COPY dist/* /var/www/app/

ENTRYPOINT ["nginx", "-g", "daemon off;"]
