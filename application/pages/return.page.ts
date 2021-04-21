import { ReturnPageComponents } from "./components/return-page.componets";

export class ReturnPage {
    
    pageReturnComponents: ReturnPageComponents;
    constructor(){
        this.pageReturnComponents = new ReturnPageComponents();
    }

    open(url: string){
        browser.url(url);
    }

    isOpened() :boolean {
        return $('#content h1').isDisplayed();
    }

    fillReturnForm(fillData: IProductReturn){

        this.pageReturnComponents.firstNameInput.setValue(fillData.firstName);
        this.pageReturnComponents.lastNameInput.setValue(fillData.lastName);
        this.pageReturnComponents.emailInput.setValue(fillData.email);
        this.pageReturnComponents.telephoneinput.setValue(fillData.telephone);
        this.pageReturnComponents.orderIdInput.setValue(fillData.orderId);
        this.pageReturnComponents.calendarCallButton.click();
        expect(this.pageReturnComponents.calendarCallButton).toBeDisplayed({message: 'Current date selector is not available'});
        this.pageReturnComponents.currentDateSelector.click();
        this.pageReturnComponents.productNameInput.setValue(fillData.productName);
        this.pageReturnComponents.productCodeInput.setValue(fillData.productCode);
        this.pageReturnComponents.productQuantityInput.setValue(fillData.quantity);
        this.pageReturnComponents.returnReasonSelector(fillData.returnReason).click();
        this.pageReturnComponents.otherDetailsInput.setValue(fillData.otherDetails);
       
    }

    submitReturnForm() {
        const submitButton = $('[value="Submit"]');
        expect(submitButton).toBeVisible({message: 'button is not visible on the ReturnPage'});
        submitButton.click();
    }
    
}