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
            <div>
                <ProgressBar title="Item" value="50" />
                <ProgressBar title="Item" value="50" />
                <ProgressBar title="Item" value="50" />
            </div>
        </div>

    )
}
export default Dashboard;