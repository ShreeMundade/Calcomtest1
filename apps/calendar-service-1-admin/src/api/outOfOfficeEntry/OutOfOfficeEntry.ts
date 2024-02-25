import { User } from "../user/User";

export type OutOfOfficeEntry = {
  createdAt: Date;
  end: Date;
  id: number;
  start: Date;
  toUser?: User | null;
  updatedAt: Date;
  user?: User;
  uuid: string;
};
