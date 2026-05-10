import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

export default function MainLayout({ children }) {

  return (

    <div className="flex h-screen bg-[#0b1120] text-white overflow-hidden">

      {/* SIDEBAR */}

      <Sidebar />

      {/* RIGHT SIDE */}

      <div className="flex-1 flex flex-col overflow-hidden">

        {/* TOPBAR */}

        <Topbar />

        {/* PAGE CONTENT */}

        <main className="flex-1 overflow-hidden">

          {children}

        </main>

      </div>

    </div>

  )
}