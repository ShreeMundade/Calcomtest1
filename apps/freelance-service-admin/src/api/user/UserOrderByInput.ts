import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  password?: SortOrder;
  profileImage?: SortOrder;
  role?: SortOrder;
  username?: SortOrder;
};
