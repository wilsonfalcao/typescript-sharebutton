
import {IDOMProviders} from "./IDOMProviders";

//Criando alias para funções callback
type FunctionCallback = () => any;

//Classe de eventos
export class documentEventListerner implements IDOMProviders{

    private elements:NodeListOf<HTMLSelectElement>

    //Ouvindo eventos por selector tag all
    public eventListener(_class:string, _event:string, _fn:FunctionCallback) :void {

        this.elements = document.querySelectorAll(_class);
        for(const _element of this.elements){
            _element.addEventListener(_event,_fn);
        }

    }

    //Abrindo novas abas no browser
    public openLinkWindow(_linkToOpen:string):void{
        window.open(_linkToOpen);
    }
}