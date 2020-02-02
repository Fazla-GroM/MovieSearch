import React, { useState } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Container from "./Container"
import TabMenu from "../components/TabMenu"
import bgImage from "../assets/images/bg.jpg"
import data from "../pages/homePage.json"

const HeroBox = props => {
  const theme = useTheme()
  const cssHeroBox = css({
    width: "100%",
    marginBottom: theme.margins.sectionMarginBottom,
    padding: "0 1.5rem",
  })

  const cssHolder = css({
    ...theme.shadows.shadowOne,
    ...theme.borderRadius,
    overflow: "hidden",
  })

  const cssBgImage = css({
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "60vh",
  })

  const cssContainerHero = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  })

  const cssTitle = css({
    ...theme.titles.titlePrimary,
    color: theme.colors.primary,

    "& span": {
      display: "block",
      color: theme.colors.white,
      fontSize: "1.6rem",

      [theme.mq[0]]: {
        fontSize: "2rem",
      },
    },
  })

  return (
    <section css={cssHeroBox}>
      <div css={cssHolder}>
        <div css={cssBgImage}>
          <Container css={cssContainerHero}>
            <h1 css={cssTitle}>
              {data.heroTitle.main}
              <span>{data.heroTitle.sub}</span>
            </h1>
          </Container>
        </div>

        <TabMenu data={data.tabMenu} activeTabIndex={0} />
      </div>
    </section>
  )
}

export default HeroBox
