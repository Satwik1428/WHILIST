import StatCard from "../components/dashboard/StatCard";
import ProgressBar from "../components/dashboard/ProgressBar";
import "../styles/dashboard.css";
function Dashboard(){
    return(
        <div className="dashboard">
            <div className="stats">
                <StatCard title="Recent Saved" value="$100" />
                <StatCard title="Total savings" value="$1200" />
                <StatCard title="Next countdown" value="10 days" />
            </div>
            <div className="progress-bars">
                <ProgressBar current = {10} title = "Item-1" target = {100} />
                <ProgressBar current = {50} title = "Item-2" target = {100} />
                <ProgressBar current = {150} title = "Item-3" target = {100} />
            </div>
        </div>
    )
}
export default Dashboard;