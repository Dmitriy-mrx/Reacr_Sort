import React, { useState, memo } from 'react';
import './pstyle.css';

function Add({ persons }) {
  const [name, setName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [group, setGroup] = useState('');

  function sub(e) {
    e.preventDefault()
    persons(name, firstName, group)
  }

  return (
    <form className="allInput" onSubmit={sub}>
      <input type="text" placeholder="Имя" name="name" values="name" required onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Фамилия" name="firstname" values="firstName" required onChange={(e) => setfirstName(e.target.value)} />
      <input type="text" placeholder="Группа" name="group" values="group" required onChange={(e) => setGroup(e.target.value)} />
      &nbsp;
      <button className="component" type="submit" >Добавить сотрудника</button>
      &nbsp;
      <button className="component" type="reset">Очистить форму</button>
    </form>
  );
}

export default memo(Add);
