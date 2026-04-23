function ProgressBar({ current, title, target }){
    let percentage = 0;
    if(target < 0)
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
    return(
        <div className="progress-bar-container">
            <div className="progress-bar-label">
                {title}
            </div>
            <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            <div className="progress-bar-value">
                ${current} saved / ${target} target
            </div>
        </div>
    );
}
export default ProgressBar;