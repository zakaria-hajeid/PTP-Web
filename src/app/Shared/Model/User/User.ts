import { EntityBase } from "../EnitityBase";
import { FilterBase } from "../FilterBase";

export class User extends EntityBase {
  userId: number;
  username: string;
  email: string;
  mobile: string;
  groupId: number;
  firstNameAr: string;
  secondNameAr: string;
  thirdNameAr: string;
  lastNameAr: string;
  firstNameEn: string;
  secondNameEn: string;
  thirdNameEn: string;
  lastNameEn: string;
  passwordHash: string;
  password: string;
  confirmPassword: string;
  fullNameAr: string;
  fullNameEn: string;
  firstName: string;
  secondName: string;
  thirdName: string;
  lastName: string;
  fullName: string;

}

export class UsersFilter extends FilterBase {
  name: string;
  username: string;
  email: string;

}
