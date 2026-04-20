import { DAYS, DayKey, DayPlan, MealEntry, MealSlot, WeeklyPlanByUser } from "../types";

const meal = (title: string, ingredients: string[]): MealEntry => ({ title, ingredients });

const christianSnack3FromPdf = meal("Snack 3", ["150g Lindahls Kvarg (any flavour)"]);

const baseFromPdf: WeeklyPlanByUser = {
  K: {
    Monday: {
      meal1: meal("Meal 1", ["55g wholegrain rolled oats", "75g blueberries", "250ml unsweetened almond milk", "1/2 scoop Purition", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["1 banana", "200ml almond milk", "1/2 scoop Purition"]),
      meal2: meal("Meal 2", ["150g chicken breast", "125g roasted veg brown basmati rice", "100g green vegetables", "3 tsp mild piri piri"]),
      snack2: meal("Snack 2", ["30g cashews"]),
      meal3: meal("Meal 3", ["125g salmon fillet", "175g sweet potato wedges", "80g green beans"]),
    },
    Tuesday: {
      meal1: meal("Meal 1", ["170g 0% yogurt", "1/2 scoop Purition", "80g blueberries", "50ml almond milk", "20g cashews", "10g flaked almonds", "75g raspberries", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["1 banana"]),
      meal2: meal("Meal 2", ["130g turkey chilli", "1 tbsp 0% yogurt", "1/2 avocado"]),
      snack2: meal("Snack 2", ["1 apple", "2 blueberry & vanilla Kallo rice cakes"]),
      meal3: meal("Meal 3", ["3 egg omelette", "red onion", "mushrooms", "tomatoes", "50g reduced fat mozzarella", "side salad"]),
    },
    Wednesday: {
      meal1: meal("Meal 1", ["1 scoop Purition", "100g frozen strawberries", "250ml unsweetened almond milk", "1/2 avocado", "100g fat free yogurt"]),
      snack1: meal("Snack 1", ["1 apple"]),
      meal2: meal("Meal 2", ["150g chicken breast", "sweet red pepper", "1/2 red onion", "3 tbsp balsamic vinegar", "1 tbsp low fat hummus", "1 tsp coconut oil", "side salad"]),
      snack2: meal("Snack 2", ["170g 0% Greek yogurt", "100g mixed berries", "2 squares Lindt 80% dark chocolate", "10g flaked almonds"]),
      meal3: meal("Meal 3", ["200g cod loin", "30g reduced fat red pesto", "150g sweet potato wedges", "100g mixed green vegetables"]),
    },
    Thursday: {
      meal1: meal("Meal 1", ["55g wholegrain rolled oats", "75g blueberries", "250ml unsweetened almond milk", "1/2 scoop Purition", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["1 banana", "200ml almond milk", "1/2 scoop Purition"]),
      meal2: meal("Meal 2", ["150g chicken breast", "125g roasted veg brown basmati rice", "100g green vegetables", "3 tsp mild piri piri"]),
      snack2: meal("Snack 2", ["30g cashews"]),
      meal3: meal("Meal 3", ["125g salmon fillet", "175g sweet potato wedges", "80g green beans"]),
    },
    Friday: {
      meal1: meal("Meal 1", ["1/2 scoop Purition", "100g frozen strawberries", "250ml unsweetened almond milk", "1/2 avocado", "100g fat free yogurt", "2 tsp mild honey"]),
      snack1: meal("Snack 1", ["30g mixed nuts"]),
      meal2: meal("Meal 2", ["150g chicken breast", "1 tbsp light green pesto", "mixed side salad", "30g reduced-fat feta", "1 boiled egg"]),
      snack2: meal("Snack 2", ["1 banana"]),
      meal3: meal("Meal 3", ["4 Heck chicken sausages", "200g sweet potato", "2 tsp chipotle paste", "100g broccoli", "4 tbsp reduced salt gravy"]),
    },
    Saturday: {
      meal1: meal("Meal 1", ["50g wholegrain rolled oats", "75g blueberries", "250ml unsweetened almond milk", "1/2 scoop Purition", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["30g cashews"]),
      meal2: meal("Meal 2", ["150g chicken breast", "125g chilli and lime basmati rice", "75g green beans"]),
      snack2: meal("Snack 2", ["1 apple"]),
      meal3: meal("Meal 3", ["200g lean fillet steak", "asparagus", "mixed leaves", "cherry tomatoes", "reduced fat honey-mustard dressing", "15g parmesan", "125g new potatoes"]),
    },
    Sunday: {
      meal1: meal("Meal 1", ["2 scrambled eggs", "60g smoked salmon", "1/2 avocado", "asparagus spears"]),
      snack1: meal("Snack 1", ["2 blueberry and vanilla rice cakes"]),
      meal2: meal("Meal 2", ["125g king prawns", "buddha bowl"]),
      snack2: meal("Snack 2", ["125g mixed berries"]),
      meal3: meal("Meal 3", ["Chicken tikka curry", "100g basmati rice"]),
    },
  },
  C: {
    Monday: {
      meal1: meal("Meal 1", ["80g oats", "300ml unsweetened almond milk", "1/2 scoop whey", "50g blueberries"]),
      snack1: meal("Snack 1", ["1 apple", "1 banana"]),
      meal2: meal("Meal 2", ["150g chicken breast", "125g chilli and lime rice", "100g green beans"]),
      snack2: meal("Snack 2", ["1 scoop whey", "300ml water", "1 snack a jack"]),
      meal3: meal("Meal 3", ["3 pork sausages", "300g sweet potato mash", "20g chipotle paste", "125g broccoli", "reduced salt gravy"]),
      snack3: christianSnack3FromPdf,
    },
    Tuesday: {
      meal1: meal("Meal 1", ["80g oats", "300ml unsweetened almond milk", "1 scoop whey", "50g blueberries", "10g flaked almonds"]),
      snack1: meal("Snack 1", ["30g cashews", "1 banana"]),
      meal2: meal("Meal 2", ["150g chicken breast", "125g chilli and lime rice", "100g green beans"]),
      snack2: meal("Snack 2", ["3/4 scoop whey", "250ml water", "3 snack a jacks"]),
      meal3: meal("Meal 3", ["King prawn arrabbiata", "90g penne", "20g parmesan"]),
      snack3: christianSnack3FromPdf,
    },
    Wednesday: {
      meal1: meal("Meal 1", ["80g oats", "300ml unsweetened almond milk", "1 scoop whey", "50g blueberries", "10g flaked almonds"]),
      snack1: meal("Snack 1", ["1 banana", "1 apple"]),
      meal2: meal("Meal 2", ["150g chicken breast", "nandos piri piri", "300g sweet potato wedges", "80g peas"]),
      snack2: meal("Snack 2", ["3/4 scoop whey", "250ml water", "1 caramel snack a jack"]),
      meal3: meal("Meal 3", ["240g salmon fillet", "225g new potatoes", "2 tsp mint sauce", "100g mixed greens"]),
      snack3: christianSnack3FromPdf,
    },
    Thursday: {
      meal1: meal("Meal 1", ["80g oats", "300ml unsweetened almond milk", "1 scoop whey", "50g blueberries", "10g flaked almonds"]),
      snack1: meal("Snack 1", ["1 scoop whey", "400ml oat milk", "1 caramel snack a jack"]),
      meal2: meal("Meal 2", ["Wholemeal bagel", "30g light Philadelphia", "3 poached eggs", "spinach"]),
      snack2: meal("Snack 2", ["1 caramel snack a jack"]),
      meal3: meal("Meal 3", ["Naked fajita bowl", "200g chicken", "black beans", "avocado", "125g spicy mexican rice", "cool salsa", "low fat creme fraiche"]),
      snack3: christianSnack3FromPdf,
    },
    Friday: {
      meal1: meal("Meal 1", ["80g oats", "300ml unsweetened almond milk", "1/2 scoop whey", "50g blueberries"]),
      snack1: meal("Snack 1", ["1 apple", "1 banana"]),
      meal2: meal("Meal 2", ["150g chicken breast", "125g chilli and lime rice", "100g green beans"]),
      snack2: meal("Snack 2", ["1 scoop whey", "300ml water", "1 snack a jack"]),
      meal3: meal("Meal 3", ["3 pork sausages", "300g sweet potato mash", "20g chipotle paste", "125g broccoli", "reduced salt gravy"]),
      snack3: christianSnack3FromPdf,
    },
    Saturday: {
      meal1: meal("Meal 1", ["80g oats", "300ml unsweetened almond milk", "1 scoop whey", "50g blueberries", "10g flaked almonds"]),
      snack1: meal("Snack 1", ["1 scoop whey", "400ml oat milk", "1 caramel snack a jack"]),
      meal2: meal("Meal 2", ["Wholemeal bagel", "30g light Philadelphia", "3 poached eggs", "spinach"]),
      snack2: meal("Snack 2", ["1 caramel snack a jack"]),
      meal3: meal("Meal 3", ["Naked fajita bowl", "200g chicken", "black beans", "avocado", "125g spicy mexican rice", "cool salsa", "low fat creme fraiche"]),
      snack3: christianSnack3FromPdf,
    },
    Sunday: {
      meal1: meal("Meal 1", ["Lower carb rest day breakfast"]),
      snack1: meal("Snack 1", ["As per rest day plan"]),
      meal2: meal("Meal 2", ["As per rest day plan"]),
      snack2: meal("Snack 2", ["As per rest day plan"]),
      meal3: meal("Meal 3", ["As per rest day plan"]),
      snack3: christianSnack3FromPdf,
    },
  },
};

const overridesFromPlanUpdates: WeeklyPlanByUser = {
  K: {
    Monday: {
      meal1: meal("Meal 1", ["170g 0% Greek yogurt", "1/2 scoop Purition", "80g frozen blueberries", "50ml almond milk", "10g flaked almonds", "75g raspberries", "1 tsp chia seeds", "20g cashews"]),
      snack1: meal("Snack 1", ["1 banana"]),
      meal2: meal("Meal 2 - Lean Beef Taco Bowl", ["150g lean beef mince (5% fat)", "1/2 small red onion", "1/2 red pepper", "75g kidney beans", "100g chopped tomatoes", "1 tsp olive oil", "1 tsp smoked paprika", "1/2 tsp cumin", "1/2 tsp garlic powder", "Pinch chilli flakes", "1 tbsp 0% Greek yogurt", "1/2 avocado", "Handful lettuce/side salad", "Squeeze of lime", "100g cooked basmati rice"]),
      snack2: meal("Snack 2", ["1 apple", "2 Kallo blueberry and vanilla rice cakes"]),
      meal3: meal("Meal 3 - Cod, Roasted Veg and Baby Potatoes", ["1/2 courgette", "1/2 red pepper", "4-5 mushrooms", "1/2 small red onion", "1 tsp olive oil or low-cal spray", "Side salad", "1 tsp paprika", "1/2 tsp garlic powder", "Black pepper", "Lemon wedge", "170g cod", "180g baby potatoes", "20g reduced-fat feta"]),
    },
    Tuesday: {
      meal1: meal("Meal 1 - Oats", ["55g wholegrain rolled oats", "250ml almond milk", "1/2 scoop Purition", "75g blueberries", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["1 banana", "1 protein yogurt pot"]),
      meal2: meal("Meal 2", ["150g chicken breast", "100g green vegetables", "3 tsp mild piri piri", "125g Tilda roasted veg brown basmati rice"]),
      snack2: meal("Snack 2", ["30g cashews"]),
      meal3: meal("Meal 3 - Pork Loin Medallions, Baby Potatoes and Broccoli", ["170g pork loin medallions", "180g baby potatoes", "100g broccoli", "1 tsp paprika", "1/2 tsp garlic powder", "Black pepper", "1 tsp olive oil or low-cal spray"]),
    },
    Wednesday: {
      meal1: meal("Meal 1", ["1 scoop Purition", "100g frozen strawberries", "1/2 avocado", "100g fat free yogurt", "250ml unsweetened almond milk"]),
      snack1: meal("Snack 1", ["1 apple"]),
      meal2: meal("Meal 2", ["150g chicken breast", "1 medium sweet red pointed pepper", "1/2 red onion", "3 tbsp balsamic vinegar", "1 tbsp low fat hummus", "1 tsp coconut oil", "Side salad"]),
      snack2: meal("Snack 2", ["170g 0% Greek yogurt", "100g mixed berries", "10g flaked almonds", "2 squares Lindt 80% dark chocolate"]),
      meal3: meal("Meal 3 - Lean Beef Kofta, Sweet Potato Wedges and Green Beans", ["150g lean beef mince, 5% fat", "150g sweet potato wedges", "80g green beans", "1 tbsp very finely diced red onion", "1/2 tsp garlic powder", "1 tsp cumin", "1 tsp smoked paprika", "1/2 tsp oregano", "Black pepper", "Pinch chili flakes, optional", "1 tsp olive oil or low-cal spray", "Method: Mix beef with red onion, garlic powder, cumin, smoked paprika, oregano, black pepper, and optional chili flakes", "Shape into koftas or small patties", "Cook until fully cooked through", "Serve with sweet potato wedges and green beans"]),
    },
    Thursday: {
      meal1: meal("Meal 1 - Oats", ["55g wholegrain rolled oats", "250ml almond milk", "1/2 scoop Purition", "75g blueberries", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["1 banana", "200ml almond milk", "1/2 scoop Purition"]),
      meal2: meal("Meal 2", ["150g chicken breast", "100g green vegetables", "3 tsp mild piri piri", "125g Tilda roasted veg brown basmati rice"]),
      snack2: meal("Snack 2", ["30g cashews"]),
      meal3: meal("Meal 3 - Red Pesto Cod", ["200g cod loin", "30g reduced-fat red pesto", "150g sweet potato wedges", "100g mixed green vegetables", "Cajun spices", "Low-cal spray or 1 tsp olive oil"]),
    },
    Friday: {
      meal1: meal("Meal 1", ["100g frozen strawberries", "250ml unsweetened almond milk", "1/2 avocado", "100g fat free yogurt", "1/2 scoop Purition", "2 tsp mild honey"]),
      snack1: meal("Snack 1", ["30g mixed nuts"]),
      meal2: meal("Meal 2 - Chicken Pesto Salad", ["150g chicken breast", "1 tbsp light green pesto", "Mixed side salad", "30g reduced-fat feta", "1 boiled egg", "Chopped cucumber", "Extra tomatoes"]),
      snack2: meal("Snack 2", ["1 banana"]),
      meal3: meal("Meal 3 - Sausage & Mash", ["4 Heck chicken sausages", "2 tsp chipotle paste", "100g broccoli", "4 tbsp reduced salt gravy", "200g sweet potato"]),
    },
    Saturday: {
      meal1: meal("Meal 1 - Oats", ["50g wholegrain rolled oats", "250ml almond milk", "1/2 scoop Purition", "75g blueberries", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["30g cashews"]),
      meal2: meal("Meal 2 - Cajun Chicken Rice Bowl", ["150g chicken breast with Cajun seasoning", "75g green beans", "1/2 red pepper", "1/4 red onion", "1 tsp olive oil", "Handful cherry tomatoes", "Extra diced cucumber", "Squeeze of lime", "Black pepper", "125g cooked chili and lime basmati rice"]),
      snack2: meal("Snack 2", ["1 apple"]),
      meal3: meal("Meal 3 - Steak Salad", ["200g lean fillet steak", "4 asparagus spears", "Mixed leaves and rocket", "Chopped cherry tomatoes", "1.5 tbsp reduced-fat honey and mustard dressing", "15g parmesan shavings", "1/4 red onion", "1 tbsp balsamic vinegar", "125g new potatoes"]),
    },
    Sunday: {
      meal1: meal("Meal 1 - Greek Yogurt Protein Bowl", ["170g 0% Greek yogurt", "75g mixed berries", "1/2 scoop Purition", "Cinnamon", "10g chia seeds", "10g flaked almonds"]),
      snack1: meal("Snack 1", ["2 Kallo blueberry and vanilla rice cakes"]),
      meal2: meal("Meal 2 - Prawn Stir-Fry with Noodles", ["1/2 red pepper", "1/2 yellow pepper", "1/2 small onion", "80g broccoli/tenderstem", "1 tsp sesame oil or olive oil", "1 garlic clove", "1 tsp ginger", "1 tbsp low-salt soy sauce", "1 tsp sweet chili sauce (optional)", "Chili flakes (optional)", "Squeeze of lime", "150g king prawns", "100g cooked rice noodles"]),
      snack2: meal("Snack 2", ["125g mixed berries"]),
      meal3: meal("Meal 3 - Chicken Tikka Curry", ["150g chicken breast", "Tikka curry sauce (as recipe)", "Chopped coriander", "100g basmati rice"]),
    },
  },
  C: {
    Monday: {
      meal1: meal("Meal 1", ["170g 0% Greek yogurt", "1/2 scoop Purition", "80g frozen blueberries", "50ml almond milk", "10g flaked almonds", "75g raspberries", "1 tsp chia seeds", "15g cashews"]),
      snack1: meal("Snack 1", ["1 banana", "200ml almond milk", "1/2 scoop Purition"]),
      meal2: meal("Meal 2 - Lean Beef Taco Bowl", ["175g lean beef mince (5% fat)", "1/2 small red onion", "1/2 red pepper", "75g kidney beans", "100g chopped tomatoes", "1 tsp olive oil", "1 tsp smoked paprika", "1/2 tsp cumin", "1/2 tsp garlic powder", "Pinch chilli flakes", "1 tbsp 0% Greek yogurt", "1/2 avocado", "Handful lettuce/side salad", "Squeeze of lime", "125g cooked basmati rice"]),
      snack2: meal("Snack 2", ["1 apple"]),
      meal3: meal("Meal 3 - Cod, Roasted Veg and Baby Potatoes", ["1/2 courgette", "1/2 red pepper", "4-5 mushrooms", "1/2 small red onion", "1 tsp olive oil or low-cal spray", "Side salad", "1 tsp paprika", "1/2 tsp garlic powder", "Black pepper", "Lemon wedge", "200g cod", "220g baby potatoes", "30g reduced-fat feta"]),
    },
    Tuesday: {
      meal1: meal("Meal 1 - Oats", ["62.5g wholegrain rolled oats", "300ml almond milk", "10g peanut butter", "1/2 scoop Purition", "75g blueberries", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["1 banana", "200ml almond milk", "1/2 scoop Purition"]),
      meal2: meal("Meal 2", ["150g chicken breast", "100g green vegetables", "3 tsp mild piri piri", "125g Tilda brown basmati rice"]),
      snack2: meal("Snack 2", ["1 apple", "25g cashews"]),
      meal3: meal("Meal 3 - Pork Loin Medallions, Baby Potatoes and Broccoli", ["200g pork loin medallions", "220g baby potatoes", "100g broccoli", "1 tsp paprika", "1/2 tsp garlic powder", "Black pepper", "1 tsp olive oil or low-cal spray"]),
    },
    Wednesday: {
      meal1: meal("Meal 1", ["1/2 scoop Purition", "1 medium banana", "20g peanut butter", "2 tsp mild honey", "Ice", "250ml unsweetened almond milk"]),
      snack1: meal("Snack 1", ["1 apple"]),
      meal2: meal("Meal 2", ["150g chicken breast", "1 medium sweet red pointed pepper", "1/2 red onion", "3 tbsp balsamic vinegar", "1 tbsp low fat hummus", "1 tsp coconut oil", "1 large wholemeal wrap", "1 handful spinach", "1/2 avocado mashed"]),
      snack2: meal("Snack 2", ["170g 0% Greek yogurt", "100g mixed berries", "10g flaked almonds", "1 chocolate rice cake (crumbled)"]),
      meal3: meal("Meal 3 - Lean Beef Kofta, Sweet Potato Wedges and Green Beans", ["180g lean beef mince, 5% fat", "200g sweet potato wedges", "100g green beans", "1 tbsp very finely diced red onion", "1/2 tsp garlic powder", "1 tsp cumin", "1 tsp smoked paprika", "1/2 tsp oregano", "Black pepper", "Pinch chili flakes, optional", "1 tsp olive oil or low-cal spray", "Method: Mix beef with red onion, garlic powder, cumin, smoked paprika, oregano, black pepper, and optional chili flakes", "Shape into koftas or small patties", "Cook until fully cooked through", "Serve with sweet potato wedges and green beans"]),
    },
    Thursday: {
      meal1: meal("Meal 1 - Oats", ["62.5g wholegrain rolled oats", "300ml almond milk", "10g peanut butter", "1/2 scoop Purition", "75g blueberries", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["1 banana", "200ml almond milk", "1/2 scoop Purition"]),
      meal2: meal("Meal 2", ["150g chicken breast", "100g green vegetables", "3 tsp mild piri piri", "125g Tilda brown basmati rice"]),
      snack2: meal("Snack 2", ["1 apple", "25g cashews"]),
      meal3: meal("Meal 3 - Red Pesto Cod", ["200g cod loin", "30g reduced-fat red pesto", "200g sweet potato wedges", "100g mixed green vegetables", "Cajun spices", "Low-cal spray or 1 tsp olive oil"]),
    },
    Friday: {
      meal1: meal("Meal 1", ["100g frozen strawberries", "250ml unsweetened almond milk", "1/2 avocado", "100g fat free yogurt", "1 scoop Purition"]),
      snack1: meal("Snack 1", ["30g mixed nuts"]),
      meal2: meal("Meal 2 - Chicken Pesto Salad", ["150g chicken breast", "1 tbsp light green pesto", "Mixed side salad", "30g reduced-fat feta", "1 boiled egg", "Chopped cucumber", "Extra tomatoes"]),
      snack2: meal("Snack 2", ["170g 0% Greek yogurt", "100g mixed berries", "1 chocolate rice cake", "10g flaked almonds", "2 tsp mild honey"]),
      meal3: meal("Meal 3 - Sausage & Mash", ["4 Heck chicken sausages", "2 tsp chipotle paste", "100g broccoli", "4 tbsp reduced salt gravy", "250g sweet potato"]),
    },
    Saturday: {
      meal1: meal("Meal 1 - Oats", ["62.5g wholegrain rolled oats", "300ml almond milk", "10g peanut butter", "2 tsp mild honey", "75g blueberries", "1 tsp chia seeds"]),
      snack1: meal("Snack 1", ["25g cashews"]),
      meal2: meal("Meal 2 - Cajun Chicken Rice Bowl", ["150g chicken breast with Cajun seasoning", "75g green beans", "1/2 red pepper", "1/4 red onion", "1 tsp olive oil", "Handful cherry tomatoes", "Extra diced cucumber", "Squeeze of lime", "Black pepper", "150g cooked chili and lime basmati rice"]),
      snack2: meal("Snack 2", ["1 scoop Purition"]),
      meal3: meal("Meal 3 - Steak Salad", ["200g lean fillet steak", "4 asparagus spears", "Mixed leaves and rocket", "Chopped cherry tomatoes", "1.5 tbsp reduced-fat honey and mustard dressing", "15g parmesan shavings", "1/4 red onion", "1 tbsp balsamic vinegar", "175g new potatoes"]),
    },
    Sunday: {
      meal1: meal("Meal 1 - Greek Yogurt Protein Bowl", ["170g 0% Greek yogurt", "75g mixed berries", "1/2 scoop Purition", "Cinnamon", "15g chia seeds", "15g flaked almonds", "Optional 1 slice wholemeal toast"]),
      snack1: meal("Snack 1", ["20g mixed nuts"]),
      meal2: meal("Meal 2 - Prawn Stir-Fry with Noodles", ["1/2 red pepper", "1/2 yellow pepper", "1/2 small onion", "80g broccoli/tenderstem", "1 tsp sesame oil or olive oil", "1 garlic clove", "1 tsp ginger", "1 tbsp low-salt soy sauce", "1 tsp sweet chili sauce (optional)", "Chili flakes (optional)", "Squeeze of lime", "175g king prawns", "130g cooked rice noodles"]),
      snack2: meal("Snack 2", ["1 banana"]),
      meal3: meal("Meal 3 - Chicken Tikka Curry", ["150g chicken breast", "Tikka curry sauce (as recipe)", "Chopped coriander", "125g basmati rice"]),
    },
  },
};

const mergeDayPlan = (base: DayPlan, override: DayPlan): DayPlan => {
  const merged: DayPlan = { ...base };
  (Object.keys(override) as MealSlot[]).forEach((slot) => {
    merged[slot] = override[slot];
  });
  return merged;
};

const mergePlan = (base: WeeklyPlanByUser, override: WeeklyPlanByUser): WeeklyPlanByUser => {
  const merged = structuredClone(base) as WeeklyPlanByUser;

  (Object.keys(override) as (keyof WeeklyPlanByUser)[]).forEach((user) => {
    DAYS.forEach((day) => {
      merged[user][day] = mergeDayPlan(merged[user][day], override[user][day]);
    });
  });

  DAYS.forEach((day) => {
    if (!merged.C[day].snack3) {
      merged.C[day].snack3 = christianSnack3FromPdf;
    }
  });

  return merged;
};

export const WEEKLY_PLAN = mergePlan(baseFromPdf, overridesFromPlanUpdates);
