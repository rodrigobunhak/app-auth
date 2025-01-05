FROM node:22.12.0-alpine

WORKDIR /app

# Copiar arquivos de dependência
COPY package.json package-lock.json* ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Expor porta do Vite
EXPOSE 5173

# Comando para desenvolvimento
CMD ["npm", "run", "dev"]