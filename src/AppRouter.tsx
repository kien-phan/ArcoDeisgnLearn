import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "src/Presentation/NotFound";
import Layout from "src/Presentation/Layout";
import { PRIVATE_ROUTE } from "./Core/Constants";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {PRIVATE_ROUTE?.map((route, index) => (
                        <Route
                            key={index}
                            path={route?.path}
                            element={route?.element}
                        /> // => Nên tạo 1 constant để export PRIVATE ROUTE như vậy sẽ dễ quản lý hơn
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
