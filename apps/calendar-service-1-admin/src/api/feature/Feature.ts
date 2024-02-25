export type Feature = {
  createdAt: Date | null;
  description: string | null;
  enabled: boolean;
  id: string;
  lastUsedAt: Date | null;
  stale: boolean | null;
  type?:
    | "RELEASE"
    | "EXPERIMENT"
    | "OPERATIONAL"
    | "KILL_SWITCH"
    | "PERMISSION"
    | null;
  updatedAt: Date | null;
  updatedBy: number | null;
};
