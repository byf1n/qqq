import css from "./home/Home.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import computer from "../icons/icons8-computer-96.png";
import {Header} from "./header/Header";

const Menu = () => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
       <div>
           {
               show?<div  className={css.menu}>
                   <div onClick={() => {
                       navigate('/')
                       setShow(!show);
                       window.scrollTo(0,0)
                   }}  className={css.menu_parts}>ГОЛОВНА</div>
                   <div onClick={() => {
                       navigate('/private');
                       setShow(!show);
                       window.scrollTo(0,0);
                   }} className={css.menu_parts}>ПРИВАТНI БУДИНКИ</div>
                   <div onClick={() => {
                       navigate('/multi');
                       setShow(!show);
                       window.scrollTo(0,0);
                   }} className={css.menu_parts}>БАГАТОПОВЕРХIВКИ</div>
                   <div onClick={() => {
                       navigate('/contacts');
                       setShow(!show);
                       window.scrollTo(0,0);
                   }} className={css.menu_parts}>КОНТАКТИ</div>
               </div>:null
           }

           <Header/>

           <div className={css.hide} >
               <div className={css.left}>
                   <div onClick={()=> setShow(!show)} className={css.burger}>
                       <div className={css.burger_part}></div>
                       <div className={css.burger_part}></div>
                       <div className={css.burger_part}></div>
                   </div>
               </div>
               <div className={css.right}>
                   <div onClick={() => {
                       return document.getElementsByTagName('meta')['viewport'].content=
                           'width= 1200px; height= 600px'
                   }}><img className={css.comp} src={computer} alt="monitor_png"/></div>
               </div>
           </div>
       </div>
    )
}
export {Menu};