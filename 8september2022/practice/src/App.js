import './App.css';
import Button from './component/Button';
import Header from './component/Header';

function App() {

  const onClick1=()=>{
    console.log("Button clicked")
  }
  return (
    <div className="container" >
      
      <h2>Hello user</h2>
      <Header  title = "Header"/>
      <Button text="Hello1" color="green" onClick1={onClick1} />
    </div>
  );
}

export default App;
