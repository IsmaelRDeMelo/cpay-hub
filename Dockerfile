# Usar uma imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json para o cache de dependências
COPY package.json ./
COPY package-lock.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o resto dos arquivos da aplicação
COPY . .

# Expor a porta que o React usa
EXPOSE 3000

# O comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "start"]