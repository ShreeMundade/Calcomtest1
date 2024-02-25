export type FeatureUpdateInput = {
  description?: string | null;
  enabled?: boolean;
  lastUsedAt?: Date | null;
  stale?: boolean | null;
  type?:
    | "RELEASE"
    | "EXPERIMENT"
    | "OPERATIONAL"
    | "KILL_SWITCH"
    | "PERMISSION"
    | null;
  updatedBy?: number | null;
};
