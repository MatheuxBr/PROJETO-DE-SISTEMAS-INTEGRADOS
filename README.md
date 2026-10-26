# Projeto — Frameworks Web

Projeto desenvolvido para a disciplina de Frameworks Web — **UNISANTA**, com estrutura dividida entre Frontend e Backend.

---

## 🚀 Tecnologias Utilizadas

* **Angular** — Desenvolvimento da interface Frontend.
* **Node.js e npm** — Execução do ambiente JavaScript e gerenciamento de dependências.
* **Express** — Framework para desenvolvimento do Backend.
* **Nodemon** — Monitoramento de alterações no código durante o desenvolvimento.
* **Mongoose** — Integração com o banco de dados MongoDB.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* MongoDB [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Para verificar a instalação do Node.js e do npm, execute no terminal:

```bash
node -v
npm -v
```

---

## ⚙️ Instalação e Execução

### 1. Frontend

Acesse a pasta do Frontend, instale as dependências e inicie o servidor de desenvolvimento:

```bash
cd FRONTEND
npm install
npm install -g @angular/cli
ng serve
```

Após iniciar o servidor, acesse no navegador o endereço indicado no terminal (geralmente):
👉 `http://localhost:4200`

---

### 2. Backend

Acesse a pasta da API e execute os comandos abaixo na ordem apresentada:

```bash
cd API
npm init
npm i express --save
npm i nodemon -g --save-dev
npm i mongoose --save
nodemon index "sua URL de conexão com o BD"
```