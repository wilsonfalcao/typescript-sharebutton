//Importando Objetos
import ShareButtonAbstract from "./ShareButtonAbstract";
import {IDOMProviders} from "../../provides/IDOMProviders"
import { seachInput } from "../Inputs/searchInput";

//Classe Facebook que herda Classe Função de compartilhamento de botão ShareButton
export class ShareButtonFacebook extends ShareButtonAbstract{

    //Construtor da classe
    constructor(_handleHTML : IDOMProviders){

        //Passsando valores para construir super classe || Classe Pai
        super(_handleHTML);
    }

    //Setando variável link para compartilhamento
    protected linkURLShareProvideDomain(){
        return "https://www.facebook.com/sharer/sharer.php?u=";
    }

    //Função abstract da superclasse, método acionado com bind();
    protected actionObject():void{

        //Instanciando Element Input e recuperando valor no INPUT HTML
        const search = new seachInput();
        
        //Chamando método eventListenet da Classe Document.Events e passando valores por parâmetro
        //Construindo DOM Event com parâmetros passados eventListener("#facebook",event = "click", () = função callback)
        this._handleHTML.eventListener(this.selectorTag,"click",():void =>{

            //Chamando função openLinkWindows da instancia _handleHTML
            this._handleHTML.openLinkWindow(`${this.linkURLShareProvideDomain()}${search.inputElement.value}`)
        });
    }

    //Definindo selector tag da chamada evento
    protected selectorTag = ".btn-facebook";

}