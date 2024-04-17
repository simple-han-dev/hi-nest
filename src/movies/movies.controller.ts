import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  /*
    @Param() methods
    - it is use to pass params

    [sample]

    - same name
    @Get("/:name")
    methods(@Params('name') name: type) : type {
      return name;
    }

    - different name
    @Get("/:name")
    methods(@Params('name') differentName: type) : type {
      return differentName;
    }
  */
  @Get('/:id')
  getOne(@Param('id') movieId: string): string {
    return `This will return one movie with the id: ${movieId}`;
  }

  /*
    @Post methods write
  */
  @Post()
  create() {
    return 'This will create a movie';
  }
}
