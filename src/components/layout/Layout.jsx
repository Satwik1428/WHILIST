import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/layout.css";
import { Outlet } from "react-router-dom";
function Layout(){
  return(
    <div className="app">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default Layout;