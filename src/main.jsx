import React from "react"
import ReactDOM from "react-dom/client"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import "./index.css"

import App from "./App"

import Inbox from "./pages/Inbox"

import MailDetails from "./pages/MailDetails"

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />}>

          <Route index element={<Inbox />} />

          <Route
            path="/mail/:id"
            element={<MailDetails />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

)