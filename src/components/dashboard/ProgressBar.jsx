function ProgressBar({ current, title, target }){
    let percentage = 0;
    if(target === 0)
    {
        percentage = 0;
    }
    else{
        percentage = (current / target) * 100;
    }
    if(percentage > 100)
    {
        percentage = 100;
    }
    else if(percentage < 0)
    {
        percentage = 0;
    }
    let color;
    if(percentage < 40)
    {
        color = "#ef4444";
    }
    else if(percentage < 80)
    {
        color = "#facc15";
    }
    else
    {
        color = "#22c55e";
    }
    return(
        <div className="progress-bar-container">
            <div className="progress-bar-label">
                <h2>{title}</h2>
            </div>
            <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
            </div>
            <div className="progress-bar-value">
                <span>${current} saved</span>
                <span>${target}</span>
            </div>
        </div>
    );
}
export default ProgressBar;