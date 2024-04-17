import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  /*
    @Query() decorator
    - it is use to pass query parameters
    - syntax: @Query('parameterName') variableName: type
  */
  @Get('search')
  search(@Query('year') searchingYear) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  /*
    @Param() decorator
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
    @Post() decorator
    - Post request

    @Body() decorator
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
    @Delete() decorator
    - Delete request
  */
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  /*
    @Patch() decorator
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
    @Put() decorator
    - Update request
    - it is Update (All)
  */
  @Put('/:id')
  put(@Param('id') movieId: string) {
    return `This will put a movie with the id: ${movieId}`;
  }
}
