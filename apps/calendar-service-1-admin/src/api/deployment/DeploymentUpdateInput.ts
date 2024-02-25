import { InputJsonValue } from "../../types";

export type DeploymentUpdateInput = {
  agreedLicenseAt?: Date | null;
  licenseKey?: string | null;
  logo?: string | null;
  theme?: InputJsonValue;
};
