import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  
class App extends React.Component {
render() {
    return (
    <div className="game">
        <div className="game-board">
        <div className="status">Salut laksldbldn,cd team !</div>
        </div>
        <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
    </div>
    );
}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);