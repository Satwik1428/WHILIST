import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
function Graph(){
    let savings = [
        {month : "Jan", savings: '300'},
        {month: "Feb", savings: '500'},
        {month: "Mar", savings: '300'},
        {month: "April", savings: '100'},
        {month: "May", savings: '0'},
        {month: "June", savings: '0'},
        {month: "July", savings: '0'},
        {month: "August", savings: '0'},
        {month: "Sept" , savings: '0'},
        {month: "Oct", savings: '0'},
        {month: "Nov", savings: '0'},
        {month: "Dec", savings: '0'}
    ];
    return(
        <div style={{width: 700, height: 300}}>
        <ResponsiveContainer>
            <BarChart data={savings}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="savings" fill="#33bfe6ff" />
            </BarChart>
        </ResponsiveContainer>
        </div>
    )
}
export default Graph;