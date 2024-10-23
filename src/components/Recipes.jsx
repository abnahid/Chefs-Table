/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./public/recipes.JSON")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div className="md:w-2/3 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.recipe_id}
            className="card bg-base-100 border border-gray-800 border-opacity-20"
          >
            <figure className="px-10 pt-10">
              <img
                src={recipe.recipe_image}
                className="rounded-xl"
                alt={recipe.recipe_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{recipe.recipe_name}</h2>
              <p className="text-gray-700 border-b-2 pb-4">
                {recipe.short_description}
              </p>
              <div>
                <h2 className="text-xl">
                  Ingredients: <span>{recipe.ingredients.length}</span>
                </h2>
                <ul className="list-disc ml-5">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="li">
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <div className="border-b-2 mb-4 pb-4"></div>
                <div className="flex gap-4 text-gray-800 text-opacity-80 mb-6">
                  <div className="flex items-center">
                    <i className="fa-regular fa-timer mr-2 text-2xl"></i>
                    <p>{recipe.preparing_time} minute.</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular fa-fire-flame-curved mr-2 text-2xl"></i>
                    <p>{recipe.calories} minute.</p>
                  </div>
                </div>
                <button
                  onClick={() => addRecipeToQueue(recipe)}
                  className="btn px-6 bg-green-500 rounded-full text-lg font-medium text-gray-800"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
