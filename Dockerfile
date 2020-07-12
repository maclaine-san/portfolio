WORKDIR /usr/src/app
ENV PATH=$PATH:/usr/src/app/node_modules/.bin
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
