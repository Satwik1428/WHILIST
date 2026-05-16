import GoalCard from "./GoalCard"
function GoalGrid(){
    const data = [
        {
            name: "Spurs away jersey",
            target: "9000",
            saved: "1000",
            targetDate: "2024-12-31",
            priority: "High",
        },
        {
            name: "Tshirt",
            target: "1500",
            saved: "500",
            targetDate: "2024-12-31",
            priority: "Medium",
        },
        {
            name: "Beige pants",
            target: "2000",
            saved: "1500",
            targetDate: "2024-12-31",
            priority: "High",
        },
        {
            name: "Shoes",
            target: "4000",
            saved: "500",
            targetDate: "2024-12-31",
            priority: "Low",
        }
    ]
    return(
        data.map((item) => {
            return(
                <GoalCard 
                key = {item.id}
                name={item.name}
                target={item.target}
                saved={item.saved}
                targetDate={item.targetDate}
                priority = {item.priority} />
            )
        })
    )
}
export default GoalGrid
