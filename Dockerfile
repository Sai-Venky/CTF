FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y nodejs && \
    apt-get install -y npm && \
    apt-get install -y nmap && \
    apt-get install -y ncat && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /home/myuser/
COPY flag.txt .
COPY package*.json .
COPY src .

RUN npm install

EXPOSE 9000-9200
EXPOSE 80

CMD ["node", "server.js"]