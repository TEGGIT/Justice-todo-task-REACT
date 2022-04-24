import React from 'react';
import Menu from "../Menu/Menu";
import bell from "../../assets/icons/bell-icon.svg"
import burger from '../../assets/icons/burger-icon.svg'
import profile from "../../assets/icons/profile-icon.svg"
import classes from "./Header.module.css"
const Header = () => {
  return (
      <div>

        <header className={classes.header}>
          <span className={classes.header__logo}>Justice</span>
          <div className={classes.header__burger}>
            <img src={burger} alt="burger-button" /> 
          </div>
          <nav className={classes.header__menu} aria-label="Header menu">
           <Menu style={classes.menu__list__item}/>
            <div className={classes.menu__profile}>
              <button className={classes.menu__profile__item}>Выйти</button>
              <img className={classes.menu__profile__item}
                   src={bell}
                   alt="bell-icon" />
                <img className={classes.menu__profile__item}
                     src={profile}
                     alt="profile-icon" />
            </div>
          </nav>
        </header>
      </div>

  );
};

export default Header;