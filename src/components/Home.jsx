import icons from "../assets/icons/icons";
import Items from "../nested/Items";
import Landing from "../nested/LandingPage";

function Home() {
    return (
        <>
            <div className="home bg-gray-900 text-white w-full h-[350px] flex justify-center items-center">
                <div className="container text-center">
                    {Landing.map((land) => {
                        return (
                            <>
                                <div className="div" key={land.id}>
                                    <h1 className="text-6xl font-bold mb-5 max-md:text-5xl">
                                        <span className="text-orange-500">{land.welcome}</span>{" "}
                                        {land.our}
                                    </h1>
                                    <p className="text-[#888] max-w-[70%] mx-auto mb-5 leading-relaxed max-md:max-w-full max-md:text-sm">
                                        {land.p}
                                    </p>
                                    <div className="learn flex mx-auto w-fit bg-orange-500 py-2.5 p-4 rounded-sm font-semibold text-md transition-all duration-500 hover:bg-orange-600 cursor-pointer">
                                        <button>{land.button}</button>
                                        <div className="icon ml-1">
                                            <icons.Arrow className="!text-[19px]" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <Items />
        </>
    );
}

export default Home;
