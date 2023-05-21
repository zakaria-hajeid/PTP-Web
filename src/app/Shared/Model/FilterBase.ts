export class FilterBase {
  constructor() {
    this.pageIndex = 1;
    this.pageSize = 10;
    this.descendingDirection = false;
  }
  keyword: string;
  pageIndex: number;
  pageSize: number;
  orderBy: string
  descendingDirection: boolean;
  fromDate: Date;
  toDate: Date;
}
