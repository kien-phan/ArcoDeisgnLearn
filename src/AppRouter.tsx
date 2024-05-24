import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "src/Presentation/NotFound";
import Layout from "src/Presentation/Layout";
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from "src/Core";
import AuthChecker from "src/Core/Components/AuthChecker/AuthChecker";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {PRIVATE_ROUTE?.map((route, index) => (
                        <Route
                            key={index}
                            path={route?.path}
                            element={
                                <AuthChecker>{route?.element}</AuthChecker>
                            }
                        />
                    ))}
                    {PUBLIC_ROUTE?.map((route, index) => (
                        <Route
                            key={index}
                            path={route?.path}
                            element={
                                <AuthChecker>{route?.element}</AuthChecker>
                            }
                        />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
