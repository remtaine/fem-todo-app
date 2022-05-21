import BgDesktopLight from "../src/images/bg-desktop-light.jpg";
import BgDesktopDark from "../src/images/bg-desktop-dark.jpg";
import BgMobileLight from "../src/images/bg-mobile-light.jpg";
import BgMobileDark from "../src/images/bg-mobile-dark.jpg";

function App() {
  return (
    <div className="App h-screen bg-fem-light-200 flex justify-center flex-col items-center font-josefin selection:bg-fem-light-500 selection:text-fem-light-100">
      <div className="absolute top-0 h-[35%]">
        <img src={BgDesktopLight} alt="" className="hidden mobile:block object-cover min-h-full"/>
        <img src={BgMobileLight} alt="" className="block mobile:hidden object-cover min-h-full"/>
      </div>
      <section className="flex flex-col items-center justify-center gap-2 p-8 w-5/6 lg:w-[500px] -translate-y-2 min-h-[calc(100vh-1.5rem)]">
        {/* <h1 className="">If I lose it all, slip and fall</h1> */}
        <div className="flex justify-between w-full text-fem-light-100 items-center">
          <h1 className="uppercase tracking-[0.4rem] font-bold align-baseline">Todo</h1>
          <button className="px-1 rounded group flex justify-center items-center">
            <i className="fa-solid fa-sun hidden group-hover:-translate-y-[2px] duration-500"></i>
            <i className="fa-solid fa-moon hiddn group-hover:-translate-y-[2px] duration-500"></i>
          </button>
        </div>


        <section className="flex justify-center items-center py-2 px-4 gap-2 rounded shadow text-sm bg-fem-light-100">
          <button className="border-solid border-fem-light-300 border-[1px] w-3 h-3 rounded-full"></button>
          <div className="">
            <input type="text" name="" id="" placeholder="Create a new todo..." className="pr-16 leading-[16px] text-lg pt-1 outline-none"/>
          </div>
        </section>

        <section className="rounded shadow bg-fem-light-100 py-2 px-4 w-[420px]">
          <ul className="flex ">
            <div className="flex items-center gap-2 border-b-[1px]border-fem-light-300 mb-2 group w-full">
              <button className="border-solid border-fem-light-300 border-[1px] w-3 h-3 rounded-full "></button>
              <span className="">Go to the groceries</span>
              <div className="ml-auto flex gap-2">
                <button className="ml-auto"><i className="fa-solid fa-pen hidden group-hover:block hover:-translate-y-[2px] ease-in-out duration-500"></i></button>
                <button className="ml-auto"><i className="fa-solid fa-xmark hidden group-hover:block hover:-translate-y-[2px] ease-in-out duration-500"></i></button>
              </div>
            </div>
          </ul>
          <div className="text-fem-light-500 flex justify-between text-[0.5rem]">
            <button className="hover:text-fem-light-400 duration-500">5 items left</button>
            {/* <span className="mx-1">|</span> */}
            <div className="flex gap-2  ml-6 flex-nowrap">
              <button className="hover:text-fem-light-400 duration-500">All</button>
              <button className="hover:text-fem-light-400 duration-500">Active</button>
              <button className="hover:text-fem-light-400 duration-500">Completed</button>
            </div>
            {/* <span className="mx-1">|</span> */}
            <button className="hover:text-fem-light-400 duration-500">Clear Completed</button>
          </div>
        </section>

        <span className="text-[0.5rem] font-light text-fem-light-400">Drag and drop to reorder list</span>
      </section>

      <footer className="text-[0.5rem] text-center py-1">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="underline hover:font-bold duration-500">Frontend Mentor</a> | Coded by <a href="https://github.com/remtaine" className="underline hover:font-bold duration-500">Ben</a>
      </footer>
    </div>
  );
}

export default App;