FROM registry.digitalocean.com/docker-cours/private-original-images:node-18-alpine_1


WORKDIR /app

COPY --chown=node:node package*.json ./

COPY --chown=node:node prisma ./prisma/

COPY --chown=node:node tsconfig.json ./

COPY --chown=node:node . .


RUN npm i

RUN npx prisma generate

RUN npm run format

EXPOSE 4000 
USER node

CMD npm run start:prod