import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import routers from "../router";
const LayoutCom = () => {
    return (
        <Suspense fallback={<>loading ...</>}>
            <Router>
                <Routes>
                    {routers.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<item.component />}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </Suspense>
    );
};
export default LayoutCom;