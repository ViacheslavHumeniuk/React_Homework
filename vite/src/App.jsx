import React from 'react';
import Collapse from './Collapse.jsx';

const App = () => {
    const text = 'collapse me';

    return (
        <div className="container mt-4">
            <h1>React Collapse Example</h1>
            <Collapse text={text} opened={false} />
        </div>
    );
};

export default App;
