<p align="center">
  <h1>nestjs-prisma-gql</h1>
</p>

## Description

Sample project that connects all the below frameworks

- [NestJS](https://github.com/nestjs/nest) framework.
- [Prisma](https://www.prisma.io/) ORM.
- [GraphQL](https://docs.nestjs.com/graphql/quick-start) for NestJS.
- [Swagger](https://docs.nestjs.com/openapi/introduction) for NestJS.
- [Compodoc](https://compodoc.app/guides/usage.html) for documentation

## **Run Locally**

```bash
git clone https://github.com/neographer/nestjs-prisma-gql.git
npm install
npx prisma migrate dev
npm run start:dev
```

Update the database connection details in `.env` file accordingly.

REST API is available in the Swagger API - [localhost:3000/api](http://localhost:3000/api).

GraphQL API available in the GraphQL Playground - [localhost:3000/graphql](http://localhost:3000/graphql)

## **Steps to create this project**

### 1. NestJS Boilerplate

1.  Create new NestJS project

> ```bash
> npm i -g @nestjs/cli
> nest new nestjs-prisma-gql
> ```

2. Test the app

> ```bash
> cd nestjs-prisma-gql
> npm run start:dev
> ```

### 2. Enable Prisma

1. Add npm dependencies and initialize

> ```bash
> npm i prisma --save-dev
> npx prisma init
> npm i @prisma/client
> ```

2. Update the schema.prisma file. Check [here](https://docs.nestjs.com/recipes/prisma#set-the-database-connection) for details.
3. Add seeds.ts, if required. Check [here](https://www.prisma.io/docs/guides/database/seed-database) for details.
4. Migrate the changes to database

> ```bash
> npx prisma migrate dev --name addEmployee
> ```

> `--name` value will be suffixed to the migration folder created.

### 3. Creating Resources

```bash
nest g resource users
```

The above command will generate the controller, service and the module to achieve CRUD operations for User resource.

Check [here](https://docs.nestjs.com/recipes/crud-generator) for details

### 4. Enable GraphQL

```bash
npm i @nestjs/graphql graphql-tools graphql apollo-server-express
```

Add `GraphQLModule` to the app module. Check [here](https://docs.nestjs.com/graphql/quick-start#getting-started-with-graphql--typescript)

### 5. Enable Swagger

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

Check [here](https://docs.nestjs.com/openapi/introduction#bootstrap) for more details

## Stay in touch

- Author - [Anoop Kumar](https://www.linkedin.com/in/anoopkumar1243/)
