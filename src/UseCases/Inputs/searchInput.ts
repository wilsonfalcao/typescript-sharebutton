import Input from "./InputAbstract";

export class seachInput extends Input{

    //Setando tag select do Input
    protected tagSelector(){
        return "search";
    }
}