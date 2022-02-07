import React from 'react';
import Store from '../store/Store'
import { observer } from "mobx-react"

const Table = observer (()=> {
  
    const [popup, setPopup] = React.useState(false);

    const [activeItem, setActiveItem] = React.useState(null)
    const [activeDate, setActiveDate] = React.useState(null)

    const [left, setLeft]= React.useState(0)
    const [top, setTop]= React.useState(0)

    // React.useEffect(()=>{
    //     if(popup) {
    //         let el = document.querySelector('form');
    //         el.style.left = `${left + 180}px`
    //         el.style.top = `${top}px`
    //     }

    // })

    // const changePosition = () => {

    //     if(popup) {
    //         let el = document.querySelector('form');
    //         el.style.left = `${left + 180}px`
    //         el.style.top = `${top}px`
    //     }
     
    // }

    const openPopup = (event, index, date) => {
        let c = event.target.getBoundingClientRect()
        setLeft(c.left)
        setTop(c.top)

        setPopup(true)

        setActiveItem(index)
        setActiveDate(date)
        // changePosition()
    }

    const change = (event) => {
        event.preventDefault()
        Store.changeGrade()
        closePopup()
    }

    const closePopup = () => {
        setPopup(false)
        setActiveItem(null)
        setActiveDate(null)
    }

  return (
    <React.Fragment>
        <table className='policies__table-body'>
            <tbody>
                <tr>
                    <th className="policies__table-cell">П</th>
                    <th className="policies__table-cell">ФИО студента</th>
                    {Store.Dates.map(date=> 
                    <th className="policies__table-cell" key={date}>{date}</th>
                    )}
                </tr>
                {Store.Students.map(item=>
                    <tr key={item.id}>
                    <td className="policies__table-cell">{item.id}</td>
                 
                    <td className="policies__table-cell">{item.FIO}</td>
                    {item.Data.map((i) => 
                        <td className={activeItem === item.id && activeDate === i.date 
                            ? 'policies__table-cell active':'policies__table-cell'} 
                            key={i.date} 
                            onClick={(event)=> {openPopup(event, item.id, i.date);Store.setDay(i, item.FIO)}}>{i.grade}</td>
                    )}
                    </tr>
                )}
            </tbody>
        </table>
        {popup && 
            <form id="form" onSubmit={(event)=>change(event)}>
                <a className="btn" onClick={()=>closePopup()}>X</a>
              <h4>ФИО - {Store.day.FIO}</h4>
              <h4>Дата - {Store.day.date}</h4>
              <label>
              Оценка:
              <input id="gradeInput" type="number" required
                     min={2} max={5}
                     value={Store.day.grade}
                     onChange={(event)=>Store.setDate(event.target.value)}/>
              </label><br/>
              <label>
              Не присутствовал:
              <input id="gradeInput" type="checkbox"
                     onChange={(event)=>Store.setDate(event.target.value)}/>
              </label><br/>
              <input type="submit" className='button' value="Изменить оценку" />
            </form>
          }

    </React.Fragment>
  );
})

export default Table;
