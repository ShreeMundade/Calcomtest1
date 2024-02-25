import { JsonValue } from "type-fest";

export type Deployment = {
  agreedLicenseAt: Date | null;
  id: number;
  licenseKey: string | null;
  logo: string | null;
  theme: JsonValue;
};
