import './Form.scss'

function Form({ dispatchReqParams }) {

    const handleMethodClick = (e) => {
      e.preventDefault();
      const selectedMethod = e.target.id;
      const parentNode = e.target.parentNode;
      
      for (let i=0; i< parentNode.children.length; i++) {
        let childNode = parentNode.children[i];
        if ( childNode.id === selectedMethod ) {
          childNode.className = "selectedMethod";
        } else {
          childNode.className = "";
        }
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const urlInput = document.getElementById('url').value;
      const selectedMethod = document.getElementsByClassName('selectedMethod')[0].id;

      dispatchReqParams({
        type: 'ADD_URL',
        payload: urlInput
      });
      dispatchReqParams({
        type: 'ADD_METHOD',
        payload: selectedMethod
      })
    }

    return (
        <form id='form' onSubmit={ handleSubmit }>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' id="url" type='text' />
          <button data-testid="form-button" type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={ handleMethodClick }>GET</span>
          <span id="post" onClick={ handleMethodClick }>POST</span>
          <span id="put" onClick={ handleMethodClick }>PUT</span>
          <span id="delete" onClick={ handleMethodClick }>DELETE</span>
        </label>
      </form>
    )
}

export default Form;