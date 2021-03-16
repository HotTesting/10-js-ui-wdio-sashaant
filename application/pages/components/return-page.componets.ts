export class ReturnPageComponents {

    get firstNameInput(){
        return $('#input-firstname');
    }

    get lastNameInput(){
        return $('#input-lastname');
    }

    get emailInput(){
        return $('#input-email');
    }

    get telephoneinput(){
        return $('#input-telephone');
    }

    get orderIdInput(){
        return $('#input-order-id');
    }

    get calendarCallButton(){
        return $('i.fa.fa-calendar');
    }

    get currentDateSelector(){
        return $('[class="day active today"]');
    }

    get productNameInput(){
        return $("#input-product");
    }

    get productCodeInput(){
        return $("#input-model");
    }

    get productQuantityInput(){
        return $("#input-quantity");
    }

    returnReasonSelector(selectorName){
        return $(`[name="return_reason_id"][value="${selectorName}"]`)
    }

    get otherDetailsInput(){
        return $("#input-comment");
    }

}