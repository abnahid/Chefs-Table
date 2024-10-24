import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe Already Exists");
    }
  };

  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calorie);
  };
  return (
    <div>
      <div className="container mx-auto px-4 mb-8">
        <Banner></Banner>
        <section className="flex flex-col md:flex-row gap-6">
          <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
          <Sidebar
            recipeQueue={recipeQueue}
            handleRemove={handleRemove}
            preparedRecipe={preparedRecipe}
            calculateTimeAndCalories={calculateTimeAndCalories}
            totalCalories={totalCalories}
            totalTime={totalTime}
          ></Sidebar>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
