## express-typescript-project
This is a ts-express-mongoose API server project. It has support of ESLint, prettier. Everything is in Typescript.

## Prerequisite
- Node 16
- TypeScript
- Mongoose

## Nice to have
- NVM
- VS CODE
- ESLINT Extension
- Prettier Extension

## Getting started
```
git clone https://github.com/Rakibhasan-programmer/ts-express-crud
```

## Install dependencies
```
cd <project name>
npm i / npm install
```

## Using postman or your browser (Recomended POSTMAN)
```
POST:    http://127.0.0.1:5000/api/products
GET:     http://127.0.0.1:5000/api/products
GET:     http://127.0.0.1:5000/api/products/:productID
PUT:     http://127.0.0.1:5000/api/products/:productID
DELETE:  http://127.0.0.1:5000/api/products/:productID
GET:     http://127.0.0.1:5000/api/products?searchTerm=iphone

POST:    http://127.0.0.1:5000/api/orders
GET:     http://127.0.0.1:5000/api/orders
GET:     http://127.0.0.1:5000/api/orders?email=level11@programming-hero.com

```

## ENV variables
The project uses dotenv to parse environment variables. To add environment variables to your project, simply, create a .env file in the root folder of the project. You can then reference it by declaring the following variables.

You can replace according to your PORT and Mongoose DB URL in .env file.
```
PORT=
DATABASE_URL=
```

## Live server
```
https://assignment-2-psi-one.vercel.app/
```
