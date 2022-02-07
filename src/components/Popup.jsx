import React from 'react';
import Store from '../store/Store'
import { observer } from "mobx-react"

const Popup = observer ((props)=>  {

    const [activeItem, setActiveItem] = React.useState(true)

    const change = (event) => {
        event.preventDefault()
        Store.changeGrade()
        setActiveItem(false)
    }



  return (
  <React.Fragment>
    
   
  </React.Fragment>)
})

export default Popup;
