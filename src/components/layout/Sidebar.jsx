import "../../styles/sidebar.css";
import logo from "../../assets/logo.jpeg";
import {Home, Wallet, Target, Timer, LogOut} from "lucide-react";
function Sidebar()
{
    return(
        <aside className="sidebar">
            <div className="logo">
                <img src={logo} alt="whilist-logo"></img>
            </div>
            <nav className="sections">
                <ul>
                    <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <Home size={18} />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick = {(e) => e.preventDefault()}>
                            <Wallet size={18} />
                            <span>Earnings</span>
                        </a>
                    </li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>
                        <Target size={18} />
                        <span>Wishlist</span>
                        </a>
                    </li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>
                        <Timer size={18} />
                        <span>Countdown</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="logout">
                <button>
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}
export default Sidebar;