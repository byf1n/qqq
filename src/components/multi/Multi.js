import css from "../privat/Private.module.css";
import {Link} from "react-router-dom";
import {Menu} from "../menu";
import img1 from '../../icons/multi/1.jpg';
import img2 from '../../icons/multi/2.jpg';

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
            <div><img className={css.img12} src={img1} alt="png"/></div>
            <div><img className={css.img12} src={img2} alt="png"/></div>
        </div>
    )
}
export {Multi};