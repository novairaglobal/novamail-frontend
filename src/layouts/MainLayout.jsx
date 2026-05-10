import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import MailPreview from "../components/MailPreview"

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        
        <Topbar />

        <div className="flex flex-1 overflow-hidden">

        <div className="flex-1 overflow-auto p-4">
            {children}
        </div>

        <MailPreview />

        </div>

      </div>
    </div>
  )
}