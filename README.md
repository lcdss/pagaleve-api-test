# Pagaleve Test

TODO

## Demo

API: https://o7aeag5f6f.execute-api.us-east-1.amazonaws.com

Client: http://pagaleve-test.s3-website-us-east-1.amazonaws.com

## Installation

To run this project, you first need to specify the environment variables in the app's `.env` file. There is an example file named `.env.example` with the variables you need to define.

```bash
  cd api
  cp .env.example .env
  composer install
  php artisan key:generate
  // TODO
```

## Running Tests

To run tests, run the following command inside the api directory:

```bash
  php artisan test
```

## Deployment

TODO

```bash
# API
composer deploy

# Client
npm run build
aws s3 sync ./dist s3://pagaleve-test --delete
```

## API Reference

See the [OpenAPI](openapi.yml) specification.

## Contributing

TODO

## Tech Stack

- [Laravel](https://laravel.com/)
- [Bref](https://bref.sh/)
- [Serverless](https://www.serverless.com/)

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [React Router](https://github.com/remix-run/react-router)
- [ky](https://github.com/sindresorhus/ky)
- [SWR](https://swr.vercel.app/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)

### Testing

- TODO
- [Pest](https://pestphp.com/)
- [PHPUnit](https://github.com/sebastianbergmann/phpunit)
- [Mockery](https://github.com/mockery/mockery)

### Code Quality Tools

TODO

### Infrastructure

- AWS Lambda
- AWS API Gateway
- AWS S3
