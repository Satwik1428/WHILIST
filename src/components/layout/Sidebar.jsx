import "../../styles/sidebar.css";
import logo from "../../assets/logo.jpeg";
import { Home, Wallet, Target, Timer, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/",           label: "Home",      icon: Home,   end: true  },
  { to: "/earnings",   label: "Earnings",  icon: Wallet, end: false },
  { to: "/wishlist",   label: "Wishlist",  icon: Target, end: false },
  { to: "/countdowns", label: "Countdown", icon: Timer,  end: false },
]

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <img src={logo} alt="whilist-logo" />
      </div>

      <nav className="sections">
        <span className="sections-label">Menu</span>
        <ul>
          {navLinks.map(({ to, label, icon: Icon, end}) => (
            <li key={label}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <Icon size={16} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="logout">
        <button>
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  )
}
export default Sidebar;