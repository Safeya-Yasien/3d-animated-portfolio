import { Contact, Hero, Portfolio, Services } from "./components";

const App = () => {
  return (
    <div className=" container">
      <section className="">
        <Hero />
      </section>
      <section className="bg-orange-400">
      <Services />
        
      </section>
      <section className="bg-yellow-400">
      <Portfolio />

      </section>
      <section className="bg-green-400">
      <Contact />

      </section>
    </div>
  );
};

export default App;
