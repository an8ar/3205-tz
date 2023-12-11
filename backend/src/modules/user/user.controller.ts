import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserDto } from './dto/get-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async checkUser(@Query(new ValidationPipe()) query: GetUserDto) {
    return this.userService.getUserByEmail(query);
  }
}
