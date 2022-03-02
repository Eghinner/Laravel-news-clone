import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Example() {
    const [value, setValue] = useState(0)
    const handleUp = () => {
        setValue(prevCount => prevCount + 1)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">I'm an example component!</div>
                        <span> {value} </span>
                        <button
                            onClick={handleUp}
                        >
                            Up1
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}