import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div
        className={`py-40 duration-500 transition-all ease-in-out bg-black text-center text-white px-4`}
      >
        <h2 className="duration-100 transition-all ease-in-outtext-5xl lg:text-7xl leading-sung font-bold mb-5">
          Contact Page
        </h2>
      </div>
      <div className="w-2/3 text-center mx-auto">
        <h3 className="text-red-700 text-3xl pt-10 pb-2 font-semibold">
          Contact Us
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          maiores velit ab quam tempore aliquam laudantium fugit inventore
          voluptatibus?
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-5xl mx-auto py-10">
        <div className="">
          <div className="flex flex-col w-3/4 sm:mb-10 sm:w-1/2 md:w-3/4 lg:w-3/4 border-2 rounded items-start mx-auto p-4 justify-center gap-2">
            <label htmlFor="name" className=" font-semibold">
              Name
            </label>
            <input
              type="text"
              className="border-2 outline-none border-orange-200 w-full p-1 mb-4"
              id="name"
            />
            <label htmlFor="email" className=" font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 outline-none border-orange-200 w-full p-1 mb-4"
            />
            <label htmlFor="phoneNumber" className=" font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="border-2 outline-none border-orange-200 w-full p-1 mb-4"
            />
            <label htmlFor="message" className=" font-semibold">
              Messege
            </label>
            <textarea
              id="message"
              cols="30"
              rows="5"
              className="border-2 outline-none border-orange-200 w-full p-1 mb-4"
            ></textarea>
            <button className="bg-orange-400 text-white px-5 py-1.5 rounded ">
              Send
            </button>
          </div>
        </div>
        <div className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-3/4">
          <h2 className="text-2xl font-bold text-center pb-5">Site Address</h2>
          <h2 className="text-xl font-semibold">India</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            doloribus cumque dolorem!
          </p>
          <p className="pb-5">
            <span className="font-semibold">Phone Number:</span> 999999999
          </p>
          <h2 className="text-xl font-semibold">USA</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            dolorem odit ex sit doloribus sequi?
          </p>
          <p className="pb-5">
            <span className="font-semibold">Phone Number:</span> 238342399
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
