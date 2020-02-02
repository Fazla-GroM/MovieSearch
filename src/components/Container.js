import React from "react"
import { css } from "@emotion/core"

const Container = props => {
  const cssContainer = css`
    width: 100%;

    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1336px;
    }
  `
  return (
    <div css={cssContainer} {...props}>
      {props.children}
    </div>
  )
}

export default Container

/**
 * padding-right: 15px;
    padding-left: 15px;
 */
