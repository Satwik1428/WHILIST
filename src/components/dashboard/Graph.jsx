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
        <div style={{width: "100%", height: 300}}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={savings}>
                <XAxis dataKey="month" stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11}} />
                <YAxis stroke="transparent" tickLine={false} axisLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11}} />
                <Tooltip 
                contentStyle={{
                    background: '#1a1a1a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    color: '#f0f0f0',
                    fontSize: '12px'
                }}
                cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar 
                    dataKey="savings" 
                    fill="#06b6d4"
                    radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
        </div>
    )
}
export default Graph;