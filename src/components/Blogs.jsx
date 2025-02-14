import Landing from "../nested/LandingPage";
import { useState } from "react";
import Items from "../nested/Items";
import icons from "../assets/icons/icons";

function Blogs() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && (
        <div className="popup w-full h-full fixed bg-black bg-opacity-50 flex justify-center items-center max-md:p-5 ">
          <div className="single_blog w-[500px] bg-white p-7 rounded-lg shadow-lg relative max-md:w-full ">
            <div className="img_box mb-2.5">
              <img
                src={showPopup.image}
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-3">{showPopup.title}</h2>
            <div className="person flex mb-3">
              <icons.Person />
              <h3 className="text-[#888] ml-1.5">
                {showPopup.author} | {showPopup.published_date}
              </h3>
            </div>
            <div className="time flex">
              <icons.Watch />
              <p className="text-[#888] ml-1.5">{showPopup.reading_time}</p>
            </div>
            <button
              className="absolute top-0 right-3 transition-all duration-500 text-gray-700 hover:text-red-500 text-3xl outline-none"
              onClick={() => setShowPopup(false)}
            >
              x
            </button>
          </div>
        </div>
      )}
      <div className="home bg-gray-900 text-white h-[350px] flex justify-center items-center">
        <div className="container text-center">
          {Landing.map((land) => {
            return (
              <>
                <div className="blogs" key={land.id}>
                  <h1 className="text-6xl font-bold mb-5 max-md:text-5xl">
                    {land.blogs}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Items setShowPopup={setShowPopup} />
    </>
  );
}

export default Blogs;
