import React, { useState } from 'react';
import './Text.css'; 
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
const TextInput = (props) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleBlur = () => {
    if (props.optionValue === 'true') { // Check if optionValue is "true"
      const validationSchema = Yup.string()
        .required('Required field') // Field is required
        .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed') // Only letters and spaces are allowed
        .min(7, 'Field length must be at least 7 characters'); // Field length must be at least 7 characters
      validationSchema
        .validate(value) // Validate the input value against the validation schema
        .then(() => {
          setError(''); // No validation errors, clear the error message
        })
        .catch((err) => {
          setError(err.message); // Validation error occurred, set the error message
        });
    }
  };
  return (
    <div className="form-group" key={props.id}>
     <label className="mb-4" htmlFor={props.label}>
        {props.label}:
    </label>
    <input
      type="text"
      className="form-control p-0"
      id={props.id}
      placeholder={props.placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    </div>
  );
};
export default TextInput;




 

