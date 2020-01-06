FROM node:10.6.0 AS builder

WORKDIR /app
COPY . /app

RUN ["npm", "i"]
RUN ["npm", "run", "build"]


FROM registry.gitlab.com/pablo-moreno/nginx:latest

COPY --from=builder /app/dist/ /var/www/app/
ENTRYPOINT ["nginx", "-g", "daemon off;"]
