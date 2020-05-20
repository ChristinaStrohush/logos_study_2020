import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(users: Array<IUser>, searchText: any): unknown {
    if (!searchText){
      return users;
    }
    if (!users){
      return [];
    }
    const fFirstName: IUser[] = users.filter(user => user.firstName.toLowerCase().includes(searchText));
    const fLastName: IUser[] = users.filter(user => user.lastName.toLowerCase().includes(searchText));
    const fNumber: IUser[] = users.filter(user => user.numberPhone.toString(user.numberPhone).includes(searchText));
    const fArr = [fFirstName, fLastName, fNumber];
    const fUser = fArr.filter(a => a.length > 0);
    const filtered: Array<object> = fUser.concat.apply([], fUser);
    return filtered.filter((val, ind) => filtered.indexOf(val) === ind);
  }

}
