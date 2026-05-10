export default function MailPreview() {
  return (
    <div className="w-[420px] border-l border-gray-700 bg-[#111827] p-6 hidden lg:block">

      <h1 className="text-2xl font-bold mb-4">
        Security Alert
      </h1>

      <div className="text-sm text-gray-400 mb-6">
        From: Google
      </div>

      <div className="space-y-4 text-gray-300 leading-7">
        <p>
          New login detected on your account.
        </p>

        <p>
          If this was not you, please secure your account immediately.
        </p>

        <p>
          Thank you,
          <br />
          Google Security Team
        </p>
      </div>

    </div>
  )
}