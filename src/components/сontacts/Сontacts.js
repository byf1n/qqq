import css from "../privat/Private.module.css";
import {Link} from "react-router-dom";
import {Menu} from "../menu";
import newCss from './Contacts.module.css'

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
            <div className={newCss.info}>
                <h1>Контакти</h1>
                <div>ФІО</div>
                <div>місто Київ</div>
                <div>тел. 095 565 09 74</div>
                <div>Email: email@gmail.com</div>
            </div>
        </div>
    )
}
export {Сontacts};