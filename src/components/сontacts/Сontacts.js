import css from "../privat/Private.module.css";
import {Link} from "react-router-dom";
import {Menu} from "../menu";

const Сontacts = () => {

    return (
        <div>
            <Menu/>
            <div className={css.home}>
                <Link to={'/'}>Головна</Link>
                <Link to={'/private'}>Приватні будинки</Link>
                <Link to={'/multi'}>Багатоповерхівки</Link>
                <Link className={css.private_text} to={'/contacts'}>Контакти</Link>
            </div>
            <h1>Контакти</h1>
            <div>0990485608</div>
            <div>г. Киев</div>
            <div>тел. 067 548 20 48 </div>
            <div>Email: office@budroof.com.ua</div>
        </div>
    )
}
export {Сontacts};