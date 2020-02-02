import React from "react"
import { ThemeProvider } from "emotion-theming"
import Layout from "./layouts/Layout"
import { lightTheme } from "./theme"

const App = props => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Layout />
      </ThemeProvider>
    </>
  )
}

export default App
