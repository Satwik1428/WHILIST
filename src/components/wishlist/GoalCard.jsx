import ProgressBar from "../dashboard/ProgressBar"
function GoalCard({name, target, saved, targetDate}){
    return(
        <div className="goalcard">
            <h5 className="goal-title">{name}</h5>
            <div className="goal-progress-amount">
                <span>Target: {target}</span>
                <span>Saved: {saved}</span>
                <span>Remaining: {target-saved}</span>
            </div>
            <div className="progress-bar-container">
                <ProgressBar current={saved} title={name} target={target} />
            </div> 
            <div className="target-data-container">
                <span>Target Date: {targetDate}</span>
                <select className="priority-item">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <span>Countdown: {Math.floor((new Date(targetDate)-new Date()) / (1000 * 60 * 60 * 24))}</span>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default GoalCard;