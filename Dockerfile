FROM node:12

RUN apt-get update && apt-get install -y libaio1
RUN mkdir -p opt/oracle/instantclient
ADD ./oracle/linux/instantclient opt/oracle/instantclient

RUN ln -s /opt/oracle/instantclient/libclntsh.so.12.1 /opt/oracle/instantclient/libclntsh.so \
 && ln -s /opt/oracle/instantclient/libocci.so.12.1 /opt/oracle/instantclient/libocci.so


ENV LD_LIBRARY_PATH="/opt/oracle/instantclient"
ENV OCI_HOME="/opt/oracle/instantclient"
ENV OCI_LIB_DIR="/opt/oracle/instantclient"
ENV OCI_VERSION=12

RUN echo '/opt/oracle/instantclient/' | tee -a /etc/ld.so.conf.d/oracle_instant_client.conf && ldconfig

   
WORKDIR /dist
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install --production
COPY ./dist .
COPY ormconfig.json .

EXPOSE 4000
CMD [ "pm2-runtime", "index.js"]