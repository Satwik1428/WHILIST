import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Earnings from "./pages/Earnings";
import Wishlist from "./pages/Wishlist";
function App(){
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="wishlist" element={<Wishlist />} />
            </Route>
        </Routes>
    );
}
export default App;