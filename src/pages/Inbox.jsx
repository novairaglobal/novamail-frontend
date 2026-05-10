import { useEffect, useState } from "react"

import axios from "axios"

import {
  Star,
  Paperclip,
  RefreshCw
} from "lucide-react"

import MailPreview from "../components/MailPreview"

export default function Inbox() {

  const [mails, setMails] = useState([])

  const [selectedMail, setSelectedMail] = useState(null)

  const [loading, setLoading] = useState(true)

  const fetchInbox = async () => {

    try {

      setLoading(true)

      const response = await axios.get(
        "https://novamail-backend.onrender.com/inbox"
      )

      const inboxData = response.data.data.data || []

      setMails(inboxData)

      if (
        inboxData.length > 0 &&
        !selectedMail
      ) {
        setSelectedMail(inboxData[0])
      }

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {

    fetchInbox()

  }, [])

  return (
    <div className="flex h-[calc(100vh-80px)] bg-[#111827] rounded-2xl overflow-hidden border border-gray-700">

      {/* LEFT SIDEBAR */}

      <div className="w-[40%] border-r border-gray-700 flex flex-col">

        {/* TOP BAR */}

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">

          <h1 className="text-2xl font-bold text-white">
            Inbox
          </h1>

          <button
            onClick={fetchInbox}
            className="p-2 rounded-lg hover:bg-[#1e293b] transition"
          >
            <RefreshCw
              size={18}
              className={`text-gray-300 ${
                loading ? "animate-spin" : ""
              }`}
            />
          </button>

        </div>

        {/* MAIL LIST */}

        <div className="flex-1 overflow-auto">

          {loading ? (

            <div className="p-6 text-gray-400">
              Loading inbox...
            </div>

          ) : mails.length === 0 ? (

            <div className="p-6 text-gray-400">
              No emails found
            </div>

          ) : (

            mails.map((mail, index) => (

              <div
                key={index}
                onClick={() => setSelectedMail(mail)}
                className={`px-6 py-4 border-b border-gray-700 cursor-pointer transition hover:bg-[#1e293b] ${
                  selectedMail?.messageId === mail.messageId
                    ? "bg-[#1e293b]"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <div className="flex items-start gap-3 flex-1">

                    <Star
                      size={16}
                      className="text-gray-500 mt-1"
                    />

                    <div className="flex-1 min-w-0">

                      <div className="flex items-center gap-2">

                        <h2 className="font-semibold text-white truncate">
                          {mail.sender}
                        </h2>

                        {mail.hasAttachment === "1" && (
                          <Paperclip
                            size={14}
                            className="text-gray-400"
                          />
                        )}

                      </div>

                      <h3 className="text-gray-300 font-medium truncate mt-1">
                        {mail.subject}
                      </h3>

                      <p className="text-sm text-gray-400 truncate mt-1">
                        {mail.summary}
                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-gray-500 whitespace-nowrap ml-3">
                    {new Date(
                      parseInt(mail.receivedTime)
                    ).toLocaleDateString()}
                  </span>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

      {/* RIGHT PREVIEW */}

      <div className="flex-1 bg-[#0f172a]">

        <MailPreview mail={selectedMail} />

      </div>

    </div>
  )
}