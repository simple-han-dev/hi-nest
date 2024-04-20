import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get all', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('get one', () => {
    const _movieId = 1;
    const _notFoundMovieId = 0;

    it('should throw NotFoundException', () => {
      try {
        service.getOne(_notFoundMovieId);
      } catch (e) {
        expect(e).toBeDefined();
        expect(e.message).toEqual(`Not Found Movie Id :${_notFoundMovieId}`);
      }
    });

    it('should return a movie', () => {
      const movie = service.getOne(_movieId);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(_movieId);
    });
  });
});
