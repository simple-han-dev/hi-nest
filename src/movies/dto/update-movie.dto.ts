import { IsNumber, IsString } from 'class-validator';

export class UpdateMovieDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title?: string;

  @IsNumber()
  readonly year?: number;

  @IsString({ each: true })
  readonly genres?: string[];
}
