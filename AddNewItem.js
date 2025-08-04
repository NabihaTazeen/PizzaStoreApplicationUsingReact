import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  price: Yup.number().required('Required').positive('Must be positive'),
  description: Yup.string().required('Required'),
});

const AddNewItem = () => {
  const handleSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:5000/items', values)
      .then(response => {
        alert('Item added successfully!');
        resetForm();
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
      });
  };

  return (
    <div className="container">
      <h1>Add New Item</h1>
      <Formik
        initialValues={{ name: '', price: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field as="textarea" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Add Item</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddNewItem;
