import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

const SAMPLE_MOVIE = [
  {
    id: 1,
    title: '파묘',
    year: 2024,
    genres: ['mistery'],
  },
  {
    id: 2,
    title: '데드풀',
    year: 2016,
    genres: ['action', 'comedy'],
  },
];

@Injectable()
export class MoviesService {
  private movies: Movie[] = [...SAMPLE_MOVIE];

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
  getOne(id: number): Movie {
    const movie = this.movies.find((_movie) => _movie.id === id);

    if (!movie) {
      throw new NotFoundException(`Not Found Movie Id :${id}`);
    }

    return movie;
  }

  /**
   * find movie by title
   * @param title
   * @return {array} [{}, {}, ...]
   */
  getByTitle(title: string): Movie[] {
    return this.movies.filter((_movie) =>
      _movie.title.includes(title.replace(/\s+/g, '')),
    );
  }

  /**
   * create movie
   * @param movieData {CreateMovieDto}
   */
  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  /**
   * remove movie by id
   * @param id {string}
   * @return {boolean}
   */
  deleteOne(id: number): boolean {
    this.movies = this.movies.filter((_movie) => _movie.id !== id);
    return true;
  }

  /**
   * update movie by id
   * @param id {string}
   * @param updateData {object}
   */
  update(id: number, updateData) {
    const targetIndex = this.movies.findIndex((_movie) => _movie.id === id);
    if (targetIndex === -1) {
      throw new Error(`Not Found Movie Id :${id}`);
    }
    this.movies[targetIndex] = {
      ...this.movies[targetIndex],
      ...updateData,
    };
  }
}
