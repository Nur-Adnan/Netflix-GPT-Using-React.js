import { Link } from "react-router-dom";
import { POSTER_BG } from "../utils/constants";
import { PAGE } from "../router/routes";

const Home = () => {
  return (
    <div className="relative text-gray-500 min-h-screen">
      <div className="absolute -z-[1] min-h-screenf h-full">
        <img
          src={POSTER_BG}
          alt="NetflixGPT"
          className="w-screen h-full object-cover"
        />
      </div>
      <div className="flex items-center min-h-screen bg-gradient-to-t from-black/90 to-transparent pt-[70px]">
        <div className="px-4 md:px-24 py-6 text-white text-center w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center max-w-[800px] mx-auto leading-[1.2] md:leading-[1.1] lg:leading-[1.05] mt-6 md:mt-8 lg:mt-10">
            Unlimited movies, TV shows, and more
          </h1>
          <h4 className="text-xl md:text-xl my-4 text-gray-50 font-bold mt-4 md:mt-6 lg:mt-8">
            Starts at USD 2.99. Cancel anytime.
          </h4>
          <h4 className="md:text-lg my-4 mb-5 mt-2 md:mt-4">
            Ready to watch? Get Started to create or restart your membership.
          </h4>
          <div className="mt-4">
            <Link
              to={PAGE.SIGNIN}
              className="inline-block bg-[#e50914] px-8 py-3 text-white text-lg font-bold rounded-sm hover:bg-[#f40612] transition duration-300"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
