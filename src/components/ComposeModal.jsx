import { useState } from "react"

import axios from "axios"

import {
  X
} from "lucide-react"

export default function ComposeModal({
  isOpen,
  onClose
}) {

  const [to, setTo] = useState("")

  const [subject, setSubject] = useState("")

  const [content, setContent] = useState("")

  const [sending, setSending] = useState(false)

  if (!isOpen) return null

  const sendEmail = async () => {

    try {

      setSending(true)

      await axios.post(
        "https://novamail-backend.vercel.app/send-email",
        {
          to,
          subject,
          content
        }
      )

      alert("Email Sent Successfully 🚀")

      setTo("")
      setSubject("")
      setContent("")

      onClose()

    } catch (error) {

      console.log(error)

      alert("Failed to send email")

    } finally {

      setSending(false)

    }

  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="w-[700px] bg-[#111827] rounded-2xl shadow-2xl overflow-hidden">

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">

          <h2 className="text-lg font-semibold text-white">
            New Message
          </h2>

          <button onClick={onClose}>
            <X className="text-gray-400 hover:text-white" />
          </button>

        </div>

        <div className="p-6 space-y-4">

          <input
            type="email"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full bg-[#1e293b] text-white px-4 py-3 rounded-xl outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-[#1e293b] text-white px-4 py-3 rounded-xl outline-none"
          />

          <textarea
            rows="10"
            placeholder="Write your message..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-[#1e293b] text-white px-4 py-3 rounded-xl outline-none resize-none"
          />

          <div className="flex justify-end">

            <button
              onClick={sendEmail}
              disabled={sending}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl"
            >
              {sending ? "Sending..." : "Send"}
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}