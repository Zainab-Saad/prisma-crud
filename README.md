# prisma-demo
A simple crud api using Express.js, postgreSQL and prisma

## Db Initial Setup
- Follow the database initial setup from the crud rest api [db setup](https://github.com/Zainab-Saad/crud-rest-api#readme)

## Schema Migration
- After setting up the db connection and creating the models, migrate the changes to the database by using the following command:
```
npx prisma generate
```

and

```
npx prisma migrate dev --name init --create-only
```

- Migrate and deploy the models to db by using:
```
npx prisma migrate deploy
```

This should migrate the models and show a success message as 

> All migrations have been successfully applied.

## API Testing Tool
Postman