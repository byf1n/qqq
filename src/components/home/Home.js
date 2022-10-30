import {NavLink} from "react-router-dom";
import css from './Home.module.css'
import header from './banner.jpg'
import img from '../../icons/img.png'
import img1 from '../../icons/img_1.png'
import img2 from '../../icons/img_2.png'
import img3 from '../../icons/img_3.png'
import {Menu} from "../menu";

const Home = () => {
    return (

        <div>
            <Menu/>

            <div style={{backgroundImage: `url(${header})`}} className={css.img}>
                <div className={css.home}>
                    <div><NavLink className={css.golovna_text} to={''}>Головна</NavLink></div>
                    <div><NavLink to={'/private'}>Приватні будинки</NavLink></div>
                    <div><NavLink to={'/multi'}>Багатоповерхівки</NavLink></div>
                    <div><NavLink to={'/contacts'}>Контакти</NavLink></div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${header})`}} className={css.img_mobile}>

            </div>

            <div className={css.obj}>
                ОБ'ЄКТИ
            </div>

            <div className={css.objects}>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${img})`}} className={css.img_obj}></div>
                    <p>ТРЦ Проспект</p>
                    <div>Сдан 2014 г. - Гарантия до 2024 г.</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${img1})`}} className={css.img_obj}></div>
                    <p>ТРЦ Скаймол</p>
                    <div>Сдан в 2013 г.- Гарантия до 2023 г.</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${img2})`}} className={css.img_obj}></div>
                    <p>ТРЦ Мармелад</p>
                    <div>Сдан в 2009 г. - Гарантия  до 2019 г.</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${img3})`}} className={css.img_obj}></div>
                    <p>Логистический центр КМС</p>
                    <div>Идут монтажные работы.</div>
                </div>

            </div>

        </div>
    )
}
export {Home};