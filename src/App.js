import Footer from "./components/Footer";
import NewTodo from "./components/NewTodo";
import CurrentList from "./components/CurrentList";
import Background from "./components/Background";
import Header from "./components/Header";

function App() {
  return (
    <div className="App h-screen bg-fem-light-200 flex justify-center flex-col items-center font-josefin selection:bg-fem-light-500 selection:text-fem-light-100">
      <Background />
    
      <section className="flex flex-col items-center justify-center gap-2 p-8 w-5/6 lg:w-[500px] -translate-y-2 min-h-[calc(100vh-1.5rem)]">
        <Header />
        <NewTodo /> 
        <CurrentList />

        <span className="text-[0.5rem] font-light text-fem-light-400">Drag and drop to reorder list</span>
      </section>

      <Footer />
    </div>
  );
}

export default App;