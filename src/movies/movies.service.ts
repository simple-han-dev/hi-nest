import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

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
  getOne(id: string): Movie {
    const movie = this.movies.find((_movie) => _movie.id === Number(id));

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
   * @param movieData {object}
   */
  create(movieData) {
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
  deleteOne(id: string): boolean {
    this.movies.filter((_movie) => _movie.id !== Number(id));
    return true;
  }

  /**
   * update movie by id
   * @param id {string}
   * @param updateData {object}
   */
  update(id: string, updateData) {
    const targetIndex = this.movies.findIndex(
      (_movie) => _movie.id === Number(id),
    );
    if (targetIndex === -1) {
      throw new Error(`Not Found Movie Id :${id}`);
    }
    this.movies[targetIndex] = {
      ...this.movies[targetIndex],
      ...updateData,
    };
  }
}
