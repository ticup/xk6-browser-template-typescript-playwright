FROM grafana/k6:0.45.0
USER root

RUN apk update && apk add --no-cache chromium

ENV K6_BROWSER_ENABLED=true