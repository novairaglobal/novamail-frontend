import { useState } from "react"

import {
  Inbox,
  Send,
  FileText,
  AlertCircle,
  Trash2,
  Pencil
} from "lucide-react"

import { useNavigate } from "react-router-dom"

import ComposeModal from "./ComposeModal"

const menuItems = [
  {
    name: "Inbox",
    icon: Inbox,
    path: "/"
  },
  {
    name: "Sent",
    icon: Send,
    path: "/sent"
  },
  {
    name: "Drafts",
    icon: FileText,
    path: "/drafts"
  },
  {
    name: "Spam",
    icon: AlertCircle,
    path: "/spam"
  },
  {
    name: "Trash",
    icon: Trash2,
    path: "/trash"
  },
]

export default function Sidebar() {

  const [isComposeOpen, setIsComposeOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <div className="hidden md:block w-64 bg-[#111827] border-r border-gray-700 p-4">

        <button
          onClick={() => setIsComposeOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 mb-6"
        >
          <Pencil size={18} />
          Compose
        </button>

        <div className="space-y-2">

          {menuItems.map((item, index) => {

            const Icon = item.icon

            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 cursor-pointer transition"
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </div>
            )
          })}

        </div>

      </div>

      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
      />
    </>
  )
}