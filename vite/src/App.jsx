import React from "react";
import Card from "./components/Card.jsx";
const App = () => {
    return (
        <div>
            <Card title="Title Only " />
            <Card text="Text Only " />
            <Card title="Title and " text=" Text " />
        </div>
    );
};
export default App;