import React from "react";
import s from './Footer.module.scss'
import phoneIcons from '../../components/img/assets/fa-phone.png';
import mapMarker from '../../components/img/assets/fa-map-marker.png';
import faShareAlt from '../../components/img/assets/fa-share-alt.png';
import pinterest from '../../components/img/assets/fa-pinterest-p.png';
import facebook from '../../components/img/assets/fa-facebook.png';
import googlePlus from '../../components/img/assets/fa-google-plus.png';

const Footer = () => {
    return(
        <div className={s.footer}>
            <div className={s.container}>
                <div>
                    <div className={s.footer__infoBlock}>
                        <img src={phoneIcons} alt=""/>
                        <span className={s.footer__titleOne}>PHONE</span>
                    </div>
                        <span className={s.footer__infoOne}>+43 ( 987 ) 345 - 6782</span>
                </div>
                <div>
                    <div className={s.footer__infoBlock}>
                        <img src={mapMarker} alt=""/>
                        <span className={s.footer__titleOne}>ADRESS</span>
                    </div>
                        <span className={s.footer__infoOne}>Cracker Inc.</span>
                        <span className={s.footer__infoOne}>10 Cloverfield Lane</span>
                        <span className={s.footer__infoOne}>Berlin, IL 10928</span>
                        <span className={s.footer__infoOne}>Germany</span>
                </div>
                <div>
                    <div className={s.footer__infoBlock}>
                        <img src={faShareAlt} alt=""/>
                        <span className={s.footer__titleOne}>SHARE US</span>
                    </div>
                    <div className={s.footer__infoBlockTwo}>
                        <img src={pinterest} alt=""/>
                        <a href="https://www.pinterest.com/" target="_blank"  className={s.footer__infoTwo} rel="noreferrer">https://www.pinterest.com/</a>
                    </div>
                    <div className={s.footer__infoBlockTwo}>
                        <img src={facebook} alt=""/>
                        <a href="https://www.facebook.com/" target="_blank"  className={s.footer__infoTwo} rel="noreferrer">https://www.facebook.com/</a>
                    </div>
                    <div className={s.footer__infoBlockTwo}>
                        <img src={googlePlus} alt=""/>
                        <a href="https://www.google.com/" target="_blank"  className={s.footer__infoTwo} rel="noreferrer">https://www.google.com/</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;