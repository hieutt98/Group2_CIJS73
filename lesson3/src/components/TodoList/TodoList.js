import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './TodoList.css'

TodoList.propTypes = {
    todos: PropTypes.array,
};

TodoList.defaultProps = {
    todos: [],
}

function TodoList(props) {

    const { todos } = props;

    return (
        <>

            <div className="todo-list">
                <div>
                    <input type="text" placeholder="Enter your task here ..." />
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <input type="radio"
                                name="check-box"
                            />
                            <span>{todo.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;