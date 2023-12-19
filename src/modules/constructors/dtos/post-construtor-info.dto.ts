
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class PostConstructorInfoDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
