import Header from "./components/Header";
import MemeDisplay from "./components/MemeDisplay";
import MemeForm from "./components/MemeForm";

function App() {
  return (
    <main className="pt-24 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 min-h-screen">
      <Header />
      <MemeForm />
      <MemeDisplay />
    </main>
  );
}

export default App;
