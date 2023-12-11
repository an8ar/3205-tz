import { IsEmail, IsOptional, IsString } from 'class-validator';
export class GetUserDto {
  @IsEmail()
  @IsString()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly number?: string;
}
