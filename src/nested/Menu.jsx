import { Link } from "react-router-dom";

function Menu({showMenu, setShowMenu, setShow}) {
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

function click() {
    setShow(true)
    setShowMenu(false)
}
    return (
        showMenu && (
        <div className="menu fixed bg-gray-900 text-white w-[250px] h-full top-[70px] right-0 text-center">
            <div className="container flex justify-center items-center">
                <ul>
                    {Sections.map((item) => {
                        return (
                            <>
                            <li onClick={() => setShowMenu(false)} key={item.id} className="p-5 text-xl font-semibold transition-all duration-500 hover:text-orange-500 border-b border-[#ddd] last:border-none">
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                            </>
                        );
                    })}
                    <li onClick={() => click()} className="p-5 text-xl font-semibold transition-all duration-500 hover:text-orange-500 cursor-pointer">Login</li>
                </ul>
            </div>
        </div>
        )
    );
}

export default Menu;
