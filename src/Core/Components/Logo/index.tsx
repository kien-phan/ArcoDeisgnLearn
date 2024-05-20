import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/Core/Constants";

function Logo() {
    const navigate = useNavigate();
    return (
        <div
            className="flex items-center cursor-pointer"
            onClick={() => {
                navigate(ROUTES.DASHBOARD);
            }}
        >
            <svg
                width="33"
                height="33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    clipPath="url(#logo_svg__clip0)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path
                        d="M5.378 16.98l7.372-7.55a5.096 5.096 0 017.292 0l.08.082a5.226 5.226 0 010 7.303l-7.372 7.55a5.096 5.096 0 01-7.292 0l-.08-.083a5.226 5.226 0 010-7.302z"
                        fill="#12D2AC"
                    ></path>
                    <path
                        d="M20.048 9.43l7.292 7.467a5.344 5.344 0 010 7.467 5.096 5.096 0 01-7.292 0l-7.292-7.467a5.344 5.344 0 010-7.467 5.096 5.096 0 017.292 0z"
                        fill="#307AF2"
                    ></path>
                    <path
                        d="M20.132 9.522l3.553 3.638-7.292 7.467-7.292-7.467 3.553-3.638a5.226 5.226 0 017.478 0z"
                        fill="#0057FE"
                    ></path>
                </g>
                <defs>
                    <clipPath id="logo_svg__clip0">
                        <path
                            fill="#fff"
                            transform="translate(3.5 7)"
                            d="M0 0h26v19H0z"
                        ></path>
                    </clipPath>
                </defs>
            </svg>
            <div className="ms-[10px]">Arco Pro</div>
        </div>
    );
}

export default Logo;
