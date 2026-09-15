# ClaraIA — landing page (TanStack Start + Nitro)
# Buildada com preset node-server para rodar em container (o build padrao do Lovable
# sai como Cloudflare Worker, que nao roda aqui).

FROM node:22-alpine AS build
WORKDIR /app
ENV NITRO_PRESET=node-server
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
