import { useEffect, useState } from "react"

import axios from "axios"

import {
  Star,
  Paperclip,
  RefreshCw
} from "lucide-react"

import {
  useNavigate
} from "react-router-dom"

export default function Inbox() {

  const navigate = useNavigate()

  const [mails, setMails] = useState([])

  const [loading, setLoading] = useState(true)

  const fetchInbox = async () => {

    try {

      setLoading(true)

      const response = await axios.get(
        "https://novamail-backend.onrender.com/inbox"
      )

      console.log(response.data)

      // FIXED RESPONSE STRUCTURE

      const inboxData =
        response?.data?.data?.data ||
        response?.data?.data ||
        []

      // ENSURE ARRAY

      const finalData = Array.isArray(inboxData)
        ? inboxData
        : []

      setMails(finalData)

    } catch (error) {

      console.log(error)

      setMails([])

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {

    fetchInbox()

  }, [])

  const openMail = (mail) => {

    navigate(
      `/mail/${mail.messageId}`,
      {
        state: { mail }
      }
    )

  }

  return (

    <div className="h-full bg-[#0f172a] flex flex-col overflow-hidden">

      {/* HEADER */}

      <div className="flex items-center justify-between px-4 md:px-8 py-5 border-b border-gray-800 bg-[#111827]">

        <div>

          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Inbox
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Gmail-style professional inbox
          </p>

        </div>

        <button
          onClick={fetchInbox}
          className="p-3 rounded-xl hover:bg-[#1e293b] transition"
        >

          <RefreshCw
            size={20}
            className={`text-gray-300 ${
              loading
                ? "animate-spin"
                : ""
            }`}
          />

        </button>

      </div>

      {/* MAIL LIST */}

      <div className="flex-1 overflow-y-auto overflow-x-hidden">

        {loading ? (

          <div className="flex items-center justify-center h-full text-gray-400 text-lg">
            Loading inbox...
          </div>

        ) : mails.length === 0 ? (

          <div className="flex items-center justify-center h-full text-gray-400 text-lg">
            No emails found
          </div>

        ) : (

          mails.map((mail, index) => (

            <div
              key={mail.messageId || index}
              onClick={() => openMail(mail)}
              className="group border-b border-gray-800 hover:bg-[#1e293b] transition cursor-pointer px-4 md:px-8 py-5"
            >

              <div className="flex items-start gap-4">

                {/* STAR */}

                <button
                  onClick={(e) => e.stopPropagation()}
                  className="mt-1"
                >

                  <Star
                    size={18}
                    className="text-gray-500 hover:text-yellow-400 transition"
                  />

                </button>

                {/* CONTENT */}

                <div className="flex-1 min-w-0">

                  {/* TOP */}

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex-1 min-w-0">

                      {/* SENDER */}

                      <div className="flex items-center gap-2 flex-wrap">

                        <h2 className="font-semibold text-white truncate text-sm md:text-base">
                          {mail.sender || "Unknown Sender"}
                        </h2>

                        {mail.hasAttachment === "1" && (

                          <Paperclip
                            size={14}
                            className="text-gray-400"
                          />

                        )}

                      </div>

                      {/* SUBJECT */}

                      <h3 className="text-gray-200 font-medium truncate mt-1 text-sm md:text-base">
                        {mail.subject || "No Subject"}
                      </h3>

                    </div>

                    {/* DATE */}

                    <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
                      {mail.receivedTime
                        ? new Date(
                            parseInt(mail.receivedTime)
                          ).toLocaleDateString()
                        : ""}
                    </span>

                  </div>

                  {/* SUMMARY */}

                  <p className="text-sm text-gray-400 truncate mt-2 leading-6">
                    {mail.summary || "No preview available"}
                  </p>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  )
}