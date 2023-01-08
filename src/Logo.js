import React from 'react';

function Logo(props) {
    return <img src={props.src} className={props.className} alt={props.alt} />;
}

export default Logo;