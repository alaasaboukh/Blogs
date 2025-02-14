import Landing from "../nested/LandingPage";

function Contact() {
  const all = [
    {
      id: 1,
      label: "Full Name",
      type: "text",
      placeholder: "Full name",
    },
    {
      id: 2,
      label: "Email Address",
      type: "email",
      placeholder: "example@domain.com",
    },
    {
      id: 3,
      label: "Subject",
      type: "text",
      placeholder: "Enter your subject",
    },
  ];
  return (
    <>
      <div className="home bg-gray-900 text-white h-[350px] flex justify-center items-center">
        <div className="container text-center">
          {Landing.map((land) => {
            return (
              <>
                <div className="blogs" key={land.id}>
                  <h1 className="text-6xl font-bold mb-5 max-md:text-5xl">
                    {land.contact}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="contact p-5">
        <div className="container flex items-center">
          <div className="img_box w-[65%] max-md:hidden">
            <img
              src="src/assets/images/contact.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="right flex-1">
            <form action="">
              {all.map((item) => {
                return (
                  <>
                    <div className="box mb-2.5" key={item.id}>
                      <label className="block mb-1">{item.label}</label>
                      <input
                        type={item.type}
                        placeholder={item.placeholder}
                        className="w-full p-1.5 outline-none border border-[#ddd] rounded-sm"
                      />
                    </div>
                  </>
                );
              })}
              <div className="box mb-2.5">
                <label className="block mb-1">Message</label>
                <textarea
                  type="text"
                  placeholder="Type Your Message"
                  className="resize-none w-full h-[100px] border outline-none border-[#ddd] rounded-sm p-1"
                />
              </div>
              <button onClick={(e) => e.preventDefault} className="bg-gray-800 text-white py-2 px-4 rounded-sm text-semibold transition-all duration-500 hover:bg-orange-500">Sumbit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
