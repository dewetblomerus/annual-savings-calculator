FROM node
RUN npm install -g create-react-app
WORKDIR /app
ENTRYPOINT ["npm", "start"]
