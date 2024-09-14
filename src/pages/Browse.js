import Showcase from "../components/Showcase";
import MovieSlider from "../components/MovieSlider";
import useMovie from "../hooks/useMovie";
import useTrending from "../hooks/useTrending";
import { SHOWCASE, TRENDINGS, MOVIES } from "../services/tmdb";
import { useSelector } from "react-redux";
import useShowCase from "../hooks/useShowCase";
import ShowcaseShimmer from "../components/ShowcaseShimmer";
import MovieSliderShimmer from "../components/MovieSliderShimmer";

const Browse = () => {
  const { landingPage } = SHOWCASE;
  const { trendingAll, trendingTv, trendingMovies } = TRENDINGS;
  const { nowPlaying, popular, topRated } = MOVIES;

  /**
   * Fetch data using below custom hooks, and set to Redux Store
   * @useShowCase
   * @useTrending
   * @useMovies
   */

  useShowCase(landingPage.endpoint, landingPage.type, null, "en", 19);

  useTrending(trendingAll.endpoint, trendingAll.type);
  useTrending(trendingTv.endpoint, trendingTv.type);
  useTrending(trendingMovies.endpoint, trendingMovies.type);

  useMovie(nowPlaying.endpoint, nowPlaying.type);
  useMovie(topRated.endpoint, topRated.type);
  useMovie(popular.endpoint, popular.type);
  useMovie(popular.endpoint, "bollywood", null, "hi");

  /**
   * Receive data from Redux Store
   * @useShowCase
   * @useTrending
   * @useMovies
   */

  const showCase = useSelector((store) => store?.showCase?.landingPage);
  const trendings = useSelector((store) => store?.trendings);
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="broswe-page">
      {showCase ? <Showcase data={showCase} /> : <ShowcaseShimmer />}
      <div className="moview-by-type px-4 md:px-12 md:mt-[-10%] xl:mt-[-15%] z-50 relative">
        {movies.nowPlaying ? (
          <MovieSlider
            type={null}
            heading={
              <h2 className="text-white text-2xl font-bold mb-4">
                Now Playing
              </h2>
            }
            data={movies.nowPlaying}
          />
        ) : (
          <MovieSliderShimmer dimention={"w-28 md:w-36"} />
        )}

        {trendings.trendingMovies ? (
          <MovieSlider
            type="trending"
            heading={
              <h2 className="text-white text-2xl font-bold mb-4">
                Top 10 Trending Movies
              </h2>
            }
            data={trendings.trendingMovies}
          />
        ) : (
          <MovieSliderShimmer dimention={"w-52 h-[200px]"} />
        )}

        {movies.bollywood ? (
          <MovieSlider
            type={null}
            heading={
              <h2 className="text-white text-2xl font-bold mb-4">
                Now Playing Bollywood Movies
              </h2>
            }
            data={movies.bollywood}
          />
        ) : (
          <MovieSliderShimmer dimention={"w-28 md:w-36"} />
        )}

        {movies.topRated ? (
          <MovieSlider
            type={null}
            heading={
              <h2 className="text-white text-2xl font-bold mb-4">
                Top Rated Movies
              </h2>
            }
            data={movies.topRated}
          />
        ) : (
          <MovieSliderShimmer dimention={"w-28 md:w-36"} />
        )}

        {trendings.trendingTv ? (
          <MovieSlider
            type="trending"
            heading={
              <h2 className="text-white text-2xl font-bold mb-4">
                Top 10 TV Shows in India
              </h2>
            }
            data={trendings.trendingTv}
          />
        ) : (
          <MovieSliderShimmer dimention={"w-52 h-[200px]"} />
        )}

        {movies.popular ? (
          <MovieSlider
            type={null}
            heading={
              <h2 className="text-white text-2xl font-bold mb-4">
                Popular Movies
              </h2>
            }
            data={movies.popular}
          />
        ) : (
          <MovieSliderShimmer dimention={"w-28 md:w-36"} />
        )}
      </div>
    </div>
  );
};

export default Browse;
