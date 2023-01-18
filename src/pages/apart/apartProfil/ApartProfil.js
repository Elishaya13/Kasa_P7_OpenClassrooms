import React from 'react';

const ApartProfil = ({ apartName, apartLocation, imageProfil, profileName }) => {
    return (
        <div>
            <h2>Nom appart{apartName}</h2>
            <p>Lieu {apartLocation}</p>
            {/* <img className='avatar' src={imageProfil} alt={profileName}></img> */}
        </div>
    );
};

export default ApartProfil;