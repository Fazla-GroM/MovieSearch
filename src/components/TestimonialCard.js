import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons"
import bgImage from "../assets/images/3.jpg"

const TestimonialCard = () => {
  const theme = useTheme()

  const cssTestimonialCard = css({
    //backgroundColor: 'blue',
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2rem 0",

    "& img": {
      width: "8rem",
      height: "8rem",
      borderRadius: "50%",

      [theme.mq[2]]: {
        width: "15rem",
        height: "15rem",
      },
    },
    "& h4": {
      color: "white",
      ...theme.titles.titleSecondary,
      textAlign: "center",
      marginTop: "2rem",
    },
    "& blockquote": {
      color: "white",
      textAlign: "center",
      padding: " 1rem 2rem 0 2rem",

      [theme.mq[2]]: {
        padding: " 0 20rem",
      },

      "& p": {
        marginBottom: "2rem",
      },
      "& cite": {
        paddingBottom: ".5rem",
        borderBottom: `1.5px solid ${theme.colors.primary}`,
      },
    },
  })

  const cssCommentCloud = css({
    position: "absolute",
    top: "1rem",
    left: "65%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.mq[2]]: {
      top: "0rem",
      left: "58%",
    },

    "& svg": {
      width: "7rem !important",
      height: "7rem !important",

      [theme.mq[2]]: {
        width: "10rem !important",
        height: "10rem !important",
      },

      "&:last-child": {
        position: "absolute",
        width: "3rem !important",
        height: "3rem !important",
        color: theme.colors.primary,
      },
    },
  })
  return (
    <div css={cssTestimonialCard}>
      <div css={cssCommentCloud}>
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <img src={bgImage} alt="Random User" />
      <h4>Odlično!!!</h4>
      <blockquote>
        <p>
          Venison meatloaf biltong, landjaeger buffalo jerky ground round
          hamburger short loin. Swine frankfurter pastrami rump. Bresaola tongue
          ham hock, ham tail chicken porchetta ball tip meatloaf filet mignon.
          Buffalo frankfurter pastrami, biltong doner porchetta andouille ham
          hock chislic salami pig pork chop.
        </p>
        <cite>Marko Horvatek</cite>
      </blockquote>
    </div>
  )
}

export default TestimonialCard
