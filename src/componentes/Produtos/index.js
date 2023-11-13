import React from "react";
import CardsProdutos from "../CardsProdutos";
import './styles.css';


export default function Produtos() {
    return (
        <section className="produtos">
            <h1>NOSSOS PRODUTOS</h1>
            <p>Trabalhamos com óculos de grau, óculosde sol, lentes transition nos modelos masculino, feminino e infantil. </p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

            <CardsProdutos />
            <p>Todos os nossos produtos incluem:</p>

            <ul className="lista-produtos">

                <li>Garantia de 1 ano;</li>
                <li>Manutenção preventiva;</li>
                <li>Descontos especiais na compra da segunda unidade;</li>
                <li>Flexibilidade de pagamento.</li>
            </ul>

        </section>
    );
}