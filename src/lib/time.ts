import { DAYS, DayKey, MealEntry, MealSlot, SLOT_ORDER, UserKey, WeeklyPlanByUser } from "../types";

export type SlotWindow = { slot: MealSlot; startMinutes: number; endMinutes: number };

export const SLOT_WINDOWS: SlotWindow[] = [
  { slot: "meal1", startMinutes: 7 * 60, endMinutes: 10 * 60 + 29 },
  { slot: "snack1", startMinutes: 10 * 60 + 30, endMinutes: 12 * 60 + 29 },
  { slot: "meal2", startMinutes: 12 * 60 + 30, endMinutes: 15 * 60 + 29 },
  { slot: "snack2", startMinutes: 15 * 60 + 30, endMinutes: 18 * 60 + 29 },
  { slot: "meal3", startMinutes: 18 * 60 + 30, endMinutes: 21 * 60 + 29 },
  { slot: "snack3", startMinutes: 21 * 60 + 30, endMinutes: 23 * 60 + 59 },
];

export interface UpcomingMeal {
  day: DayKey;
  slot: MealSlot;
  meal: MealEntry;
  relativeDayLabel: "Today" | "Tomorrow";
}

const getDayIndex = (date: Date) => {
  const idx = date.getDay();
  return idx === 0 ? 6 : idx - 1;
};

const getMinutes = (date: Date) => date.getHours() * 60 + date.getMinutes();

const findCurrentSlot = (minutes: number): MealSlot | null => {
  const found = SLOT_WINDOWS.find((window) => minutes >= window.startMinutes && minutes <= window.endMinutes);
  return found?.slot ?? null;
};

export const getUpcomingMeals = (date: Date, user: UserKey, weeklyPlan: WeeklyPlanByUser): UpcomingMeal[] => {
  const nowDayIndex = getDayIndex(date);
  const nowMinutes = getMinutes(date);
  const currentSlot = findCurrentSlot(nowMinutes);

  const candidates: Array<UpcomingMeal & { order: number }> = [];

  for (let dayOffset = 0; dayOffset <= 1; dayOffset += 1) {
    const dayIndex = (nowDayIndex + dayOffset) % DAYS.length;
    const day = DAYS[dayIndex];

    SLOT_ORDER.forEach((slot) => {
      const meal = weeklyPlan[user][day][slot];
      if (!meal) return;

      const window = SLOT_WINDOWS.find((w) => w.slot === slot);
      if (!window) return;

      if (dayOffset === 0) {
        if (slot === currentSlot) {
          candidates.push({
            day,
            slot,
            meal,
            relativeDayLabel: "Today",
            order: nowMinutes - 0.1,
          });
          return;
        }

        if (window.startMinutes <= nowMinutes) return;
      }

      candidates.push({
        day,
        slot,
        meal,
        relativeDayLabel: dayOffset === 0 ? "Today" : "Tomorrow",
        order: dayOffset * 1440 + window.startMinutes,
      });
    });
  }

  return candidates.sort((a, b) => a.order - b.order).slice(0, 2).map(({ order, ...meal }) => meal);
};