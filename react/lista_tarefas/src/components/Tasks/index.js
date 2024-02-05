import React from 'react';
import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, i) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, i)}
              className="edit"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, i)}
              className="close"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
