export type UserKey = "K" | "C";

export type DayKey =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type MealSlot = "meal1" | "snack1" | "meal2" | "snack2" | "meal3" | "snack3";

export interface MealEntry {
  title: string;
  ingredients: string[];
}

export type DayPlan = Partial<Record<MealSlot, MealEntry>>;

export type WeeklyPlanByUser = Record<UserKey, Record<DayKey, DayPlan>>;

export const DAYS: DayKey[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const SLOT_ORDER: MealSlot[] = ["meal1", "snack1", "meal2", "snack2", "meal3", "snack3"];

export const SLOT_LABELS: Record<MealSlot, string> = {
  meal1: "Meal 1",
  snack1: "Snack 1",
  meal2: "Meal 2",
  snack2: "Snack 2",
  meal3: "Meal 3",
  snack3: "Snack 3",
};

export const WATER_TARGET: Record<UserKey, string> = {
  K: "2.5-3 litres per day",
  C: "4 litres per day",
};