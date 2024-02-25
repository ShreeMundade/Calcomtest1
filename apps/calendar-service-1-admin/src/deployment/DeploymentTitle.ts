import { Deployment as TDeployment } from "../api/deployment/Deployment";

export const DEPLOYMENT_TITLE_FIELD = "licenseKey";

export const DeploymentTitle = (record: TDeployment): string => {
  return record.licenseKey?.toString() || String(record.id);
};
