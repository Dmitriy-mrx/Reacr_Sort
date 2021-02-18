import React, { useState, memo } from 'react';
import Add from './AddPerson';
import './pstyle.css';

function Spisok({ info, add }) {
  const [flag, setFlag] = useState(false)
  const [poisk, setPoisk] = useState("");
  const [result, setResult] = useState([]);
  const [sorting, setSorting] = useState('name');

  let sort = [...info];
  if (sorting !== null) {
    sort.sort((a, b) => {
      if (a[sorting.key] < b[sorting.key]) {
        return sorting.direction === 'ascending' ? -1 : 1;
      }
      if (a[sorting.key] > b[sorting.key]) {
        return sorting.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }
  const requestSort = key => {
    console.log(key);
    let direction = 'ascending';
    if (sorting.key === key && sorting.direction === 'ascending') {
      direction = 'descending';
    }
    setSorting({ key, direction });
  }



  function sortingFunc(e) {
    e.preventDefault();
    requestSort(e.target.select.value)

  }



  function onSub(e) {
    e.preventDefault();
    setResult(info.filter(el => el.name.toLowerCase().includes(poisk) || el.lastName.toLowerCase().includes(poisk) || el.group.toLowerCase().includes(poisk)));
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Сортировка</h1>
      <form className="forms" onSubmit={onSub}>
        <input className="search" type="text" values="poisk" onChange={(e) => setPoisk(e.target.value.toLowerCase())} />
        &nbsp;
        <input className="btnStyle searchPersonBtn" type="submit" value="Поиск" />
      </form>



      <form className="forms" onSubmit={sortingFunc}>
        <select className="sel" name="select">
          <option>Выберите пунк сортировки</option>
          <option value="name">Имя</option>
          <option value="lastName">Фамилия</option>
          <option value="group">Группа</option>
        </select>
        &nbsp;
        <button className="size" type="submit"  >Отсортировать</button>
      </form>



      <div className="addPersonBtn">
        <button className="btnStyle" type="button" onClick={() => setFlag(!flag)}>Добавить нового работника</button>
        {flag ? <Add className="component" all={info} persons={add} /> : ''}
      </div>
      <div className="container">
        <table className="table">
          <tr><th>ID</th><th>Имя</th><th>Фамилия</th><th>Группа</th></tr>
          {result.length === 0 ? sort && sort.map((el, i) => {
            return (
              <>
                <tr key={el.id}><td>{i + 1}</td> <td>{el.name}</td><td>{el.lastName}</td><td>{el.group}</td></tr>
              </>
            );
          }) : result && result.map((el, i) => {
            return (
              <>
                <tr key={el.id}><td>{i + 1}</td> <td>{el.name}</td><td>{el.lastName}</td><td>{el.group}</td></tr>
              </>
            );
          })}

        </table>
      </div>

    </>
  );
}

export default memo(Spisok);
