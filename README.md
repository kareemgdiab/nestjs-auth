
# NestJS Auth

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A NestJS Authentication & Authorization Service.</p>

<p align="center">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/kareemgdiab/nestjs-auth">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/kareemgdiab/nestjs-auth">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/kareemgdiab/nestjs-auth">
<img alt="GitHub package.json dynamic" src="https://img.shields.io/github/package-json/keywords/kareemgdiab/nestjs-auth">
<img alt="GitHub" src="https://img.shields.io/github/license/kareemgdiab/nestjs-auth">
</p>

## Features

- JWT Authentication
- RBAC
- Revokable Tokens
- Auto docs generation
- Development workflow ([husky](https://typicode.github.io/husky), [commitlint](https://commitlint.js.org/))


## Documentation

>Documentation is automatically generated using [@compodoc/compodoc](https://compodoc.app/),
Check out current project documentation on [/nestjs-auth](https://kareemgdiab.github.io/nestjs-auth)

>A Swagger documentation is also automatically generated and can be accessed by running the project and heading to `/api`
and possibly the openapi specification json file that can be imported in rest clients (eg,. `insomnia`, `postman`) by heading to `/api-json`


## Installation

### Manual

```bash
  git clone https://github.com/kareemgdiab/nestjs-auth
  cd nestjs-auth
  
  npm install

  # For development and auto reloading
  cp .env.example .env.development
  npm run start:dev

  # For production
  cp .env.example .env.production
  npm start
```

### Docker

```bash
git clone https://github.com/kareemgdiab/nestjs-auth
cd nestjs-auth

# Pre-defined `.env.docker` file is used to load variables

docker-compose up --build
```
## Environment Variables

Environment variables are loaded using `.env` files.

> By default `.env` is loaded unless you specify which environment file to load based on `NODE_ENV` variable so if `NODE_ENV=development` the env file to be used will be `.env.development`

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL` - Database Connection String. (eg,. `mongodb://localhost/nestjs-auth`).
`JWT_SECRET` - A secret string used to sign jwt tokens.

## Enhancements

- List of all available permissions as a lookup
- Caching frequently used models using redis
- Unit Tests
## Authors

- [@kareemgdiab](https://www.github.com/kareemgdiab)


## License

[MIT](https://choosealicense.com/licenses/mit/)

