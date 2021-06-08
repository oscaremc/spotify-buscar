import React from 'react';
import './styles/Dropdown.css';

const Dropdown = props => {

    const dropdownChanged = e => {
        props.changed(e.target.value);

    }

    return (
        <div className="container-carga">
            <label className="carga__label">{props.label}</label>
            <select value={props.selectedValue} onChange={dropdownChanged}>
                <option key={0}>Select...</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;