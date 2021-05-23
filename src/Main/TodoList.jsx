/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Styles.css';

const TodoList = () => {
  // initial hooks
  const [value, setValue] = useState(localStorage.getItem('value') || '');
  const [priority, setPriority] = useState(
    localStorage.getItem('priority') || ''
  );
  const [list, setList] = useState([]);

  //set hooks color text
  const [textColor, setTextColor] = useState('red');
  //set hooks style text
  const [styleText, setStyleText] = useState('none');

  // const handleChangeTextStyle = () => {
  //   setTextColor(textColor === 'green' ? 'red' : 'green');
  //   setStyleText(styleText === 'line-through' ? 'none' : 'line-through');
  // };

  const updateInput = (e) => {
    localStorage.setItem('', e.target.value);
    //update react state
    setValue(e.target.value);
  };
  const updateInputPriority = (e) => {
    localStorage.setItem('', e.target.priority);
    //update react state
    setPriority(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (value === '') return alert('Need enter TODO task');

    if (priority < 0 || priority > 5)
      return alert('Need enter Priority number 1 - 5');
    // if (priority === "") return setPriority("1");

    //create item task with unique id
    setList([
      ...list,
      {
        id: 1 + Math.random(),
        value: value.slice(),
        priority: priority,
        completed: false,
        sorted: false,
      },
    ]);

    // return empty input
    setValue('');
    setPriority('');
  };

  // const sortTask = (e) => {
  //   e.preventDefault();
  //   const updatedListTodo = [...list].sort((a, b) => b.priority - a.priority);

  //   const updatedListTodo = list.filter((value) => value.priority === 2);

  //   const updatedListTodo = list.map((value) => {
  //     return value.priority === 2
  //   //     ? { ...value, priority: value.priority }
  //       : value;
  //   });

  //   setList(updatedListTodo);
  // };

  const handleSubmitCourse = (e) => {
    e.preventDefault();
    // if (value === "") return;

    // setValue("");
  };

  const deleteTask = (id) => {
    //filter out task being deleted
    const updatedListTodo = list.filter((item) => item.id !== id);
    setList(updatedListTodo);
  };

  const clearAllTask = (e) => {
    e.preventDefault();
    const updatedListTodo = list.filter((value) => list.value === '');
    setList(updatedListTodo);
  };

  const toggleTodo = (id) => {
    const updatedListTodo = list.map((value) => {
      return value.id === id
        ? { ...value, completed: !value.completed }
        : value;
    });
    setList(updatedListTodo);
  };

  const priorities = [
    {
      value: 'ONE',
      label: '1',
    },
    {
      value: 'TWO',
      label: '2',
    },
    {
      value: 'THREE',
      label: '3',
    },
    {
      value: 'FOUR',
      label: '4',
    },
    {
      value: 'FIVE',
      label: '5',
    },
  ];

  const Options = ({ options }) => {
    return options.map((option) => (
      <option key={option.value} value={option.label}>
        {option.label}
      </option>
    ));
  };

  // const handleChangeCourse = (e) => {
  //   setList({ list: e.target.value });
  // };

  return (
    <div className="container" onSubmit={handleSubmitCourse}>
      {/* {TodoListCss.TodoList} */}

      <h3>TODO or NOT TODO that is the question</h3>
      <hr />

      <form className="form-horizontal">
        <div className="form-group">
          <label className="input-label">TODO's LIST</label>
          <div className="input-form">
            <input
              name="value"
              type="text"
              value={value}
              onChange={updateInput}
              placeholder="Type your TODO here..."
            />

            <input
              name="priority"
              type="number"
              defaultValue="0"
              value={priority}
              onChange={updateInputPriority}
              placeholder="Type your PRIORITY..."
            />
          </div>
        </div>
        <div className="form-group-btn">
          <div>
            <button className="btn-addTask" type="submit" onClick={addTask}>
              Add TODO
            </button>

            <button
              className="btn-clearAllTask"
              type="submit"
              onClick={clearAllTask}
            >
              CLEAR ALL TASK's
            </button>

            <div>
              <select type="text" className="form-control">
                <Options options={priorities} />
              </select>
            </div>
            {/* <ChooseTaskPriority  /> */}
          </div>
        </div>
      </form>

      <hr />

      <h4>
        To Do Count: <span className="badge">{list.length}</span>
      </h4>

      <ul className="list-group">
        {list.map((value) => (
          <li
            className="list-group-item"
            key={value.id}
            style={{ color: textColor, textDecoration: styleText }}
          >
            <span className={value.completed ? 'value-completed' : undefined}>
              <div className="list-group-item-priority">
                <small> Priority {value.priority} </small>
              </div>
              {value.value}
            </span>

            <input
              type="checkbox"
              className="checkbox"
              onClick={() => toggleTodo(value.id)}
            />

            <button
              className="btn-deleteTask"
              onClick={() => deleteTask(value.id)}
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
