import React from 'react';
import axios from 'axios';

const DeleteItem = ({ id }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(() => {
        alert('Item deleted successfully!');
        window.location.reload();
      })
      .catch(error => {
        console.error('There was an error deleting the item!', error);
      });
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
  );
};

export default DeleteItem;
