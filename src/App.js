
function App() {
  return (
    <div className="App h-screen bg-fem-light-200">
      <section className="flex flex-col items-center justify-center h-full">
        {/* <h1 className="">If I lose it all, slip and fall</h1> */}
        <h1 className="">Todo</h1>


        <input type="text" name="" id="" className="" placeholder="Create A new todo..." />

        <div className="">
          5 items left
          All
          Active
          Completed
          Clear Completed
        </div>

        <span className="">Drag and drop to reorder list</span>
      </section>
      <footer className="text-[0.5rem] text-center py-2">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/remtaine">Ben</a>.
      </footer>
    </div>
  );
}

export default App;
