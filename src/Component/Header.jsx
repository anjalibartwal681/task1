import Footer from "./footer";

const HeaderAndHero = () => {
  return (
    <>
      <div
        className="  bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('./Images/Zym.jpg')` }}
      >
        <div className="inset-0 bg-black bg-opacity-50 absolute"></div>
        <div className="relative flex flex-col items-center justify-center h-full  text-white">
          <header className=" absolute w-full flex justify-evenly items-center  bg-transparent text-white top-0">
            <div className="text-2xl p-5 font-bold ">FITTRACK</div>
            <nav className="flex gap-16 font-bold">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
              <a href="#" className="hover:text-gray-300">
                Service
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
              <a href="#" className="hover:text-gray-300">
                Join us
              </a>
            </nav>
          </header>

          {/* Header */}

          {/* Hero Content */}
          <div className=" mt-20 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold">Fitness Wonder</h1>
            <p className="mt-4 max-w-2xl mx-auto text-center text-sm font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s. When an unknown printer took a galley of
              type and scrambied it to make a type speciman book.
            </p>
            <div className="mt-8 flex gap-20">
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {/* Key Features Section */}
        <section className="py-12 bg-gray-100 px-[5rem]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-400 relative inline-block">
              Key Features
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-purple-400"></span>
            </h2>

            <div className="grid md:grid-cols-3 gap-5 mt-8 pl-12 pr-12 ">
              <div className="bg-white rounded-lg p-3 shadow-lg  ">
                <img
                  src="./Images/Img1.jpg"
                  alt="Feature 1"
                  className="w-full h-[400px] object-cover rounded-br-[16rem]"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Personalized WorkOut Plans
                </h3>
                <p className="mt-2 text-gray-600">
                  <li>
                    The app could provide personalized meal plans or track user
                    nutrition intake
                  </li>
                  <li>
                    The app could provide personalized meal plans or track user
                    nutrition intake
                  </li>
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img
                  src="./Images/img2.jpg"
                  alt="Feature 2"
                  className="w-full h-[400px] object-cover rounded-br-[16rem]"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Progress tracking & Analytics
                </h3>
                <p className="mt-2 text-gray-600 ">
                  <li>
                    The app could provide personalized meal plans or track user
                    nutrition intake
                  </li>
                  <li>
                    The app could provide personalized meal plans or track user
                    nutrition intake
                  </li>
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img
                  src="./Images/Diet.jpeg"
                  alt="Feature 3"
                  className="w-full h-[400px] object-cover rounded-br-[16rem]"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Nutrition and Diet Planning
                </h3>
                <p className="mt-2 text-gray-600">
                  <li>
                    The app could provide personalized meal plans or track user
                    nutrition intake
                  </li>
                  <li>
                    The app could provide personalized meal plans or track user
                    nutrition intake
                  </li>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-400 relative inline-block">
              About Section
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-purple-400"></span>
            </h2>

            {/* Additional content for the About section can go here */}

            <div className="flex  justify-between items-center p-6 pl-32 pr-32 ">
              <div className="w-1/2 p-9 text-left ">
                <h4 className="mt-4 text-gray-600 font-bold text-2xl">
                  We are creative...
                </h4>
                <p className="mt-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque dicta, porro ex alias odio perspiciatis at facere
                  necessitatibus architecto minus atque numquam non quia, beatae
                  aliquam eaque eligendi repellat impedit!Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                  <br />
                  Cumque dicta, porro ex alias odio perspiciatis at facere
                  necessitatibus architecto minus atque numquam non quia, beatae
                  aliquam eaque eligendi repellat impedit!
                </p>
                <button className="mt-8 px-12 py-3 bg-purple-600 text-white rounded-lg">
                  Read More
                </button>
              </div>

              <div className="flex justify-start mt-8 w-1/2  ">
                <div className=" border-purple-400 border-8 ml-52  ">
                  <div className="translate-y-5 -translate-x-5  border-purple-400 ">
                    <img
                      src="./Images/Diet.jpeg"
                      alt="About Us"
                      className=" w-[350px] h-[450px] rounded-lg  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Key Features Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 relative inline-block mb-24">
            Testimonials
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-purple-400"></span>
          </h2>

          <div className=" grid md:grid-cols-3 gap-5 mt-8 pl-12 pr-12">
            <div className="   relative">
              <div className=" absolute rounded-full object-contain mt-[-3rem] ml-[9rem]">
                <img
                  src="./Images/test-1.jpg"
                  alt="Feature 1"
                  className="w-[100px] h-[100px] rounded-full  border-[10px] border-white"
                />
              </div>
              <div className="bg-gray-200 rounded-lg p-8 shadow-lg   ">
                <p className=" text-gray-600 p-3 mt-12 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  minus ipsum iusto, inventore placeat deleniti excepturi
                  facilis maiores provident error saepe ut? Minus optio quam
                  dignissimos ipsum perspiciatis non magnam.
                </p>
                <h3 className="text-xl font-semibold text-center text-purple-400 mt-4">
                  Namesi
                </h3>
              </div>
            </div>

            <div className=" relative">
              <div className="  absolute rounded-full object-contain mt-[-3rem] ml-[9rem]">
                <img
                  src="./Images/test-2.jpg"
                  alt="Feature 1"
                  className="w-[100px] h-[100px] rounded-full border-[10px] border-white "
                />
              </div>
              <div className="bg-gray-200 rounded-lg p-8 shadow-lg   ">
                <p className=" text-gray-600 text-center mt-12 p-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur similique, perspiciatis nihil ad officia, illum,
                  voluptatum saepe earum perferendis debitis veritatis! Quaerat,
                  fugiat animi! Est fugiat illo beatae alias laudantium.
                </p>
                <h3 className="text-xl font-semibold mt-4 text-center text-purple-400">
                  Namesi
                </h3>
              </div>
            </div>

            <div className="relative">
              <div className="absolute rounded-full object-contain mt-[-3rem] ml-[9rem]">
                <img
                  src="./Images/test-3.jpg"
                  alt="Feature 1"
                  className="w-[100px] h-[100px] rounded-full border-[10px] border-white"
                />
              </div>
              <div className="bg-gray-200  rounded-lg p-8 shadow-lg   ">
                <p className=" text-gray-600 p-3 mt-12 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  minus ipsum iusto, inventore placeat deleniti excepturi
                  facilis maiores provident error saepe ut? Minus optio quam
                  dignissimos ipsum perspiciatis non magnam.
                </p>
                <h3 className="text-xl font-semibold text-center text-purple-400 mt-4">
                  Namesi
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer />
    </>
  );
};

export default HeaderAndHero;
