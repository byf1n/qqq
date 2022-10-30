import {Header} from "../header/Header";
import css from "../privat/Private.module.css";
import {Link} from "react-router-dom";

const Multi = () => {

    return (
        <div>
            <Header/>
            <div className={css.hide} >
                <div className={css.left}>
                    <button>btn</button>
                </div>
                <div className={css.right}>
                    <button>btn</button>
                </div>
            </div>
            <div className={css.home}>
                <Link to={'/'}>Головна</Link>
                <Link to={'/private'}>Приватні будинки</Link>
                <Link className={css.private_text} to={'/multi'}>Багатоповерхівки</Link>
            </div>
            <div>
                multi
            </div>
        </div>
    )
}
export {Multi};