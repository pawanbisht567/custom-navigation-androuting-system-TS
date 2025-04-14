FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]