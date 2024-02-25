import { Feature as TFeature } from "../api/feature/Feature";

export const FEATURE_TITLE_FIELD = "description";

export const FeatureTitle = (record: TFeature): string => {
  return record.description?.toString() || String(record.id);
};
