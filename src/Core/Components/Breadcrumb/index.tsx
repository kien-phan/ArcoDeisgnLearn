import { useLocation } from "react-router-dom";

function Breadcrumb() {
    const path = useLocation().pathname;
}

export default Breadcrumb;
