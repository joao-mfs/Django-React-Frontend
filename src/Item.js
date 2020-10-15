import React from 'react';

export default function Item(props){
    const status = props.status;
    return <li>{props.name} <p>Status: {status ? <div>Finalizado</div> : <div>Nao Finalizado</div> }</p></li>
}