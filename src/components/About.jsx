import icons from "../assets/icons/icons";
import Landing from "../nested/LandingPage";

function About() {
  const Author = [
    {
        id:1,
        img:"src/assets/images/user-01.png",
        name:"David Devid",
        job:"Director of operations",
        icon:<icons.TextSnippet/>,
        date:"12 Article published"
    },
    {
        id:2,
        img:"src/assets/images/user-03.png",
        name:"Rayan Mario",
        job:"Content Writer",
        icon:<icons.TextSnippet/>,
        date:"8 Article published"
    },
    {
        id:3,
        img:"src/assets/images/user-01.png",
        name:"Devid Tac",
        job:"Head of marketing",
        icon:<icons.TextSnippet/>,
        date:"5 Article published"
    },
    {
        id:4,
        img:"src/assets/images/user-03.png",
        name:"Mark Jacob",
        job:"Head of marketing",
        icon:<icons.TextSnippet/>,
        date:"5 Article published"
    },
]
  return (
    <>
      <div className="home bg-gray-900 text-white h-[350px] flex justify-center items-center">
        <div className="container text-center">
          {Landing.map((land) => {
            return (
              <>
                <div className="services" key={land.id}>
                  <h1 className="text-6xl font-bold mb-5 max-md:text-5xl">
                    {land.about}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="about p-10">
        <div className="container">
          <div className="top flex max-md:flex-col items-center gap-10 ">
            <div className="img_box flex-1 ">
              <img
                src="src/assets/images/about.jpg"
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="right flex-1">
              <h4 className="text-lg text-orange-500 font-bold mb-3">
                Who we are
              </h4>
              <h1 className="text-4xl font-bold mb-3">
                We provide high quality Articles & Blogs
              </h1>
              <p className="text-[#888] mb-3">
                Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos congue dui nec dui
                lobortis maximus.
              </p>

              <p className="text-[#888]">
                Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
                auctor orci, eu dictum diam diam nec neque. Pellentesque.
              </p>
            </div>
          </div>
          <div className="author">
            <h2 className="text-4xl font-bold py-14 text-center"><span className="text-orange-500">Top</span> Authors</h2>
            <div className="boxes flex flex-wrap gap-5">
            {Author.map((el) => {
              return (
                <>
                  <div className="box bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-8 rounded-md text-center mx-auto transition-all duration-700 hover:-translate-y-4" key={el.id}>
                    <div className="img_box w-fit mx-auto mb-2">
                      <img src={el.img} alt="" />
                    </div>
                    <h2 className="font-bold mb-1">{el.name}</h2>
                    <h4 className="mb-1">{el.job}</h4>
                    <div className="info flex items-center">
                      <span className="text-orange-500">{el.icon}</span>
                      <p className="text-[#888] ml-1">{el.date}</p>
                    </div>
                  </div>
                </>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
