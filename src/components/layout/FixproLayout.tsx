import ContextProvider from '../context/ContextProvider'
import ChatPopup from '../elements/ChatPopup'
import CustomCursor from '../elements/CustomCursor'
import MobileNav from '../elements/MobileNav'
import ScrollToTop from '../elements/ScrollToTop'
import SideBar from '../elements/SideBar'
import VideoPopup from '../elements/VideoPopup'

function FixproLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContextProvider>
      <div className="custom-cursor">
        <CustomCursor enabled />
        {children}
        <SideBar />
        <MobileNav />
        <ChatPopup />
        <ScrollToTop />
        <VideoPopup />
      </div>
    </ContextProvider>
  )
}

export default FixproLayout
