import React from "react";
import oculos1 from '../../img/oculos01.png';
import oculos2 from '../../img/oculos02.png';
import oculos3 from '../../img/oculos03.png';
import oculos4 from '../../img/oculos04.png';

import './styles.css';


export default function CardsProdutos() {
    return (
        <div className="cards">
            <div className="card">
                <h2>Óculos de grau</h2>
                <img src={oculos1} />
                <h4>R$500,00</h4>
            </div>
            <div className="card">
                <h2>Óculos transition</h2>
                <img src={oculos2} />
                <h4>R$750,00</h4>
            </div>
            <div className="card">
                <h2>Óculos de sol</h2>
                <img src={oculos3} />
                <h4>R$700,00</h4>
            </div>
            <div className="card">
                <h2>Óculos infantil</h2>
                <img src={oculos4} />
                <h4>R$500,00</h4>
            </div>
        </div>
    );
}