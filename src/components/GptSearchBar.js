import { useState } from "react";
import openai from "../services/openai";
import { TMDB_API_URL, TMDB_OPTIONS } from "../services/tmdb";
import { useDispatch, useSelector } from "react-redux";
import { setGptSearch } from "../stores/searchSlice";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const GptSearchBar = ({ searchOpacity }) => {
  const userEmail = useSelector((store) => store?.user?.email);
  const [user, setUser] = useState(userEmail);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");
  const dispatch = useDispatch();

  const handlePrompt = (event) => {
    setSearchPrompt(event.target.value);
  };

  const handleClearPrompt = () => {
    setSearchPrompt("");
  };

  const searchMovies = async (endpoint, query) => {
    try {
      const response = await fetch(
        `${TMDB_API_URL}/search/${endpoint}?query=${query}&language=en-US&page=1`,
        TMDB_OPTIONS
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = async () => {
    setLoadingBtn(true);
    if (user === "gpt4@gmail.com") {
      try {
        const prompt = `
        Act as a movie recommendation system and suggest some movies for the query : ${searchPrompt}.
        Only give me name of 5 movies with comma seperated.
        result should always look like - Spider Man, Elemental, Phir Hera Pheri
      `;
        const gptResponse = await openai.chat.completions.create({
          messages: [{ role: "user", content: prompt }],
          model: "gpt-3.5-turbo",
        });

        const gptResults =
          gptResponse?.choices[0]?.message?.content.split(", ");
        const data = gptResults.map((query) => searchMovies("movie", query));
        const searchResults = await Promise.all(data);

        if (searchResults) {
          setLoadingBtn(false);
        }

        dispatch(
          setGptSearch({ searchResults: gptResults, actionType: "gptResults" })
        );
        dispatch(
          setGptSearch({ searchResults: searchResults, actionType: "movies" })
        );
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // GPT will not work for all user
      const searchTerm = [searchPrompt];
      const data = searchTerm.map((query) => searchMovies("movie", query));
      const searchResults = await Promise.all(data);

      if (searchResults) {
        setLoadingBtn(false);
      }

      dispatch(
        setGptSearch({ searchResults: searchTerm, actionType: "gptResults" })
      );
      dispatch(
        setGptSearch({ searchResults: searchResults, actionType: "movies" })
      );
    }
  };

  return (
    <>
      <div className="px-4 md:px-12 py-3 text-white max-w-4xl text-center m-auto mt-12">
        <h1 className="text-3xl md:text-5xl mb-3 font-bold">
          Let AI be your Movie Advisor !
        </h1>
      </div>
      <div
        className="px-4 md:px-12 py-3 sticky top-[68px] z-[99999] bg-black bg-opacity-80 shadow-lg transition-all duration-300 ease-in-out"
        style={{ background: `rgba(20, 20, 20, ${searchOpacity})` }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-3 items-center">
            <div className="relative flex-grow">
              <span className="text-gray-400 text-[22px] md:text-[36px] absolute left-4 top-[25px] transform -translate-y-1/2">
                <SearchOutlinedIcon style={{ fontSize: "32px" }} />
              </span>
              <input
                type="text"
                placeholder="Search Movies, Shows and more"
                className="py-3 md:py-4 pl-12 pr-10 md:pl-16 md:pr-14 w-full bg-[#333] text-white rounded-full focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-red-primary text-lg transition duration-300"
                onChange={handlePrompt}
                value={searchPrompt}
              />
              {searchPrompt && (
                <span
                  className="text-gray-400 text-[28px] md:text-[36px] absolute right-4 top-[25px] transform -translate-y-1/2 cursor-pointer"
                  onClick={handleClearPrompt}
                >
                  <CloseIcon style={{ fontSize: "32px" }} />
                </span>
              )}
            </div>
            <button
              className={`py-3 md:py-4 px-5 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full text-white disabled:bg-red-600 transition duration-300 font-semibold ${
                searchPrompt ? "shadow-md" : ""
              }`}
              onClick={handleSearch}
              disabled={searchPrompt === ""}
            >
              {loadingBtn ? (
                <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
              ) : (
                <span className="hidden md:inline-block">Search</span>
              )}
              <span className="text-[22px] md:hidden">
                <SearchOutlinedIcon style={{ fontSize: "28px" }} />
              </span>
            </button>
          </div>
          <p className="text-xs mt-4 text-gray-400">
            Note: Movie recommendations powered by GPT are available on request
            due to paid APIs.
            <Link
              to="https://www.linkedin.com/in/nur-adnan/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-sm text-red-500 hover:text-red-600 transition-all ease-in-out"
            >
              Request now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
