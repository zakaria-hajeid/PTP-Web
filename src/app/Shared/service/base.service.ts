import { environment } from "src/environments/environment";
import { EntityBase } from '../model/EnitityBase';
import { FilterBase } from "src/app/shared/model/FilterBase";
import { ApiHelperService } from "src/app/core/Srvices/ApiHelperService";
import { HttpHeaders } from "@angular/common/http";
import { PageSearchResult } from "../dto/SerachResult";

export class ServiceBase<TEntity extends EntityBase, TFilters extends FilterBase> {
  apiUrl: string;

  constructor(protected apiHelper: ApiHelperService, serviceURi: string) {
    this.setApiUrl(serviceURi);
  }

  setApiUrl(apiUrl) {
    this.apiUrl = environment.serviceUrl + apiUrl;
  }

GetById(id:number){

return  this.apiHelper.get<TEntity>(this.apiUrl+"/"+id);
}
getAll(filter?: TFilters, headers?: HttpHeaders) {
  const url = this.apiUrl + this.filterToQuery(filter);
  return this.apiHelper.get<PageSearchResult<TEntity>>(url, null, headers);
}
filterToQuery(filter): string {
  // this to stop browser cache in case of the get request.
  const buster = "nc" + Math.random() + "=1";
  let params = "?" + buster;
  if (filter) {
    const getValue = (value) => {
      return value instanceof Date ? value.toISOString() : value;
    };
    const filterParams = Object.keys(filter).map(key => key + '=' + getValue(filter[key])).join('&');
    params += "&" + filterParams;
  }
  return params;
}
delete(id: number) {
  return this.apiHelper.delete<any>(this.apiUrl + '/' + id.toString());
}
edit(entity: TEntity) {
  return this.apiHelper.put<TEntity, any>(this.apiUrl, entity);
}
add(entity: TEntity) {
  return this.apiHelper.post<TEntity, any>(this.apiUrl, entity);
}

}
