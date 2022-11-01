import './App.css';
import {Home} from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import {Private} from "./components/privat/Private";
import {Multi} from "./components/multi/Multi";
import {Сontacts} from "./components/сontacts/Сontacts";
import {AdminPage} from "./components/adminPage/AdminPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/private'} element={<Private/>}/>
            <Route path={'/multi'} element={<Multi/>}/>
            <Route path={'/contacts'} element={<Сontacts/>}/>
            <Route path={'/admin'} element={<AdminPage/>}/>
            <Route path={'/*'} element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
