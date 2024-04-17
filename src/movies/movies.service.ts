import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  /**
   * get all movies
   * @return {array} [{}, {}, ...]
   */
  getAll(): Movie[] {
    return this.movies;
  }

  /**
   * find movie by id
   * @param {string} id
   * @return {object} {}
   */
  getOne(id: string): Movie {
    return this.movies.find((_movie) => _movie.id === Number(id));
  }
}
