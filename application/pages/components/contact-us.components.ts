export class ContactUsComponents {
  
  get yourNameInput() {
    return $("#input-name");
  }
  get emailAdressInput() {
    return $("#input-email");
  }
  get enquiryUnput() {
    return $("#input-enquiry");
  }
  get contactFormTitle() {
    return $("legend");
  }
  get submitButton() {
    return $('[value="Submit"]');
  }
  get continueButton() {
    return $("a=Continue");
  }
}
