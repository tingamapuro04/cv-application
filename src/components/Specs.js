import React from "react";

const Specs = (props) => {
  let list = props.list
  
  return (
    <div>
      <ul>
        { list.map((item) => {
          return <li key={item.id}> {item.institution} </li>
        }) }
      </ul>
    </div>
  )
}

export default Specs
