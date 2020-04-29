import React from 'react';
import '../App.css';

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
              {props.done ? <p><s>{props.description}</s></p> : <p>{props.description}</p>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoComponent;
