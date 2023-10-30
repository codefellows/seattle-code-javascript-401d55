import './Results.scss'
import JSONPretty from 'react-json-pretty';

function Results(data) {
    return (
        <section>
            <JSONPretty id="json-pretty" data={ data }></JSONPretty>
        </section>
    )
}

export default Results;