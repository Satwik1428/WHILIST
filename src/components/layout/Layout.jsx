import Sidebar from "./Sidebar"
function Layout(){
    return(
        <>
        <div className="App">
            <Sidebar />
        </div>
        <main className="content">
            <h1>Dashboard</h1>
        </main>
        </>
    )
}
export default Layout;