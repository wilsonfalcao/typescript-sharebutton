export interface IDOMProviders{
    eventListener(_class:string, _event:string, _fn:any) :void
    openLinkWindow(_linkToOpen:string):void
}