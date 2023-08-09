import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../components/Home";
import Informational from "../components/Informational";
import Products from "../components/Products";
import Services from "../components/Services";
import Dashboard from "../components/Dashboard";

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element= {<Home />} />
                <Route path="/informational" element= {<Informational />} />
                <Route path="/dashboard" element= {<Dashboard />} />
                <Route path="/products" element= {<Products />} />
                <Route path="/services" element= {<Services />} />
                <Route path="/services" element= {<Services />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;