import React from 'react';

const Alert = ({ text, type }) => {
    const alertTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const alertType = alertTypes.includes(type) ? type : 'primary';

    return (
        <div className={`alert alert-${alertType}`} role="alert">
            {text}
        </div>
    );
};

export default Alert;
