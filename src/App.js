import Footer from "./components/Footer";
import NewTodo from "./components/NewTodo";
import CurrentList from "./components/CurrentList";
import Background from "./components/Background";
import Header from "./components/Header";

function App() {
  return (
    <div id="overall" className="h-full w-full">
      <div className="App min-h-screen dark:text-fem-dark-300 bg-fem-light-200 dark:bg-fem-dark-100 flex justify-center flex-col items-center font-josefin selection:bg-fem-light-500 selection:text-fem-light-100">
        <Background />
      
        <section className="flex flex-col items-center justify-center gap-2 p-8 w-full mx-2 max-w-[600px] -translate-y-2 min-h-[calc(100vh-2rem)]">
          <Header />
          <NewTodo />
          <CurrentList />
          <span className="text-xs font-light text-fem-light-400 dark:text-fem-dark-500">Drag and drop to reorder list</span>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;