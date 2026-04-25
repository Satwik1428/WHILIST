import StatCard from "../components/dashboard/StatCard";
import ProgressBar from "../components/dashboard/ProgressBar";
import Wishlist from "../components/dashboard/Wishlist";
import Graph from "../components/dashboard/Graph";
import "../styles/dashboard.css";
function Dashboard(){
    return(
        <div className="dashboard">
            <h1 className="page-title">Dashboard</h1>
            <div className="stats">             
                <StatCard title="Recent Saved" value="$100" />
                <StatCard title="Total savings" value="$1200" />
                <StatCard title="Next countdown" value="10 days" />
            </div>
            <div className="prog-wishlist-grid">
                <div className="progress-bars">
                    <div className="section-title">Overall Progress</div>
                    <ProgressBar current = {1000} title = "Item" target = {1200} />
                </div>
                <div className="wishlists">
                    <div className="section-title">Wishlist items</div>
                    <Wishlist name="Adidas Samba sneakers" saved={1000} price={1200} />
                    <Wishlist name="Tottenham hotspurs away jersey" saved={1000} price={1200} />
                </div>
            </div>
            <div className="graph-container">
                <Graph />
            </div>
        </div>
    )
}
export default Dashboard;