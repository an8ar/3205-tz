import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import userData from '../../data/user-phones.json';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UserService {
  async getUserByEmail(
    data: GetUserDto,
  ): Promise<{ email: string; number: string }[]> {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const foundUsers = userData.filter((u) => u.email === data.email);

    if (foundUsers.length === 0) {
      throw new NotFoundException(`User with email: ${data.email} not found`);
    }

    if (data.number) {
      const foundUserWithPhone = foundUsers.find(
        (user) => user.number === data.number,
      );
      if (!foundUserWithPhone) {
        throw new BadRequestException(
          `${data.number} is not correct for the ${data.email}`,
        );
      }
      return [foundUserWithPhone];
    }

    return foundUsers;
  }
}
