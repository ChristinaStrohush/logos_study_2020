import {IUser} from '../interfaces/user.interface';
export class User implements IUser{
    constructor(
        public firstName: string,
        public lastName: string,
        public numberPhone: number
    ){}
}
