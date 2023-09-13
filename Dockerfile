#Stage 1
FROM node:14.17.5 as build
WORKDIR /ADMIN_PANELbackend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4600
CMD ["npm", "start"]