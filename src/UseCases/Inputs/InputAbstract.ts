export default abstract class Input{

    protected abstract tagSelector():string;

    constructor(){
        this.inputElement = (document.getElementById(this.tagSelector()) as HTMLInputElement);
    }

    public inputElement: HTMLInputElement;
}