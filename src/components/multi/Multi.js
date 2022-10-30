import css from "../privat/Private.module.css";
import {Link} from "react-router-dom";
import {Menu} from "../menu";

const Multi = () => {

    return (
        <div>
            <Menu/>

            <div className={css.home}>
                <Link to={'/'}>Головна</Link>
                <Link to={'/private'}>Приватні будинки</Link>
                <Link className={css.private_text} to={'/multi'}>Багатоповерхівки</Link>
                <Link to={'/contacts'}>Контакти</Link>
            </div>
            <h1>Багатоповерхівки</h1>
            <div>фотки:</div>
        </div>
    )
}
export {Multi};