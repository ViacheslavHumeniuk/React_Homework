import React from 'react';
import Carousel from './Carousel';

const imagePaths = [
    '/images/first.jpeg',
    '/images/second.jpeg',
    '/images/third.jpeg',
];

function App() {
    return (
        <div>
            <h1>Carousel Example</h1>
            <Carousel images={imagePaths} />
        </div>
    );
}

export default App;
