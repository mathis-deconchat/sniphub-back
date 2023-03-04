FROM node:alpine 

# Set a non-root user for the container
RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup

WORKDIR /app

# Copy package.json and package-lock.json files
COPY --chown=nodeuser:nodegroup package*.json ./

# generated prisma files
COPY --chown=nodeuser:nodegroup prisma ./prisma/

COPY --chown=nodeuser:nodegroup tsconfig.json ./

# Copy source code
COPY --chown=nodeuser:nodegroup . .

USER nodeuser

RUN npm ci --production
ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL
RUN npx prisma generate

EXPOSE 4000 

CMD npm run start:prod