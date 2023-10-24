import { useState } from 'react';

function CountForm({ onSubmit }) {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();
    onSubmit(parseInt(number));
  }

  return (
    <form onSubmit={handleForm}>
      <input data-testid="form-input" type="number" onChange={handleChange} />
      <button type="submit" data-testid="form-button">Submit Me!</button>
    </form>
  )
}

export default CountForm;