import {
  Routes,
  Route
} from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Inbox from "./pages/Inbox"
import MailDetails from "./pages/MailDetails"

import Sent from "./pages/Sent"
import Drafts from "./pages/Drafts"
import Spam from "./pages/Spam"
import Trash from "./pages/Trash"

export default function App() {

  return (

    <MainLayout>

      <Routes>

        {/* INBOX */}

        <Route
          path="/"
          element={<Inbox />}
        />

        {/* MAIL DETAILS */}

        <Route
          path="/mail/:id"
          element={<MailDetails />}
        />

        {/* OTHER PAGES */}

        <Route
          path="/sent"
          element={<Sent />}
        />

        <Route
          path="/drafts"
          element={<Drafts />}
        />

        <Route
          path="/spam"
          element={<Spam />}
        />

        <Route
          path="/trash"
          element={<Trash />}
        />

      </Routes>

    </MainLayout>

  )
}