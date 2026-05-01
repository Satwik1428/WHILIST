import EarningsList from "../components/earnings/EarningsList";
import Graph from "../components/dashboard/Graph";
import StatCard from "../components/dashboard/StatCard";
import "../styles/Earnings.css";
function Earnings(){
    return(
        <div className="earnings-container">
            <h1 className="page-title">Earnings</h1>
            <div className="earnings-top">
                <StatCard title="Earning this month" value={5000} />
                <StatCard title="Earning this year" value={45000} />
                <StatCard title="Total saved" value={300000} />
            </div>
            <div className="recent-earnings">
                <EarningsList />
            </div>
            <div className="earnings-graph">
                <Graph />
            </div>
        </div>
    );
}
export default Earnings;