import { User } from "../user/User";

export type Message = {
  content: string;
  id: number;
  receiver?: User;
  sender?: User;
  sentAt: Date;
};
