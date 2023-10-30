import { useState } from 'react'; // other hooks, that will allow this to hook into the React API.

// takes in a function that the component want to use on submit.
function useForm(callback) {

  const [values, setValues] = useState({});

  // on input change we do this.
  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name) {
      setValues({...values, [name]: value });
    } else {
      console.log('YOUR INPUT NEEDS A NAME');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    callback({...values});
  }

  return {
    values,
    handleChange,
    handleSubmit
  }
}

export default useForm;