/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { Payment } from "../../payment/base/Payment";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumAppModelCategories {
  Calendar = "calendar",
  Messaging = "messaging",
  Other = "other",
  Payment = "payment",
  Video = "video",
  Web3 = "web3",
  Automation = "automation",
  Analytics = "analytics",
  Conferencing = "conferencing",
  Crm = "crm",
}

registerEnumType(EnumAppModelCategories, {
  name: "EnumAppModelCategories",
});
