import css from "./Private.module.css";
import {Link} from "react-router-dom";
import {Menu} from "../menu";
import img2 from '../../icons/private/2.jpg'
import img1 from '../../icons/private/1.jpg'

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
            <div><img className={css.img12} src={img1} alt="png"/></div>
            <div><img className={css.img12} src={img2} alt="png"/></div>
        </div>
    )
}
export {Private};