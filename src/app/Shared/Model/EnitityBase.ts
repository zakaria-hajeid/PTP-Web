import { User } from "./User/User";

export class EntityBase {
  id: number;
  createStamp: Date;
  createdBy: number;
  createdByUser: User;
  updateStamp: Date;
  updatedBy: number;
  isActive?: boolean;
  isDeleted?: boolean;

}
