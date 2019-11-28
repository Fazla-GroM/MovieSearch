import React from "react";
import { css } from "@emotion/core";
import { red, greyLight } from "../../../themeVar";
//components
import CustomSwiper from "../../../components/customSwiper/CustomSwiper";

const HomePageTrending = () => {
  const cssTrending = css({
    width: "100%",

    ".title": {
      textAlign: "center",
      marginBottom: "40px",
      fontSize: "2.5rem",
      color: red,
      fontWeight: "700",
      textTransform: "uppercase"
    },

    ".swiper-box": {
      borderBottom: `1px solid ${greyLight}`,
      height: "300px",
      marginBottom: "40px",
      width: "100%",
      height: "100%"
    },

    ".subtitle": {
      fontSize: "2rem",
      color: red
    }
  });

  return (
    <section css={cssTrending}>
      <div className="container">
        <div className="title">
          <h3>Trending this week</h3>
        </div>
        <div className="swiper-box">
          <div className="subtitle">
            <h4>Movies</h4>
          </div>
          <CustomSwiper />
        </div>
        <div className="swiper-box">
          <div className="subtitle">
            <h4>TV Shows</h4>
          </div>
          <CustomSwiper />
        </div>
      </div>
    </section>
  );
};

export default HomePageTrending;
