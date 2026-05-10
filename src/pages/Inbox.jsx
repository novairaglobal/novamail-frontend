import { useEffect, useState } from "react"

import {
  Star,
  Paperclip
} from "lucide-react"

import axios from "axios"

export default function Inbox() {

  const [mails, setMails] = useState([])

  const [selectedMail, setSelectedMail] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchInbox()

  }, [])

  const fetchInbox = async () => {

    try {

      const response = await axios.get(
        "https://novamail-backend.onrender.com/inbox"
      )

      setMails(response.data.data.data)

      if (response.data.data.data.length > 0) {
        setSelectedMail(response.data.data.data[0])
      }

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading inbox...
      </div>
    )
  }

  return (
    <div className="flex h-full">

      {/* MAIL LIST */}

      <div className="w-1/2 border-r border-gray-700 overflow-auto">

        {mails.map((mail, index) => (

          <div
            key={index}
            onClick={() => setSelectedMail(mail)}
            className={`flex items-center justify-between px-6 py-4 border-b border-gray-700 hover:bg-[#1e293b] transition cursor-pointer ${
              selectedMail?.messageId === mail.messageId
                ? "bg-[#1e293b]"
                : ""
            }`}
          >

            <div className="flex items-center gap-4">

              <Star
                size={18}
                className="text-gray-500"
              />

              <div>

                <div className="flex items-center gap-3">

                  <h2 className="font-semibold">
                    {mail.sender}
                  </h2>

                  <h3 className="font-medium text-gray-300">
                    {mail.subject}
                  </h3>

                </div>

                <p className="text-sm text-gray-400 mt-1 line-clamp-1">
                  {mail.summary}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              {mail.hasAttachment === "1" && (
                <Paperclip
                  size={18}
                  className="text-gray-400"
                />
              )}

              <span className="text-sm text-gray-400">
                {new Date(
                  parseInt(mail.receivedTime)
                ).toLocaleDateString()}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* MAIL PREVIEW */}

      <div className="flex-1 p-6 overflow-auto">

        {selectedMail ? (

          <div>

            <h1 className="text-3xl font-bold mb-4">
              {selectedMail.subject}
            </h1>

            <div className="mb-6">

              <p className="text-lg font-semibold">
                {selectedMail.sender}
              </p>

              <p className="text-gray-400">
                {selectedMail.fromAddress}
              </p>

            </div>

            <div className="text-gray-300 leading-8 whitespace-pre-wrap">
              {selectedMail.summary}
            </div>

          </div>

        ) : (

          <div className="text-gray-400">
            Select an email
          </div>

        )}

      </div>

    </div>
  )
}