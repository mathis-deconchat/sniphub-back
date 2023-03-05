FROM registry.digitalocean.com/docker-cours/node-19.7-bullseyes-slim:1.0

# Set a non-root user for the container

WORKDIR /app

# Copy package.json and package-lock.json files
COPY --chown=node:node package*.json ./

# generated prisma files
COPY --chown=node:node prisma ./prisma/

COPY --chown=node:node tsconfig.json ./

# Copy source code
COPY --chown=node:node . .


RUN npm i

RUN npx prisma generate

RUN npm run format
RUN npm run build

EXPOSE 4000 
USER node

CMD npm run start:prod