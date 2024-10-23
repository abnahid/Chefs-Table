/* eslint-disable react/prop-types */
const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      <h2 className="mx-auto text-2xl font-semibold border-b-2 p-2 text-center text-gray-800">
        Want to cook: {recipeQueue.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <button
                  onClick={() => {
                    handleRemove(recipe.recipe_id);
                    calculateTimeAndCalories(
                      recipe.preparing_time,
                      recipe.calories
                    );
                  }}
                  className="btn px-2 py-1 md:px-4 my-2  bg-green-500 rounded-full font-medium  text-gray-800"
                >
                  Preparing
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table 2 */}
      <h2 className="mx-auto text-2xl font-semibold border-b-2 p-2 text-center text-gray-800">
        Currently cooking:{preparedRecipe.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
              <td></td>
              <td></td>
              <td>Total Time: {totalTime}</td>
              <td>Total Calorie: {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
