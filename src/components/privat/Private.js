import css from "./Private.module.css";
import {Link} from "react-router-dom";
import {Menu} from "../menu";

const Private = () => {

    return (
        <div>
            <Menu/>

            <div className={css.home}>
                <Link to={'/'}>Головна</Link>
                <Link className={css.private_text} to={'/private'}>Приватні будинки</Link>
                <Link to={'/multi'}>Багатоповерхівки</Link>
                <Link to={'/contacts'}>Контакти</Link>
            </div>
            <h1>Приватні будинки</h1>
            <div>фотки:</div>
        </div>
    )
}
export {Private};