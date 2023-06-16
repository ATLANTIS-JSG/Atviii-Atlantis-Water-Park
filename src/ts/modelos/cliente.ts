import Endereco from "./endereco"
import Acomodacao from "./acomodacao";
import Documento from "./documento"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private acomodacao!: Acomodacao | undefined;
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente
    

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() { 
        return this.nome 
    }

    public get NomeSocial() { 
        return this.nomeSocial 
    }

    public get DataNascimento() { 
        return this.dataNascimento 
    }

    public get DataCadastro() { 
        return this.dataCadastro 
    }

    public get Acomodacao(): Acomodacao | undefined {
        return this.acomodacao;
    }

    public get Endereco() { 
        return this.endereco 
    }

    public get Telefones() { 
        return this.telefones
    }

    public get Documentos() { 
        return this.documentos 
    }

    public get Dependentes() { 
        return this.dependentes 
    }

    public get Titular() { 
        return this.titular 
    }

    public set Nome(nome: string) {
        this.nome = nome;
    }

    public set NomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial;
    }

    public set DataNascimento(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }

    public set Acomodacao(value: Acomodacao | undefined) {
        this.acomodacao = value;
    }

    public set Endereco(endereco: Endereco) {
        this.endereco = endereco;
    }

    public set Telefones(telefone: Telefone[]) {
        this.telefones = telefone;
    }
    
    public set Documentos(documento: Documento[]) {
        this.documentos = documento;
    }
}