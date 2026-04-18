import { useEffect, useState } from "react";
import { CalendarDays, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react";
import { WEEKLY_PLAN } from "./data/mealPlan";
import { SHOPPING_LIST_SECTIONS } from "./data/shoppingList";
import { getUpcomingMeals } from "./lib/time";
import { DAYS, DayKey, MealEntry, SLOT_LABELS, SLOT_ORDER, UserKey, WATER_TARGET } from "./types";

const USER_STORAGE_KEY = "foodplanner-user";

const quantityPatterns = [
  /^(pinch(?:\s+of)?\s*)/i,
  /^(handful(?:\s+of)?\s*)/i,
  /^(squeeze(?:\s+of)?\s*)/i,
  /^(half(?:\s+of)?\s*)/i,
  /^(quarter(?:\s+of)?\s*)/i,
  /^((?:\d+(?:-\d+)?(?:\/\d+)?(?:\.\d+)?)(?:\s*(?:g|ml|tbsp|tsp|cup|cups|oz|kg|slice|slices|piece|pieces|litres?|l|clove|cloves|spears?|squares?))?\s*)/i,
];

const ingredientLeadingLabelRegex = /^(?:pinch|handful|squeeze|half|quarter|\d+(?:-\d+)?(?:\/\d+)?(?:\.\d+)?(?:\s*(?:g|ml|tbsp|tsp|cup|cups|oz|kg|slice|slices|piece|pieces|litres?|l|clove|cloves|spears?|squares?))?)\s*(?:of\s+)?/i;
const genericTitleRegex = /^(meal|snack)\s*\d*$/i;

const getQuantityPrefix = (item: string): string | null => {
  for (const pattern of quantityPatterns) {
    const match = item.match(pattern);
    if (match) return match[0];
  }
  return null;
};

const getRecipeTitle = (label: string, meal: MealEntry): string => {
  const normalized = meal.title
    .replace(/^meal\s*\d+\s*[:\-]\s*/i, "")
    .replace(/^snack\s*\d+\s*[:\-]\s*/i, "")
    .trim();

  if (normalized && !genericTitleRegex.test(normalized)) {
    return normalized;
  }

  const ingredientFallback = (meal.ingredients[0] || "")
    .replace(ingredientLeadingLabelRegex, "")
    .trim();

  return ingredientFallback || label;
};

function IngredientLine({ item }: { item: string }) {
  const qty = getQuantityPrefix(item);
  if (!qty) return <span>{item}</span>;

  const rest = item.slice(qty.length);
  return (
    <span>
      <span className="text-nutrition font-medium">{qty}</span>
      {rest}
    </span>
  );
}

function MealCard({ label, meal, showDay }: { label: string; meal: MealEntry; showDay?: string }) {
  const recipeTitle = getRecipeTitle(label, meal);

  return (
    <div className="rounded-lg border border-border bg-card p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-foreground">
            {label}: {recipeTitle}
          </h3>
          {showDay ? <p className="text-xs text-muted-foreground mt-1">{showDay}</p> : null}
        </div>
      </div>
      <ul className="space-y-1.5">
        {meal.ingredients.map((item) => (
          <li key={`${label}-${item}`} className="text-sm text-muted-foreground leading-relaxed">
            <IngredientLine item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingListModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/45 px-4 py-6" role="dialog" aria-modal="true">
      <div className="mx-auto flex h-full max-w-4xl flex-col rounded-xl border border-border bg-background">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-lg font-semibold">Shopping List (K + C, full week)</h2>
          <button className="rounded border border-border px-3 py-1.5 text-sm hover:bg-muted" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="overflow-y-auto p-4">
          <div className="grid gap-4 md:grid-cols-2">
            {SHOPPING_LIST_SECTIONS.map((section) => (
              <section key={section.title} className="rounded-lg border border-border bg-card p-3">
                <h3 className="mb-2 text-sm font-bold tracking-wide text-foreground">{section.title}</h3>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li key={`${section.title}-${item}`} className="text-sm text-muted-foreground">
                      <IngredientLine item={item} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedUser, setSelectedUser] = useState<UserKey>(() => {
    const saved = window.localStorage.getItem(USER_STORAGE_KEY);
    return saved === "K" || saved === "C" ? saved : "C";
  });
  const [now, setNow] = useState(() => new Date());
  const [showWeek, setShowWeek] = useState(false);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [openDay, setOpenDay] = useState<DayKey | null>(null);

  useEffect(() => {
    window.localStorage.setItem(USER_STORAGE_KEY, selectedUser);
  }, [selectedUser]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const upcoming = getUpcomingMeals(now, selectedUser, WEEKLY_PLAN);
  const todayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const today = DAYS[todayIndex];
  const toggleDay = (day: DayKey) => {
    setOpenDay((prev) => (prev === day ? null : day));
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 pb-10">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            {(["K", "C"] as UserKey[]).map((user) => (
              <button
                key={user}
                onClick={() => setSelectedUser(user)}
                className={`min-w-10 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                  selectedUser === user ? "bg-nutrition text-white" : "text-foreground hover:bg-muted"
                }`}
                aria-pressed={selectedUser === user}
              >
                {user}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowShoppingList(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <ShoppingBag className="h-4 w-4" />
            Shopping List
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl px-4 pt-24 pb-6 animate-fade-in space-y-5">

        <section className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Food Planner</h1>
            <span className="text-xs text-muted-foreground">{now.toLocaleString()}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {selectedUser === "K" ? "Kamilla" : "Christian"} · Water target {WATER_TARGET[selectedUser]}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Now + Next</h2>
          {upcoming.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
              No meals scheduled.
            </div>
          ) : (
            upcoming.map((entry) => (
              <MealCard
                key={`${entry.day}-${entry.slot}`}
                label={SLOT_LABELS[entry.slot]}
                showDay={`${entry.relativeDayLabel} · ${entry.day}`}
                meal={entry.meal}
              />
            ))
          )}
        </section>

        <section className="space-y-3">
          <button
            onClick={() =>
              setShowWeek((prev) => {
                const next = !prev;
                if (next) {
                  setOpenDay(today);
                }
                return next;
              })
            }
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <CalendarDays className="h-4 w-4" />
            {showWeek ? "Hide Full Week" : "Full Week"}
          </button>

          {showWeek ? (
            <div className="space-y-2">
              {DAYS.map((day) => (
                <div key={day} className="rounded-lg border border-border bg-card">
                  <button
                    onClick={() => toggleDay(day)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:bg-muted/50"
                    aria-expanded={openDay === day}
                  >
                    <span className={day === today ? "text-nutrition" : ""}>{day}</span>
                    {openDay === day ? (
                      <ChevronUp className="h-4 w-4 text-black" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-black" />
                    )}
                  </button>
                  {openDay === day ? (
                    <div className="space-y-3 border-t border-border px-4 py-4">
                      {SLOT_ORDER.map((slot) => {
                        const meal = WEEKLY_PLAN[selectedUser][day][slot];
                        if (!meal) return null;
                        return <MealCard key={`${day}-${slot}`} label={SLOT_LABELS[slot]} meal={meal} />;
                      })}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </section>
      </div>

      {showShoppingList ? <ShoppingListModal onClose={() => setShowShoppingList(false)} /> : null}
    </div>
  );
}
