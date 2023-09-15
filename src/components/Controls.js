import {startCounter, pauseCounter, stopCounter}  from '../helpers/counterHelpers';

const Controls = (props) => {
    const {currentValue, root, intervalId} = props;

    return (
        <div className="container d-flex justify-content-center controls">
                <div className="row g-5 controls">
                    <div className="col">
                        <button onClick={() => startCounter(currentValue, root)}>
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                    <div className="col">
                        <button onClick={() => pauseCounter(intervalId)}>
                            <i className="fas fa-pause"></i>
                        </button>
                    </div>
                    <div className="col">
                        <button onClick={() => stopCounter(intervalId, root)}>
                            <i className="fas fa-stop"></i>
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Controls;