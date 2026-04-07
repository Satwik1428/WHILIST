import "../../styles/sidebar.css";
import logo from "../../assets/logo.jpeg"
function Sidebar()
{
    return(
        <aside className="Sidebar">
            <div className="logo">
                <img src={logo} alt="whilist-logo"></img>
            </div>
            <nav className="sections">
                <ul>
                    <li>Home</li>
                    <li>Earnings</li>
                    <li>Wishlist</li>
                    <li>Countdowns</li>
                </ul>
            </nav>
            <div className="logout">
                <button>Logout</button>
            </div>
        </aside>
    )
}
export default Sidebar;