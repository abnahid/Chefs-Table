import Banner from "./components/Banner";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Banner></Banner>
      <section className="flex flex-col md:flex-row gap-6">
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </section>
    </div>
  );
}

export default App;
