import React from 'react';
import './styles/Listbox.css'

const Listbox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }

    return (
        <div className="container-lista">
            <div className="lista-boton">
                {
                    props.items.map((item, idx) =>
                    <button key={idx}
                        onClick={clicked}
                        id={item.track.id}>
                            {item.track.name}
                    </button>)
                }
            </div>
        </div>
    );
}

export default Listbox;