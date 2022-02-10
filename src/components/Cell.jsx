import React from 'react';
import Store from '../store/Store'
import { observer } from "mobx-react"

const Cell = observer ((props)=>  {

    const [activeItem, setActiveItem] = React.useState(true)
    const [popup, setPopup] = React.useState(false);
    const formRef = React.useRef(null)

    React.useEffect(()=> {
      document.body.addEventListener('click', handleOutsideClick) 
    }, [])

    const handleOutsideClick = (e) => {
      if(!e.path.includes(formRef.current)) {
        closePopup()
      }
    }

    const openPopup = () => {
      setActiveItem({studentId: props.item.id, date: props.i.date})
      setPopup(true)
    }

    const changeGrade = (event) => {
      event.preventDefault()
      Store.changeGrade()
      closePopup()
    }

    const closePopup = () => {
      setPopup(false)
      setActiveItem({})
    }

  return (
    <React.Fragment>
      <td ref={formRef} className={activeItem.studentId === props.item.id && activeItem.date === props.i.date 
          ? 'policies__table-cell active':'policies__table-cell'}>
        
        <div  className="cell__div" onClick={()=> {openPopup();Store.setDay(props.i, props.item.FIO)}}>{props.i.grade}</div>

        {popup && 
          <form id="form"
                onSubmit={(event)=>changeGrade(event)}>

            <p className="btn" onClick={()=>closePopup()}>X</p>
            <h4>ФИО - {Store.day.FIO}</h4>
            <h4>Дата - {Store.day.date}</h4>
            <label>
            Оценка:
            <input id="gradeInput" type="number" required
                  min={2} max={5}
                  value={Store.day.grade}
                  onChange={(event)=>Store.setGrade(event.target.value)}/>      
            </label>
            <label>
            Не присутствовал:
            <input id="gradeInput" type="checkbox"
                  onChange={(event)=>console.log(event.target.value)}/>
            </label><br/>
            <input type="submit" className='button' value="Изменить оценку" />
          </form>
        } 
      </td>
    </React.Fragment>
  )
})

export default Cell;
