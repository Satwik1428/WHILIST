import kane_jpg from "../../assets/Kane.jpg";
import Avatar from "../shared/Avatar";
import "../../styles/Navbar.css";
function Navbar(){
    const user = {
        username: "Sansat",
        avatar: kane_jpg
    };
    return(
        <div className = "navbar">
            <Avatar username={user.username} avatar={user.avatar} />
        </div>
    )
}
export default Navbar;