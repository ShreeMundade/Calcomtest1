import { InputJsonValue } from "../../types";

export type DeploymentCreateInput = {
  agreedLicenseAt?: Date | null;
  licenseKey?: string | null;
  logo?: string | null;
  theme?: InputJsonValue;
};
