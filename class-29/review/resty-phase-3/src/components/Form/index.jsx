import { useState } from 'react';
import './Form.scss'

function Form({ updateReqParams }) {
  let [url, setUrl] = useState('');
  let [method, setMethod] = useState('get');

  const handleUrlInput = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  }

  const handleMethodClick = (e) => {
    e.preventDefault();
    const selectedMethod = e.target.id;
    const parentNode = e.target.parentNode;

    for (let i = 0; i < parentNode.children.length; i++) {
      let childNode = parentNode.children[i];
      if (childNode.id === selectedMethod) {
        childNode.className = "selectedMethod";
      } else {
        childNode.className = "";
      }
    }
    setMethod(selectedMethod);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    updateReqParams({ url, method });
  }

  return (
    <form id='form' onSubmit={handleSubmit}>
      <label >
        <span>URL: </span>
        <input data-testid="form-input" name='url' value={url} type='text' onChange={handleUrlInput} />
        <button data-testid="form-button" type="submit">GO!</button>
      </label>
      <label className="methods">
        <span id="get" onClick={handleMethodClick}>GET</span>
        <span id="post" onClick={handleMethodClick}>POST</span>
        <span id="put" onClick={handleMethodClick}>PUT</span>
        <span id="delete" onClick={handleMethodClick}>DELETE</span>
      </label>
    </form>
  )
}

export default Form;