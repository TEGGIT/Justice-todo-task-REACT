import React, {useState} from 'react';
import plus from '../../assets/icons/plus-icon.svg'
import classes from "./Main.module.css";
import trash from "../../assets/icons/trash-icon.svg";
import edit from "../../assets/icons/edit-icon.svg";
import ellipse from "../../assets/icons/mobile-ellipse.svg";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const Main = () => {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Выбрать хостинг для сайта"
    },

  ]);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    setList([
      ...list,
      {
        id: Date.now(),
        text: value
      }
    ]);
    setValue("");
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setOpen(true);
    setCurrentItem(item);
    setEditValue(item.text);
  };

  const saveEdit = () => {
    const indexCurrentItem = list.findIndex((el) => el.id === currentItem.id);
    const beforeList = list.slice(0, indexCurrentItem);
    const afterList = list.slice(indexCurrentItem + 1, list.length);
    setList([
      ...beforeList,
      {
        ...currentItem,
        text: editValue
      },
      ...afterList
    ]);
    setOpen(false);
  };

  return (
      <main className={classes.main}>
        <ReactModal
            isOpen={open}
            style={customStyles}
            onRequestClose={() => setOpen(false)}
        >
          <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={saveEdit}>Изменить</button>
        </ReactModal>

        <div className={classes.main__header}>
          <div className={classes.main__header__options}>
            <button className={classes.main__header__option__btn}>Список</button>
            <button className={classes.main__header__option__btn}>Напоминания</button>
            <button className={classes.main__header__option__btn}>Еще</button>
          </div>
          <div className={classes.main__header__add_field}>
            <input
                className={classes.add_field__text}
                type="text"
                placeholder="Введите текст"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className={classes.add_field__btn} onClick={addTodo}>
              <span className={classes.add_field__item}>Добавить</span>
              <img className={classes.add_field__item} src={plus} alt="plus-icon" />
            </div>
          </div>
        </div>
        <div className={classes.todo_list}>
          {list.map((item) => {
            return (
                <div key={item.id} className={classes.todo_item}>
                  <span>{item.text}</span>
                  <div className={classes.todo_item__icons}>
                    <img
                        onClick={() => handleDelete(item.id)}
                        className={classes.todo_item__icon}
                        src={trash}
                        alt="trash-icon"
                    />
                    <img
                        onClick={() => handleEdit(item)}
                        className={classes.todo_item__icon}
                        src={edit}
                        alt="edit-icon"
                    />
                    <img
                        className={classes.todo_item__icon_mobile}
                        src={ellipse}
                        alt="mobile-ellipse"
                    />
                  </div>
                </div>
            );
          })}
        </div>
      </main>
  );
};

export default Main;