function StatCard({ title, value}){
    return(
        <div className="statcard">
            <p className="stat-title">{title}</p>
            <p className="stat-value">{value}</p>
        </div>
    )
}
export default StatCard;