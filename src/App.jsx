import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Earnings from "./pages/Earnings";
import Wishlist from "./pages/Wishlist";
import Countdowns from "./pages/Countdowns";

function App(){
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="countdowns" element={<Countdowns />} />
            </Route>
        </Routes>
    );
}
export default App;