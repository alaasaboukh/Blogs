// import './navbar.scss'
import { Link } from "react-router-dom";
import icons from "../assets/icons/icons";

function Navbar({ setShow, showMenu, setShowMenu }) {
    const Sections = [
        {
            id: 1,
            path: "/",
            title: "Home",
        },
        {
            id: 2,
            path: "/services",
            title: "Services",
        },
        {
            id: 3,
            path: "/about",
            title: "About",
        },
        {
            id: 4,
            path: "/blogs",
            title: "Blogs",
        },
        {
            id: 5,
            path: "/contact",
            title: "Contact",
        },
    ];
    return (
        <div className="navbar bg-gray-900 text-[#fff] p-5 w-full h-[70px] sticky top-0 z-10">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <h1 className="text-xl font-bold tracking-wide cursor-pointer">
                        Design<span className="text-orange-500">DK</span>
                    </h1>
                </div>
                <div className="sections">
                    <ul className="flex gap-6 max-md:hidden">
                        {Sections.map((section) => {
                            return (
                                <li
                                    key={section.id}
                                    className="text-[17px] font-semibold cursor-pointer transition-all duration-700 hover:text-orange-500 hover:underline "
                                >
                                    <Link to={section.path}>{section.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="right flex items-center max-md:hidden">
                    <div className="icons mr-5">
                        <span className="transition-all duration-500 hover:text-orange-500 cursor-pointer">
                            <icons.Facebook className="mr-3 !text-[23px]" />
                        </span>
                        <span className="transition-all duration-500 hover:text-orange-500 cursor-pointer">
                            <icons.Instagram className="mr-3 !text-[23px]" />
                        </span>
                        <span className="transition-all duration-500 hover:text-orange-500 cursor-pointer">
                            <icons.Twitter className="!text-[23px]" />
                        </span>
                    </div>
                    <div className="login">
                        <button
                            onClick={() => setShow(true)}
                            className="bg-orange-500 py-1.5 p-4 rounded-sm font-semibold text-md transition-all duration-500 hover:bg-orange-600"
                        >
                            Log in
                        </button>
                    </div>
                </div>
                <div className="icons hidden max-md:flex " onClick={() => setShowMenu(!showMenu)}>
                    {
                        showMenu ? <icons.CloseIcon className="cursor-pointer" /> : <icons.MenuIcon className="cursor-pointer" />
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;
