import "./App.css"
import Card from "./components/Card";
import NavBar from "../../home-page/src/components/NavBar";
function App(){
  return(
    <div className="entire">
      <NavBar></NavBar>
      {/*<center>
      <h1 className="heading-feature">Our Features</h1>
  </center>*/}
    <Card></Card>
    </div>
  );
}
export default App;