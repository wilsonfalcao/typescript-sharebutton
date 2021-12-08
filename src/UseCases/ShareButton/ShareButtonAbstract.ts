//Importando abstração da classe documentEventListerner
import {IDOMProviders} from "../../provides/IDOMProviders"

//Classe abstrata que será extendida para todos objetos Domínio ShareButton
export default abstract class{

    //Propriedade de selector de tag (name, id or class)
    protected abstract selectorTag :string;

    //Construtor da classe
    constructor(protected _handleHTML : IDOMProviders){}

    //Propriedade do link para compartilhamento do Domínio
    protected abstract linkURLShareProvideDomain() :string;

    //Função de ação da classe
    protected abstract actionObject(): void;

    //Função de compartilhamento
    public bind(): void{

        //Chamando função actionObject() do classe filho.
        this.actionObject();
    }
}