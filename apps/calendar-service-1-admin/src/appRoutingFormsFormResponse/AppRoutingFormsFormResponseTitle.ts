import { AppRoutingFormsFormResponse as TAppRoutingFormsFormResponse } from "../api/appRoutingFormsFormResponse/AppRoutingFormsFormResponse";

export const APPROUTINGFORMSFORMRESPONSE_TITLE_FIELD = "formFillerId";

export const AppRoutingFormsFormResponseTitle = (
  record: TAppRoutingFormsFormResponse
): string => {
  return record.formFillerId?.toString() || String(record.id);
};
