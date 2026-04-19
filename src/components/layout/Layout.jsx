import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/layout.css";

function Layout(){
  return(
    <div className="app">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <h1>Dashboard</h1>
        </main>
      </div>
    </div>
  )
}
export default Layout;