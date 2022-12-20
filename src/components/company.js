import React from "react";

const Mimi = (props) => {
  const list = props.list
  return (
    <div>
      <ul>
        { list.map((item) => {
          return <li key={item.id} > { item.company } </li>
        }) }
      </ul>
    </div>
  )
}

export default Mimi;
