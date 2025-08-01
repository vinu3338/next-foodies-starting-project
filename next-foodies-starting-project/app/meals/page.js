import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals.grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meal",
  description: "Browse the delicious meal shared by our vibrant community.",
};

async function Meals() {
  console.log("Fetching Meals");
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  //const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your favourite recipe and cook it yourself. </p>
        <p className={classes.cta}>
          <Link href="meals/share"> Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
