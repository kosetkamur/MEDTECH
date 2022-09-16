import './App.css';
import data from './data/data.json'
import Buttons from "./Buttons/Buttons";

function App() {
  return (
    <div className="App">
      {data.map((item,index) => <Buttons numberWeek={item.numberWeek} items={item} key={index}/>)}
    </div>
  );
}

export default App;
