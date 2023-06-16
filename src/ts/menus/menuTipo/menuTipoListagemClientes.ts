import Menu from "../../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Listar clientes titulares`)
        console.log(`| 2 - Listar todos os dependentes de um cliente titular específico`)
        console.log(`| 3 - Listar o titular de um cliente dependente específico`)
        console.log(`----------------------`)
    }
}