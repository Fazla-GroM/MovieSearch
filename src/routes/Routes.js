import HomePage from "../pages/HomePage"
import MoviesPage from "../pages/MoviesPage"
import FavoritesPage from "../pages/FavoritesPage"
import SearchPage from "../pages/SearchPage"
import MovieDetailsPage from "../pages/MovieDetailsPage"
import { ReactComponent as HomeIcon } from "../assets/images/home.svg"
import { ReactComponent as MovieIcon } from "../assets/images/movies.svg"
import { ReactComponent as FavoritesIcon } from "../assets/images/favorite.svg"
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
} from "../redux/movies/moviesActions"
import {
  selectPopularMovies,
  selectTopRatedMovies,
  selectUpcomingMovies,
  selectNowPlayingMovies,
} from "../redux/movies/moviesSelectors"

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    Component: HomePage,
  },
  {
    path: "/movies/:id/:id",
    name: "Movie Details",
    Component: MovieDetailsPage,
  },
  {
    path: "/movies",
    name: "Movies",
    Component: MoviesPage,
  },
  {
    path: "/favorites",
    name: "Favorites",
    Component: FavoritesPage,
  },
  {
    path: "/search",
    name: "Search",
    Component: SearchPage,
  },
]

export const mainLinks = [
  {
    path: "/",
    exact: true,
    name: "Home",
    Icon: HomeIcon,
  },
  {
    path: "/movies/popular",
    name: "Movies",
    Icon: MovieIcon,
  },
  {
    path: "/favorites",
    name: "Favorites",
    Icon: FavoritesIcon,
  },
]

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    Component: HomePage,
    Icon: HomeIcon,
    linkRoute: "/",
  },
  {
    path: "/movies",
    name: "Movies",
    Component: MoviesPage,
    Icon: MovieIcon,
    linkRoute: "/movies/popular",
  },
  {
    path: "/favorites",
    name: "Favorites",
    Component: FavoritesPage,
    Icon: FavoritesIcon,
    linkRoute: "/favorites",
  },
]

export const moviesRoutes = [
  {
    path: "/movies/popular",
    name: "Popular Movies",
    getPageData: getPopularMovies,
    selectPageData: selectPopularMovies,
  },
  {
    path: "/movies/top-rated",
    name: "Top Rated",
    getPageData: getTopRatedMovies,
    selectPageData: selectTopRatedMovies,
  },
  {
    path: "/movies/in-cinemas",
    name: "In Cinemas",
    getPageData: getNowPlayingMovies,
    selectPageData: selectNowPlayingMovies,
  },
  {
    path: "/movies/upcoming",
    name: "Upcoming",
    getPageData: getUpcomingMovies,
    selectPageData: selectUpcomingMovies,
  },
]
