FROM labdocker/alpine:latest

RUN apk update

RUN apk add nodejs curl vim bash

RUN npm install monitor && npm install fd-diskspace && npm install request

ENV NODE_VERSION=v4.3.0 
ENV NPM_VERSION=2.14.12
ENV TITLE=NODEJS_BOT_NOTIFY_PAPATPON
# ENV INTERVAL=10000
ENV HEAP_HIGH=70
ENV MEM_HIGH=30
ENV SH_OS=Y
# ENV TOKEN=GAMbC29OxTGOO1thOzMj536OU3Mub61R3uvU5etulhU

COPY /LINE_Notify/* /nodejs/

CMD ["sh"]