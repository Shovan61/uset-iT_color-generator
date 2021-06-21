import React, { useState } from 'react';
import NavBar from './NavBar';
import Values from 'values.js';
import ColorLists from './ColorLists';

function App() {
    const [color, setcolor] = useState(new Values('#f15025'));
    const [setShade, setsetShade] = useState(10);
    const allColor = color.all(setShade).slice(1, 10);

    const handleSetShade = (newVal) => {
        setsetShade(newVal);
    };

    return (
        <div style={{ height: '100vh' }}>
            {/* NavBar */}
            <NavBar
                style={{ height: '10%' }}
                setcolor={setcolor}
                handleSetShade={handleSetShade}
            />
            {/* Color Boxes */}
            <ColorLists style={{ height: '90%' }} data={allColor} />
        </div>
    );
}

export default App;
