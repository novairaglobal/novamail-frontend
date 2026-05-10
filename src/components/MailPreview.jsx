export default function MailPreview({ mail }) {

  if (!mail) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 text-lg">
        Select an email
      </div>
    )
  }

  return (
    <div className="h-full overflow-auto p-8">

      <div className="border-b border-gray-700 pb-6 mb-6">

        <h1 className="text-3xl font-bold text-white mb-4">
          {mail.subject}
        </h1>

        <div className="flex flex-col gap-2">

          <div>
            <span className="text-gray-400">
              From:
            </span>

            <span className="ml-2 font-medium text-white">
              {mail.sender}
            </span>
          </div>

          <div>
            <span className="text-gray-400">
              Email:
            </span>

            <span className="ml-2 text-gray-300">
              {mail.fromAddress}
            </span>
          </div>

          <div>
            <span className="text-gray-400">
              Date:
            </span>

            <span className="ml-2 text-gray-300">
              {new Date(
                parseInt(mail.receivedTime)
              ).toLocaleString()}
            </span>
          </div>

        </div>

      </div>

      <div className="text-gray-300 whitespace-pre-wrap leading-8 text-[15px]">
        {mail.summary || "No preview available"}
      </div>

    </div>
  )
}