import React, { useState } from 'react';
import classNames from 'classnames';

const Collapse = ({ text, opened = true }) => {
    const [isOpen, setIsOpen] = useState(opened);

    const handleToggle = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <p>
                <a
                    className="btn btn-primary"
                    href="#"
                    role="button"
                    aria-expanded={isOpen}
                    onClick={handleToggle}
                >
                    Link with href
                </a>
            </p>
            <div className={classNames('collapse', { show: isOpen })}>
                <div className="card card-body">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
