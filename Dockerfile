FROM node
ENV DIRPATH /smart-ui-angularjs
COPY server.js $DIRPATH/server.js
COPY package.json $DIRPATH/package.json
ADD public $DIRPATH/public
WORKDIR $DIRPATH
RUN npm install 
EXPOSE 8002
CMD ["npm","start"]