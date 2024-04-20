# nest command

- this document is about nest command

## how to show command

- type to shell 'nest'

```shell
nest
```

![nest command](./img/nest_command.png)

## how to create controller

- purpose of use to controller
  - mapping url
  - pass parameters, queries, etc.
- how to create controller
  - type to shell 'nest g co'
  - type to shell 'nest g co ${name}'

```shell
nest g co
```

```shell
nest g co name
```

![create controller](./img/nest_g_co.png)

## how to create service

- purpose of use to service
  - business logic
  - database access
- how to create service
  - type to shell 'nest g s'
  - type to shell 'nest g s ${name}'

```shell
nest g s
```

```shell
nest g s name
```

## how to use exception class
- purpose of use to exception class
  - handle errors

| name                         | description                                                                                              | example                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| NotFoundException            | Exceptions usually occur when a resource cannot be found.                                                | when an entity cannot be found in the database using a specific ID.               |
| BadRequestException          | Raised when the client request is malformed or in a format that the server cannot process.               | this exception may occur if the request body is malformed.                        |
| UnauthorizedException        | Occurs when the request is not authenticated.                                                            | It is primarily used when trying to access resources that require authentication. |
| ForbiddenException           | Occurs when a request is authenticated, but you do not have permission to access the requested resource. |                                                                                   |
| InternalServerErrorException | Occurs when an unexpected error occurs on the server.                                                    |                                                                                   |


## how to validate
### create validation pipe
  - app.useGlobalPipes(new ValidationPipe());
    - validationPipe(options)
    - options properties
      - transform: true
      - whitelist: true
      - forbidNonWhitelisted: true
      - ...
### create DTO (data transfer object)
  - create DTO
  - use class-validator
  - use class-transformer
```shell
npm i class-validator class-transformer
```

  ### extends type
  - it is used to extend the type
```shell
npm i @nestjs/mapped-types
```

## create module
- app.modules is the root module
- app.modules.controllers has only app
- app.modules.providers has only app
- if you want to use other modules, you need to import them
1. create module
```shell
nest g mo ${name}
```
2. feature module
```typescript
// movies.module.ts
import { Module } from '@nestjs/common';
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
i
```
3. import module
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
```
