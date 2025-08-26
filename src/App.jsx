import data from "./assets/db/data";
import Card from "./Components/Card";

const App = () => {
  return (
    <>
      <Card data={data} />
    </>
  );
};

export default App;
