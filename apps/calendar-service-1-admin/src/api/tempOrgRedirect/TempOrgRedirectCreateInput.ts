export type TempOrgRedirectCreateInput = {
  enabled: boolean;
  fromField: string;
  fromOrgId: number;
  toUrl: string;
  type: "UserEventType" | "TeamEventType" | "User" | "Team";
};
