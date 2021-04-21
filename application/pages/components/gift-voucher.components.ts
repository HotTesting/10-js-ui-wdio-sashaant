export class GiftVoucherComponents {
  get recipientsNameInput() {
    return $("#input-to-name");
  }
  get recipientsEmailInput() {
    return $("#input-to-email");
  }
  get yourNameInput() {
    return $("#input-from-name");
  }
  get yourEmailInput() {
    return $("#input-from-email");
  }
  
  reasonRadioselector(selectorName) {
    return $(`//input[@name="voucher_theme_id" and @value="${selectorName}"]`).click();
  }
  get messageInput() {
    return $("#input-message");
  }
  get giftAmountInput() {
    return $("#input-amount");
  }
  get acceptContiotionsCheckbox() {
    return $('[name="agree"]');
  }
  get continueButton() {
    return $('[value="Continue"]');
  }
  get successPurchaseTitleMessage() {
    return "Purchase a Gift Certificate";
  }
}
