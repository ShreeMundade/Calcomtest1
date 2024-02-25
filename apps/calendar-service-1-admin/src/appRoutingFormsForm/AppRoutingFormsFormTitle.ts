import { AppRoutingFormsForm as TAppRoutingFormsForm } from "../api/appRoutingFormsForm/AppRoutingFormsForm";

export const APPROUTINGFORMSFORM_TITLE_FIELD = "name";

export const AppRoutingFormsFormTitle = (
  record: TAppRoutingFormsForm
): string => {
  return record.name?.toString() || String(record.id);
};
