import Header from "./components/Header";
import Card from "./components/Card";
import travelData from "./travelData";
import Main from "./components/Main";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {

  const card = travelData.map(item => {
    return(
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <>
      <Header />
      <Main />
      <section className="p-3 pb-0 grid grid-cols-1 xl:grid-cols-2"> 
        {card}
      </section>
      <section className="flex justify-center p-8">
          <Button />
      </section>
      <Footer />
    </>
  ); 
}

export default App;
