import React, {useState} from 'react';
import {render} from 'react-dom';

import Component from '../../src';

function App() {
    const items = [
        {label: 'Cat'},
        {label: 'Dog'},
        {label: 'Rabbit'},
        {label: 'Parrot'},
    ];

    const activeItemController = useState(items[0]); // bare in mind that controllers override initials
    const openController = useState(false);
    const [, setActiveItem] = activeItemController;
    const [, setOpen] = openController;

    return (
        <div style={{margin: '50px auto', maxWidth: 500}}>
            <h1>forms-filtering-dropdown component demo</h1>

            <p>
                <button onClick={() => setActiveItem(items[2])}>Set Rabbit</button>
                <button onClick={() => setOpen(true)}>Open dropdown</button>
            </p>

            <Component
                items={items}
                controllers={{
                    active: activeItemController,
                    open: openController,
                }}
            />
        </div>
    );
}

render(<App/>, document.getElementById('root'));