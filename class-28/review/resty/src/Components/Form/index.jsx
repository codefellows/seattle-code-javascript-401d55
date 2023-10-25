import React, { useState } from 'react';

import './Form.scss';

const Form = ({ handleApiCall }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    handleApiCall({ method, url });
    setLoading(false);
  }

  return (
      <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={() => setMethod('GET')} className={method === 'GET' ? 'selected-method' : ''}>GET</span>
          <span id="post" onClick={() => setMethod('POST')} className={method === 'POST' ? 'selected-method' : ''}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')} className={method === 'PUT' ? 'selected-method' : ''}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')} className={method === 'DELETE' ? 'selected-method' : ''}>DELETE</span>
        </label>
        </form>
        {loading && 'I am loading'}
      </>
    );
}

export default Form;