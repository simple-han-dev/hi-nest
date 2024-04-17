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
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  /*
    @Query() decorator
    - it is use to pass query parameters
    - syntax: @Query('parameterName') variableName: type
  */
  @Get('search')
  search(@Query('title') title: string) {
    return this.moviesService.getByTitle(title);
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
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
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
    this.moviesService.create(movieData);
    return movieData;
  }

  /*
    @Delete() decorator
    - Delete request
  */
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
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
    return this.moviesService.update(movieId, updateData);
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
