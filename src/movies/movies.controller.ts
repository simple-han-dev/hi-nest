import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from "@nestjs/common";

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
    @Post methods
    - Post request

    @Body() methods
    - it is use to pass body data
    - syntax: @Body() variableName: type

    [sample]
    @Post()
    create(@Body() movieData: object) {
      return movieData;
    }
  */
  @Post()
  create(@Body() movieData: object) {
    return movieData;
  }

  /*
    @Delete methods
    - Delete request
  */
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  /*
    @Patch methods
    - Update request
    - it is Update (Partial)

    [sample]

    @Patch('/:id')
    patch(@Param('id') movieId: string) {
      return `This will patch a movie with the id: ${movieId}`;
    }
  */
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData: object) {
    return {
      updateMovieId: movieId,
      ...updateData,
    };
  }

  /*
    @Put methods
    - Update request
    - it is Update (All)
  */
  @Put('/:id')
  put(@Param('id') movieId: string) {
    return `This will put a movie with the id: ${movieId}`;
  }
}
