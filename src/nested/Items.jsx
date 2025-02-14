import icons from "../assets/icons/icons";
import Products from "../nested/Products";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../context/Context";
import data from "../data/data";

function Items({setShowPopup}) {
    const [activeId, setActiveId] = useState(1);
    const { product, setProduct } = useContext(MyContext);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = 8;

    const blogs = [
        {
            id: 1,
            title: "All",
        },
        {
            id: 2,
            title: "Startups",
        },
        {
            id: 3,
            title: "Security",
        },
        {
            id: 4,
            title: "AI",
        },
        {
            id: 5,
            title: "Apps",
        },
        {
            id: 6,
            title: "Tech",
        },
    ];

    function click(x, y) {
        setActiveId(x);
        setCurrentPage(1);
        if (y === "All") {
            setProduct(data.slice(0, itemsPerPage));
        } else {
            const filter = data.filter((fil) => fil.category === y);
            setProduct(filter.slice(0, itemsPerPage));
        }
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * itemsPerPage;
        setProduct(data.slice(startIndex, startIndex + itemsPerPage));
    }

    useEffect(() => {
        click(1, "All");
    }, []);

    return (
        <div className="items p-5">
                <div className="container ">
                    <ul className="flex justify-center flex-wrap gap-12 mb-4 max-md:gap-4">
                        {blogs.map((blog) => {
                            return (
                                <li
                                    key={blog.id}
                                    className={`font-semibold cursor-pointer py-2.5 px-4 rounded-sm transition-all duration-700 ${activeId === blog.id ? "bg-orange-500 text-white" : ""
                                        }`}
                                    onClick={() => click(blog.id, blog.title)}
                                >
                                    {blog.title}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="blogs_products flex gap-10 border-t-2 border-[#ddd] pt-4">
                        <div className="left w-[70%] max-md:w-full mb-10">
                            <Products setShowPopup={setShowPopup} />
                            <div className="number flex justify-center gap-2 mt-4">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        className={`py-1 px-3 border rounded-sm transition-all duration-700 ${currentPage === index + 1
                                                ? "bg-orange-500 text-white rounded-sm"
                                                : "bg-gray-200"
                                            }`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="right flex-1 max-md:hidden">
                            <h2 className="text-2xl font-semibold mb-2 text-orange-500">
                                Latest Blogs
                            </h2>
                            {product.map((current) => {
                                return (
                                    <>
                                        <div className="box border-b-2 border-[#ddd] py-3">
                                            <h4 className="mb-2 font-semibold">{current.title}</h4>
                                            <div className="icon transition-all duration-500 hover:text-orange-500 cursor-pointer">
                                                <button>Read Now</button>
                                                <icons.Arrow className="!text-[18px] ml-1 font-semibold" />
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Items;
