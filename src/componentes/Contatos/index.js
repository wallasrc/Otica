import React from "react";
import local from '../../img/local.png';
import tel from '../../img/telefone.png';
import email from '../../img/email.png';
import fb from '../../img/fb.png';
import ig from '../../img/ig.png';
import tt from '../../img/tt.png';

import './styles.css';



export default function Contatos() {
    return (
        <section className="contatos">
            <h1>FALE CONOSCO</h1>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
            </p>

            <div className="listas">
                <ul className="lista">
                    <h4>Contato</h4>
                    <div>
                        <li>
                            <img src={local} className="img-contatos" />  <p>Nova Iguaçu, RJ</p>
                        </li>
                        <li>
                            <img src={tel} className="img-contatos" /> <p>  (21) 9999-9999</p>
                        </li>
                        <li>
                            <img src={email} className="img-contatos" /> <p>contato@oticavida.com</p>
                        </li>
                    </div>
                </ul>

                <ul className="lista">
                    <h4>Nossas Redes Sociais</h4>
                    <div>
                        <li>
                            <img src={fb} className="img-contatos" /> <p>/OticaVida</p>
                        </li>
                        <li>
                            <img src={ig} className="img-contatos" /> <p>@oticavidarj</p>
                        </li>
                        <li>
                            <img src={tt} className="img-contatos" /> <p>@oticavidarj</p>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    );
}