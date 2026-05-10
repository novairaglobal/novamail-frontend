import {
  useLocation,
  useNavigate
} from "react-router-dom"

import {
  ArrowLeft,
  Reply,
  Forward,
  Trash2,
  Star,
  Archive,
  MoreVertical,
  Paperclip,
  Download
} from "lucide-react"

export default function MailDetails() {

  const navigate = useNavigate()

  const location = useLocation()

  const mail = location.state?.mail

  if (!mail) {

    return (

      <div className="flex items-center justify-center h-full bg-[#0f172a] text-gray-400 text-lg">

        No email found

      </div>

    )

  }

  return (

    <div className="h-full overflow-y-auto bg-[#0f172a] text-white">

      {/* TOP ACTION BAR */}

      <div className="sticky top-0 z-30 bg-[#111827]/95 backdrop-blur border-b border-gray-800">

        <div className="flex items-center justify-between px-4 md:px-8 py-4">

          {/* LEFT */}

          <div className="flex items-center gap-2 md:gap-3">

            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl hover:bg-[#1e293b] transition"
            >
              <ArrowLeft size={20} />
            </button>

            <button className="p-2 rounded-xl hover:bg-[#1e293b] transition">
              <Archive size={18} />
            </button>

            <button className="p-2 rounded-xl hover:bg-[#1e293b] transition">
              <Trash2 size={18} />
            </button>

            <button className="p-2 rounded-xl hover:bg-[#1e293b] transition">
              <Star size={18} />
            </button>

          </div>

          {/* RIGHT */}

          <button className="p-2 rounded-xl hover:bg-[#1e293b] transition">
            <MoreVertical size={18} />
          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">

        {/* SUBJECT */}

        <div className="flex items-start gap-3">

          <h1 className="text-2xl md:text-5xl font-bold leading-tight break-words flex-1">

            {mail.subject || "No Subject"}

          </h1>

          {mail.hasAttachment === "1" && (

            <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-xl text-sm text-gray-300">

              <Paperclip size={15} />

              Attachment

            </div>

          )}

        </div>

        {/* MAIL CARD */}

        <div className="mt-8 bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden">

          {/* HEADER */}

          <div className="flex items-start justify-between gap-4 p-6 border-b border-gray-800">

            <div className="flex items-start gap-4 flex-1 min-w-0">

              {/* AVATAR */}

              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold shrink-0">

                {(mail.sender || "U")
                  .charAt(0)
                  .toUpperCase()}

              </div>

              {/* INFO */}

              <div className="min-w-0 flex-1">

                <h2 className="font-semibold text-lg break-words">

                  {mail.sender || "Unknown Sender"}

                </h2>

                <p className="text-gray-400 break-all mt-1">

                  {mail.fromAddress || "No Email"}

                </p>

                <p className="text-sm text-gray-500 mt-2">

                  {mail.receivedTime
                    ? new Date(
                        parseInt(mail.receivedTime)
                      ).toLocaleString()
                    : "Unknown Date"}
                </p>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="hidden md:flex items-center gap-3">

              <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-[#334155] px-4 py-2 rounded-xl transition">

                <Reply size={16} />

                Reply

              </button>

              <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-[#334155] px-4 py-2 rounded-xl transition">

                <Forward size={16} />

                Forward

              </button>

            </div>

          </div>

          {/* BODY */}

          <div className="p-6 md:p-10">

            <div
              className="prose prose-invert max-w-none break-words prose-p:text-gray-200 prose-p:leading-8 prose-a:text-blue-400 prose-strong:text-white prose-li:text-gray-200"
              dangerouslySetInnerHTML={{
                __html:
                  mail.content ||
                  mail.contentHTML ||
                  mail.summary ||
                  "No message available"
              }}
            />

          </div>

          {/* ATTACHMENTS */}

          {mail.hasAttachment === "1" && (

            <div className="border-t border-gray-800 p-6">

              <h3 className="text-lg font-semibold mb-4">

                Attachments

              </h3>

              <div className="flex items-center justify-between bg-[#1e293b] rounded-2xl p-4">

                <div className="flex items-center gap-3">

                  <Paperclip size={18} />

                  <span className="text-gray-300">

                    Attached File

                  </span>

                </div>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl">

                  <Download size={16} />

                  Download

                </button>

              </div>

            </div>

          )}

        </div>

        {/* MOBILE ACTIONS */}

        <div className="md:hidden flex items-center gap-3 mt-6">

          <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#334155] px-4 py-3 rounded-2xl transition">

            <Reply size={16} />

            Reply

          </button>

          <button className="flex-1 flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#334155] px-4 py-3 rounded-2xl transition">

            <Forward size={16} />

            Forward

          </button>

        </div>

      </div>

    </div>

  )
}