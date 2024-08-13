import React, { useState } from 'react';
import classNames from 'classnames';

const BtnGroup = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={classNames('btn', 'btn-secondary', 'left', {
                    'active': activeButton === 'left'
                })}
                onClick={() => handleClick('left')}
            >
                Left
            </button>
            <button
                type="button"
                className={classNames('btn', 'btn-secondary', 'right', {
                    'active': activeButton === 'right'
                })}
                onClick={() => handleClick('right')}
            >
                Right
            </button>
        </div>
    );
};

export default BtnGroup;
