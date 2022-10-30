import {Header} from "../header/Header";
import {Link, NavLink} from "react-router-dom";
import css from './Home.module.css'
import header from './banner.jpg'

const Home = () => {

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
            <div style={{backgroundImage: `url(${header})`}} className={css.img}>
                <div className={css.home}>
                    <div><NavLink className={css.golovna_text} to={''}>Головна</NavLink></div>
                    <div><NavLink to={'/private'}>Приватні будинки</NavLink></div>
                    <div><NavLink to={'/multi'}>Багатоповерхівки</NavLink></div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${header})`}} className={css.img_mobile}>

            </div>

            <div className={css.obj}>
                ОБ'ЄКТИ
            </div>

            <div className={css.objects}>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${header})`}} className={css.img_obj}></div>
                    <p>ТРЦ Проспект</p>
                    <div>Сдан 2014 г. - Гарантия до 2024 г.</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${header})`}} className={css.img_obj}></div>
                    <p>ТРЦ Скаймол</p>
                    <div>Сдан в 2013 г.- Гарантия до 2023 г.</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${header})`}} className={css.img_obj}></div>
                    <p>ТРЦ Мармелад</p>
                    <div>Сдан в 2009 г. - Гарантия  до 2019 г.</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${header})`}} className={css.img_obj}></div>
                    <p>Логистический центр КМС</p>
                    <div>Идут монтажные работы.</div>
                </div>

            </div>

        </div>
    )
}
export {Home};