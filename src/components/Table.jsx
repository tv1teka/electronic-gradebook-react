import React from 'react';
import Store from '../store/Store'
import Cell from './Cell';
import { observer } from "mobx-react"

const Table = observer (()=> {
    
  return (
    <React.Fragment>
        <table className='policies__table-body'>
            <tbody>
                <tr>
                    <th className="policies__table-cell">№</th>
                    <th className="policies__table-cell">ФИО студента</th>
                    {Store.Dates.map(date=> 
                        <th className="policies__table-cell" key={date}>{date}</th>
                    )}
                </tr>
                {Store.Students.map((item, index)=>
                    <tr key={item.id}>
                    <td className="policies__table-cell">{index + 1}</td>
                    <td className="policies__table-cell">{item.FIO}</td>
                    {item.Data.map((i) => 
                        <Cell item={item} i={i} key={i.date}/>
                    )}
                    </tr>
                )}
            </tbody>
        </table>
    </React.Fragment>
  );
})

export default Table;
