import { useSelector } from "react-redux";
import MovieSlider from "./MovieSlider";

const SearchResult = () => {
  const { gptResults, movies } = useSelector((store) => store.search);
  if (!gptResults) return null;

  return (
    <>
      {gptResults.map((title, index) => (
        <MovieSlider
          key={title}
          heading={
            <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
          }
          data={movies[index]}
        />
      ))}
    </>
  );
};

export default SearchResult;
