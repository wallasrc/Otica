import React from "react";
import Banner from '../Banner';
import Produtos from '../Produtos';
import Sobre from '../Sobre';
import Contatos from '../Contatos';



export default function Content() {
    return (
        <main>
            <Banner />
            <Produtos />
            <Sobre />
            <Contatos />
        </main>
    );
}