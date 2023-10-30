
function History({ history, dispatchHistoryChange }) {

    const handleClick = (e) => {
        e.preventDefault();
        const selectedIdx = e.target.id;

        dispatchHistoryChange({
            type: 'ADD_DATA',
            payload: history[selectedIdx]
        })
    }

    let historyElements = null;

    if ( history ) {
        historyElements = history.map((result, idx) => {
            return <li key={ idx } id={ idx } onClick={ handleClick }>({ result.method.toUpperCase() }) { result.url }</li>
        })
    }
    
    return (
        <>
            <h2>History</h2>
            <ul id="history-list">
                { historyElements ? historyElements : '' }
            </ul>
        </>
    )
}

export default History;