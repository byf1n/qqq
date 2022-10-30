import './App.css';
import {Home} from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import {Private} from "./components/privat/Private";
import {Multi} from "./components/multi/Multi";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={''} element={<Home/>}/>
            <Route path={'/private'} element={<Private/>}/>
            <Route path={'/multi'} element={<Multi/>}/>
        </Routes>
    </div>
  );
}

export default App;
