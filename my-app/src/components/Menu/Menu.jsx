import React from 'react';
import classes from './Menu.module.css'
const list = [
    {
 id:1,
 text:'Главная',
 link: '/'
},
  {
    id:2,
    text:'Список',
    link: '/'
  },
  {
    id:3,
    text:'Друзья',
    link: '/'
  },
  {
    id:4,
    text:'Контакты',
    link: '/'
  },
]
const Menu = ({style}) => {
  return (
      <>

        <ul className={classes.menu__list}>
          {list.map((item) => {
          return  <li key={item.id} className={style}>
              <a href={item.link}>{item.text}</a>
            </li>
          })}
        </ul>
      </>
  );
};

export default Menu;