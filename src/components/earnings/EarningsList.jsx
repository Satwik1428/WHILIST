import EarningsItem from "./EarningsItem";
function EarningsList(){
    const data = [
        {
            note: "Freelance Work",
            amount: 5000,
            date: "2022-01-01"
        },
        {
            note: "Freelance Work",
            amount: 3000,
            date: "2022-04-01"
        },
        {
            note: "Investment",
            amount: 70000,
            date: "2022-10-01"
        }
    ]
    return(
        <div className="earnings-list">
            <div className="list-head">
                <span className="section-title">Recent Earnings</span>
                <button className="add-btn">+ Add earnings</button>
            </div>
            <div className="earnings-items">
            {data.map((item) => {
                return <EarningsItem note={item.note} amount={item.amount} date={item.date} />
            })}
            </div>
        </div>
    )
}
export default EarningsList;