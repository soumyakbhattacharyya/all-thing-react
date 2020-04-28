import React from 'react';
import '../App.css';

// function onToggle(e,props){  
//   const idOfSelectedCheckbox = e.target.getAttribute("id")
//   const {handleChange} = props.handleChange;
//   console.log(idOfSelectedCheckbox + " checkbox has been clicked")
//   console.log(props.handleChange)
//   console.log(handleChange(idOfSelectedCheckbox))
// }

function TodoComponent(props) {
  console.log('props are following ' + props)
  return (
    <div className="todo-item">
      <table>
        <tbody>
          <tr>
            <td>
              <input type="checkbox"
                id={props.id}
                value={props.description}
                checked={props.done}
                onChange={(event) => props.handleChange(props.id)}
              ></input>
            </td>
            <td>
              <p>{props.description}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoComponent;
