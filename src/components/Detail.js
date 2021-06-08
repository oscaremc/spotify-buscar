import React from 'react';
import './styles/Detail.css';

const Detail = ({album, artists, name}) => {

    return (
        <div className="container-detalle">
            <div className="container-info" >
                <div className="detalle__img">
                    <img
                        src={album.images[0].url}
                        alt={name}>
                    </img>
                </div>
                <div>
                    <div className="info__nombre">
                        <label htmlFor={name} className="form-label col-sm-12">
                            {name}
                        </label>
                    </div>
                    <div className="info__artista">
                        <label htmlFor={artists[0].name} className="form-label col-sm-12">
                            {artists[0].name}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;