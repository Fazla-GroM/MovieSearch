import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHomePageMovies } from "../redux/movies/moviesActions"
import { selectHomePageMovies } from "../redux/movies/moviesSelectors"
import HeroBox from "../components/HeroBox"
import FeaturedMovies from "../components/FeaturedMovies"
import Testimonials from "../components/Testimonials"
import PoweredBy from "../components/PoweredBy"

const HomePage = () => {
  const dispatch = useDispatch()
  const pageData = useSelector(selectHomePageMovies)

  useEffect(() => {
    dispatch(getHomePageMovies())
  }, [])

  console.log("home")
  return (
    <>
      <HeroBox />
      <FeaturedMovies
        cardLink="/movies/popular"
        title="Popular Movies"
        data={pageData.popularMovies}
      />
      <FeaturedMovies
        cardLink="/movies/in-cinemas"
        title="In Cinemas"
        data={pageData.nowPlayingMovies}
      />
      <Testimonials />
      <FeaturedMovies
        cardLink="/movies/top-rated"
        title="Top Rated Movies"
        data={pageData.topRatedMovies}
      />
      <FeaturedMovies
        cardLink="/movies/upcoming"
        title="Comming Soon"
        data={pageData.upcomingMovies}
      />
      <PoweredBy />
    </>
  )
}

export default HomePage
