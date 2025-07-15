FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV MONGO_URI=mongodb://some-mongo:27017
EXPOSE 5000
CMD ["npm", "start"]