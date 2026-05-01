function EarnningsItem({ note, amount, date}){
    return(
        <div>
        <div className="earnings-item-left">
            <p className="earning-description">{note}</p>
            <p className="earning-date">{date}</p>
        </div>
        <div className="earning-amount">{amount}</div>
        <div className="earning-actions">
            <button className="delbtn">Delete</button>
            <button className="editbtn">Edit</button>
        </div>
        </div>
    )
}
export default EarnningsItem;
