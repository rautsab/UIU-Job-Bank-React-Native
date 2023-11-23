import { Injectable } from '@nestjs/common';
import { UserCredentialDTO } from '../dto/user.dto';

@Injectable()
export class UserService {
    private readonly email: string = 'rutsab222063@bscse.uiu.ac.bd';
    private readonly password: string = '12345678';

    userAuth(userCredential: UserCredentialDTO): boolean {
        if (
            userCredential.email === this.email &&
            userCredential.password === this.password
        ) {
            return true;
        } else {
            return false;
        }
    }
}