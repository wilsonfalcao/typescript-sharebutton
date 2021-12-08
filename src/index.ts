import {ShareButtonFacebook} from "./UseCases/ShareButton/ShareButtonFacebook";
import { ShareButtonLinkedin } from "./UseCases/ShareButton/ShareButtonLinkedin";
import { ShareButtonPinterest } from "./UseCases/ShareButton/ShareButtonPinterest";
import {documentEventListerner} from "./provides/documentEventListerner";

const Events = new documentEventListerner();
const Facebook = new ShareButtonFacebook(Events).bind();
const Linkedin = new ShareButtonLinkedin(Events).bind();
const Pinterest = new ShareButtonPinterest(Events).bind();