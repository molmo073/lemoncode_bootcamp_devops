FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV API_URI=http://topics-api:5000/api/topics
EXPOSE 3000
CMD ["npm", "start"]
