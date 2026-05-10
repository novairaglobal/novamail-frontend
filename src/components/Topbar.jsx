import {
  Search,
  Bell,
  User,
  Mail
} from "lucide-react"

export default function Topbar() {

  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="h-16 border-b border-gray-700 px-6 flex items-center justify-between bg-[#111827]">

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <Mail size={22} />
          </div>

          <div>
            <h1 className="font-bold text-xl">
              NovaMail
            </h1>

            <p className="text-xs text-gray-400">
              by Novaira
            </p>
          </div>

        </div>

        <div className="flex items-center bg-[#1e293b] px-4 py-2 rounded-xl w-[400px]">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search mail..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />
        </div>

      </div>

      <div className="flex items-center gap-6">

        <div className="text-right hidden md:block">
          <p className="text-sm font-medium">
            team@novairasolution.com
          </p>

          <p className="text-xs text-gray-400">
            {currentTime}
          </p>
        </div>

        <Bell className="cursor-pointer" />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer">
          <User size={20} />
        </div>

      </div>

    </div>
  )
}