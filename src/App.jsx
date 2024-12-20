import { Contact, Hero, Portfolio, Services } from "./components";

const App = () => {
  return (
    <div className="container">
      <section className="">
        <Hero />
      </section>
      <section className="">
        <Services />
      </section>
      {/* <section className=""> */}
        <Portfolio />
      {/* </section> */}
      <section className="">
        <Contact />
      </section>
    </div>
  );
};

export default App;
