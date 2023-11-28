// import { useContext } from "react";
// import myContext from "../../context/data/myContext";

function ProductCard() {
//   const context = useContext(myContext);
//   const { mode } = context;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            // style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/171151122/photo/elegant-dinner-table-setting-with-shallow-depth-of-field.jpg?s=2048x2048&w=is&k=20&c=vrauxaJA2MiOxqr8eYI1RQLu5QEHFPAGLvNsRxNdzm0="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/508935749/photo/cultery.jpg?s=612x612&w=0&k=20&c=m0thcli-v3uIpqg7jEigd_C0AQeNtU_mgNsZS9jGOs4="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/1328715582/photo/top-view-of-christmas-table-setting-on-the-black-plate-on-the-dark-background.jpg?s=612x612&w=0&k=20&c=35d4eGli1EY8MG6cPIhjzdQh1CxearVvqev9Y_uSpgY="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi 
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/1183811829/photo/cutlery-rustic-used-for-eating-or-serving-food-food-background-copy-space-top-view.jpg?s=612x612&w=0&k=20&c=7HgPaBZY_PtiSp2YD3hE3oE-_3v4ofys_UnOtldhXO0="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/844316088/photo/vintage-kitchen-utensils-on-rustic-wood-background-closeup-of-fork-spoon-and-knife-beautiful.jpg?s=612x612&w=0&k=20&c=uhH_VK0IcmAZPDLsGZKBiiZbpBCn4JoWb7vR6ZAFo-w="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/171151122/photo/elegant-dinner-table-setting-with-shallow-depth-of-field.jpg?s=2048x2048&w=is&k=20&c=vrauxaJA2MiOxqr8eYI1RQLu5QEHFPAGLvNsRxNdzm0="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/508935749/photo/cultery.jpg?s=612x612&w=0&k=20&c=m0thcli-v3uIpqg7jEigd_C0AQeNtU_mgNsZS9jGOs4="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/1328715582/photo/top-view-of-christmas-table-setting-on-the-black-plate-on-the-dark-background.jpg?s=612x612&w=0&k=20&c=35d4eGli1EY8MG6cPIhjzdQh1CxearVvqev9Y_uSpgY="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/1308512016/photo/modern-cutlery-on-stone-background.jpg?s=612x612&w=0&k=20&c=nTy8GIvLEGqJU8PXojHegtPVudtb3mxanmJFNw0gRIk="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/1183811829/photo/cutlery-rustic-used-for-eating-or-serving-food-food-background-copy-space-top-view.jpg?s=612x612&w=0&k=20&c=7HgPaBZY_PtiSp2YD3hE3oE-_3v4ofys_UnOtldhXO0="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/844316088/photo/vintage-kitchen-utensils-on-rustic-wood-background-closeup-of-fork-spoon-and-knife-beautiful.jpg?s=612x612&w=0&k=20&c=uhH_VK0IcmAZPDLsGZKBiiZbpBCn4JoWb7vR6ZAFo-w="
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            //   style={{
            //     backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            //     color: mode === "dark" ? "white" : "",
            //   }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://media.istockphoto.com/id/871749226/photo/top-view-of-christmas-menu-table.jpg?s=612x612&w=0&k=20&c=tk7GM-dv0s9knswdZn5j0spMD2D40CmzDIVwY7l2OcA="
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Kashi
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                //   style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductCard;
