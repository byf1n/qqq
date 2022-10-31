import {NavLink} from "react-router-dom";
import css from './Home.module.css'
import header from './banner.jpg'
import img1 from '../../icons/golovna/1.jpg'
import img2 from '../../icons/golovna/2.jpg'
import img3 from '../../icons/golovna/3.jpg'
import img4 from '../../icons/golovna/4.jpg'
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
                    <div style={{backgroundImage: `url(${img1})`}} className={css.img_obj}></div>
                    <p>Назва</p>
                    <div>детальне інфо...</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${img2})`}} className={css.img_obj}></div>
                    <p>Назва</p>
                    <div>детальне інфо...</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${img3})`}} className={css.img_obj}></div>
                    <p>Назва</p>
                    <div>детальне інфо...</div>
                </div>
                <div className={css.objects_btn}>
                    <div style={{backgroundImage: `url(${img4})`}} className={css.img_obj}></div>
                    <p>Назва</p>
                    <div>детальне інфо...</div>
                </div>

            </div>

        </div>
    )
}
export {Home};