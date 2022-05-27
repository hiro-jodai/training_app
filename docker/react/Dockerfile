FROM node:16-alpine
#RUN apk add python make g++

# Set up work directory
WORKDIR /usr/src/app

# Configure host
ENV HOST 0.0.0.0
COPY ./docker/react/startup.sh /usr/local/bin/startup.sh
COPY ./react /usr/src/app

RUN chmod 777 /usr/local/bin/startup.sh
# Init command
CMD ["/usr/local/bin/startup.sh"]