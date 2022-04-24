import React from 'react';
import Menu from "../Menu/Menu";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
      <div>
        <footer className={classes.footer}>
          <div className={classes.footer__wrapper}>
            <div className={classes.footer__container}>
              <span className={classes.footer__logo}>Justice</span>
              <nav className={classes.footer__menu} aria-label="footer-menu">
                <ul className={classes.footer_menu__list}>
                 <Menu style={classes.menu__list__item}/>
                </ul>
              </nav>
            </div>
            <div className={classes.footer__rights_block}>
              <span>© 2021 Justice-team. All rights reserved.</span>
              <div className={classes.rights_block__privacy_container}>
                <span>Terms & conditions</span>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Footer;