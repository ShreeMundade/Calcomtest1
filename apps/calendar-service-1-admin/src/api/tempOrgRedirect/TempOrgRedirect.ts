export type TempOrgRedirect = {
  createdAt: Date;
  enabled: boolean;
  fromField: string;
  fromOrgId: number;
  id: number;
  toUrl: string;
  type?: "UserEventType" | "TeamEventType" | "User" | "Team";
  updatedAt: Date;
};
