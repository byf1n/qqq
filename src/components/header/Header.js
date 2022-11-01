import './Header.css';
import {Outlet} from "react-router-dom";
const Header = () => {

    return (
        <div>
            <header  className={'header'}>
                <div className={'header_1'}>f t y g</div>
                <div className={'header_2'}>0955650974</div>
            </header>

            <Outlet/>
        </div>
    )
}
export {Header};