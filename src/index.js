import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render } from "react-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import App from "./App"

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("App")
)

if (module.hot) {
  module.hot.accept()
}
