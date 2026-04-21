import StatCard from "../components/dashboard/StatCard";
import "../styles/dashboard.css";
function Dashboard(){
    return(
        <div className="dashboard">
            <div className="stats">
                <StatCard title="Recent Saved" value="$100" />
                <StatCard title="Total savings" value="$1200" />
                <StatCard title="Next countdown" value="10 days" />
            </div>
        </div>
    )
}
export default Dashboard;