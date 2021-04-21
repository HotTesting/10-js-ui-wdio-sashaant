import { ContactUsComponents } from "./components/contact-us.components";


export class ContactUsPage{
    
    contactUsComponents: ContactUsComponents;
    constructor(){
        this.contactUsComponents = new ContactUsComponents();
    }


    open(url: string){
        browser.url(url);
    }

    hasOpened(): boolean{
        return $('#information-contact h1').isDisplayed();
    }

    getPageTitle(): string{
        return $('#information-contact h1').getText();
    }

    fillContactUsFormAndSubmit(contactData: IContactData){

        this.contactUsComponents.yourNameInput.setValue(contactData.yourName);
        this.contactUsComponents.emailAdressInput.setValue(contactData.emailAdress);
        this.contactUsComponents.enquiryUnput.setValue(contactData.enquiry);
        this.contactUsComponents.submitButton.click();

    }


}