import React from 'react';
import logo from '../../img/logo.png'
import './style.css';

export default function Header() {
    return (

        <header >
            <div className='header limita-largura'>
                <img src={logo} className="logo" />
                <nav>
                    <a>PRODUTOS</a>
                    <a>SOBRE</a>
                    <a>CONTATO</a>
                </nav>
            </div>
        </header >

    );
}
