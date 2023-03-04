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


RUN npm i
ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL
RUN npx prisma generate
RUN npx prisma migrate deploy --preview-feature --force --create-db --name automatic-seed
RUN npx prisma db seed
RUN npm run format
RUN npm run build

EXPOSE 4000 
USER nodeuser

CMD npm run start:prod