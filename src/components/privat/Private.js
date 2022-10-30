import {Header} from "../header/Header";
import css from "./Private.module.css";
import {Link} from "react-router-dom";

const Private = () => {

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
                <Link className={css.private_text} to={'/private'}>Приватні будинки</Link>
                <Link to={'/multi'}>Багатоповерхівки</Link>
            </div>
            <div>
                private
            </div>
        </div>
    )
}
export {Private};