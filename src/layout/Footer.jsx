import icons from "../assets/icons/icons";

function Footer() {
    const category = [
        { id: 1, title: "News" },
        { id: 2, title: "World" },
        { id: 3, title: "Games" },
        { id: 4, title: "References" },
    ];
    const Apples = [
        { id: 1, title: "Web" },
        { id: 2, title: "e-commerce" },
        { id: 3, title: "Business" },
        { id: 4, title: "Entertainment" },
        { id: 5, title: "Portfolio" },
    ];
    const chery = [
        { id: 1, title: "Media" },
        { id: 2, title: "Brochure" },
        { id: 3, title: "Nonprofit" },
        { id: 4, title: "Educational" },
        { id: 5, title: "projects" },
    ];
    const business = [
        { id: 1, title: "infopreneur" },
        { id: 2, title: "Personal" },
        { id: 3, title: "Wiki" },
        { id: 4, title: "Forums" },
    ];
    return (
        <div className="footer bg-gray-900 text-white">
            <div className="container p-4 pt-8 max-md:p-4">
                <div className="top flex justify-between max-md:flex-wrap max-md:gap-5 ">
                    <div className="box">
                        <h4 className="text-lg mb-1 font-semibold">Category</h4>
                        <ul>
                            {category.map((cat) => {
                                return <li key={cat.id} className="text-[#888] mb-1 transition-all duration-500 hover:text-orange-500 cursor-pointer">{cat.title}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="box">
                        <h4 className="text-lg mb-1 font-semibold">Apples</h4>
                        <ul>
                            {Apples.map((apple) => {
                                return <li key={apple.id} className="text-[#888] mb-1 transition-all duration-500 hover:text-orange-500 cursor-pointer">{apple.title}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="box">
                        <h4 className="text-lg mb-1 font-semibold">Cherry</h4>
                        <ul>
                            {chery.map((che) => {
                                return <li key={che.id} className="text-[#888] mb-1 transition-all duration-500 hover:text-orange-500 cursor-pointer">{che.title}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="box">
                        <h4 className="text-lg mb-1 font-semibold">Business</h4>
                        <ul>
                            {business.map((bus) => {
                                return <li key={bus.id} className="text-[#888] mb-1 transition-all duration-500 hover:text-orange-500 cursor-pointer">{bus.title}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="box">
                        <h4 className="text-lg mb-2.5 font-semibold">Subscribe for update</h4>
                        <form>
                            <input type="email" placeholder="Email" className="p-2 rounded-sm w-56 mr-2 outline-none" />
                            <input type="submit" value="Subscribe" onClick={(e) => e.preventDefault()} className="py-2 px-3 border rounded-sm cursor-pointer transition-all duration-500 hover:bg-orange-500 hover:border-orange-500" />
                        </form>
                        <p className="text-[#888] mt-2.5">
                            Bacon ipsum dolor amet short ribs pig suasage
                        </p>
                    </div>
                </div>
                <div className="bottom flex justify-between border-t border-[#888] mt-5 pt-4">
                    <div className="copyright">
                        <icons.Copyright />
                        <span className="ml-1">copyright 2025 lorem inc. All right reserved</span>
                    </div>
                    <div className="icons max-md:hidden">
                        <span className="transition-all duration-500 hover:text-orange-500 cursor-pointer"><icons.Twitter className="mr-2" /></span>
                        <span className="transition-all duration-500 hover:text-orange-500 cursor-pointer"><icons.Instagram className="mr-2" /></span>
                        <span className="transition-all duration-500 hover:text-orange-500 cursor-pointer"><icons.Facebook /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
