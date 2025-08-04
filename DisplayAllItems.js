import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayAllItems() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      setItems(response.data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch items', err);
      setError('Failed to fetch items. Please try again later.');
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      fetchItems();
    } catch (err) {
      console.error('Failed to delete item', err);
      setError('Failed to delete item. Please try again later.');
    }
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      price: item.price,
      description: item.description
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    if (!editingItem) return;

    try {
      await axios.put(`http://localhost:5000/items/${editingItem.id}`, formData);
      setEditingItem(null);
      fetchItems();
    } catch (err) {
      console.error('Failed to update item', err);
      setError('Failed to update item. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">All Pizza Items</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {items.length > 0 ? (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>Rs.{Number(item.price).toFixed(2)}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {editingItem && (
            <div className="mt-4">
              <h2>Edit Item</h2>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={handleUpdate}
                >
                  Update Item
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}
export default DisplayAllItems;
