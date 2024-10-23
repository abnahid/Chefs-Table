const Banner = () => {
  return (
    <div className="font">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xs lg:text-xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="lg:mr-10 mr-2">
            <input
              type="text"
              placeholder=" Search hear"
              className="input input-bordered input-info w-full  bg-gray-100 rounded-3xl"
            />
          </div>
          <a className="">
            <button>
              <img src="https://i.ibb.co/Tt4GLMV/Frame-5.jpg"></img>
            </button>
          </a>
        </div>
      </div>
      <div className="mb-14 mt-10 p-0">
        <div className="hero ">
          <img
            className="min-h-full"
            src="https://i.ibb.co/Wt2ktH4/banner.jpg"
          ></img>

          <div className="hero-content  text-neutral-content">
            <div className="lg:mx-24 ">
              <h1 className="mb-5 text-2xl lg:text-5xl text-center font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5 text-center">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
              <div className="flex justify-center">
                <button className="btn bg-green-500 rounded-3xl mr-7 font-semibold text-gray-900">
                  Explore Now
                </button>
                <button className="btn bg-transparent rounded-3xl  font-semibold text-white">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start main part */}
      <div className="mb-10">
        <div className="text-center mb-14">
          <h1 className="font-bold text-4xl">Our Recipes</h1>
          <p className="font-semibold text-gray-600">
            Welcome, we’re glad you are here. We believe in sharing life through
            great food at our own tables. Let’s make something delicious
            tonight!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
