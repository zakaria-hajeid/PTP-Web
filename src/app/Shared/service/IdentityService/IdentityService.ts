import { Injectable } from "@angular/core";
import { ApiHelperService } from "src/app/Core/Srvices/ApiHelperService";
import { apiNames } from "../../Constant/apiNames";
import { UserDto } from "../../Model/User/AddUserDto";
import { User, UsersFilter } from "../../Model/User/User";
import { ServiceBase } from "../base.service";

@Injectable()
export class IdentityService extends ServiceBase<User, UsersFilter> {
  constructor(protected apiHelper: ApiHelperService) {
    super(apiHelper, apiNames.Client)
  }

register(registerdto:UserDto):any{
  return this.apiHelper.post(this.apiUrl + "/AddUsr",registerdto);
}


}
