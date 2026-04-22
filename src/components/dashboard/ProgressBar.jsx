function ProgressBar({ title, value }){
    return(
        <div className="progress-bar">
            <p className="prog-title">{title}</p>
            <progress className="prog-value" value={value} max="100"></progress>
            <p className="prog-sub">{value}</p>
        </div>
    )
}
export default ProgressBar;