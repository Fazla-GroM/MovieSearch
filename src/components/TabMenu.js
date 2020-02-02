import React, { useState } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Container from "../components/Container"

const TabMenu = ({ data, activeTabIndex }) => {
  const theme = useTheme()

  const [{ tabData, activeTab }, setActiveTab] = useState({
    activeTab: { ...data[activeTabIndex], index: activeTabIndex },
    tabData: data,
  })

  const handleTabs = activeIndex => {
    setActiveTab(state => {
      return {
        ...state,
        activeTab: { ...state.tabData[activeIndex], index: activeIndex },
      }
    })
  }

  const cssTabMenu = css({
    display: "flex",
    flexDirection: "column",
  })

  const cssTabContent = css({
    minHeight: "fit-content",
    padding: "2.5rem 1.5rem",

    [theme.mq[0]]: {
      padding: "2.5rem 0",
    },

    "& h2": {
      ...theme.titles.titleSecondary,
      color: theme.colors.fontMain,
      marginBottom: "2rem",
    },

    "& p": {
      color: theme.colors.fontSecondary,
    },
  })

  const cssTabLabel = css({
    height: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })

  return (
    <Container css={cssTabMenu}>
      <div css={cssTabLabel}>
        {tabData.map((tab, index) => (
          <TabButton
            index={index}
            handleTabs={handleTabs}
            isActive={index === activeTab.index}
            key={tab.id}
            label={tab.label}
          />
        ))}
      </div>
      <div css={cssTabContent}>
        <h2>{activeTab.title}</h2>
        <p>{activeTab.description}</p>
      </div>
    </Container>
  )
}

export default TabMenu

const TabButton = ({ label, isActive, handleTabs, index }) => {
  const theme = useTheme()

  const cssTabButton = css({
    border: "none",
    outline: "none",
    width: "100%",
    height: "100%",
    padding: "0",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
    textTransform: "uppercase",
    borderBottom: isActive
      ? `4px solid ${theme.colors.primary}`
      : "4px solid transparent",
    fontWeight: "600",
    color: isActive ? theme.colors.primary : theme.colors.fontSecondary,
    backgroundColor: isActive ? theme.colors.primarySelected : "transparent",
    transition: "all .3s",

    "& span": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },

    "&:hover": {
      backgroundColor: isActive
        ? theme.colors.primarySelected
        : theme.colors.primaryHover,
    },

    "&:active": {
      backgroundColor: theme.colors.primaryActive,
    },
  })

  return (
    <button onClick={() => handleTabs(index)} css={cssTabButton}>
      <span>{label}</span>
    </button>
  )
}
