// src/App.js
import React from "react";
import { sum } from "./components/Sum";

function App() {
    return (
        <div>
            <h1>React Codecov Demo</h1>
            <p>Sum of 2 and 3 is: {sum(2, 3)}</p>
        </div>
    );
}

export default App;
