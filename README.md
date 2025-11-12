<p align="center">
  <img src="./banner.png" alt="Banner - API NestJS + Prisma + MySQL - Impacta" width="100%">
</p>

# 🧠 API NestJS + Prisma + MySQL - Impacta

API desenvolvida com **NestJS**, **Prisma ORM** e **MySQL**, seguindo boas práticas de arquitetura e documentação.
Projeto acadêmico da Impacta — autoria **A2D-Dev** (Anderson Dantas).

## 🚀 Tecnologias e Ferramentas

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

## 📂 Estrutura de Pastas (sugerida)

```
📦 api-nest-impacta
 ┣ 📂 src
 ┃ ┣ 📂 user
 ┃ ┣ 📂 prisma
 ┃ ┣ 📂 utils
 ┃ ┗ main.ts
 ┣ 📂 prisma
 ┃ ┗ schema.prisma
 ┣ 📂 test
 ┣ .env.example
 ┣ package.json
 ┣ README.md
 ┗ tsconfig.json
```

## 📦 Instalação

```bash
git clone https://github.com/A2D-Dev/api-nest-impacta.git
cd api-nest-impacta
npm install
```

## ⚙️ Executando

```bash
# Desenvolvimento (hot-reload)
npm run dev
```

Aplicação em: `http://localhost:3000`

## 🌱 Variáveis de ambiente

Crie um `.env` baseado no `.env.example`:

```env
DATABASE_URL="mysql://root:123456@localhost:3306/api_impacta"
PORT=3000
JWT_SECRET="minha_chave_secreta_super_segura"
```

## 🧪 Testes
```bash
npm run test
```

## 🧾 Licença
Projeto sob [MIT](./LICENSE).

## 👨‍💻 Autor
**A2D-Dev (Anderson Dantas Dias)**  
GitHub: https://github.com/A2D-Dev
