import icons from "../assets/icons/icons";
import { useContext } from "react";
import { MyContext } from "../context/Context";

function Products({setShowPopup}) {
    const { product } = useContext(MyContext);
    return (
        <div className="products grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {product.map((current) => {
                return (
                    <>
                        <div className="box bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-4 rounded-sm">
                            <div className="img_box ">
                                <img onClick={() => setShowPopup(current)} src={current.image} alt="" className="w-full h-full object-cover rounded-sm cursor-pointer" />
                            </div>
                            <div className="info mt-3">
                            <h2 className="font-semibold mb-2.5">{current.title}</h2>
                                <div className="name flex mb-2.5">
                                    <icons.Person />
                                    <h3 className="ml-1">{current.author}</h3>
                                </div>
                                <p className="text-[#888]">Published: {current.published_date}</p>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Products;
