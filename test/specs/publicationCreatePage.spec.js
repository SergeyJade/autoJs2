const LoginPage = require('../pageobjects/LoginPage')
const PublicationPage = require('../pageobjects/PublicationsPage')
const PublicationCreatePage = require('../pageobjects/PublicationCreatePage')

describe('Open publications create', () =>{
    it('check open publication page', async () =>{
       await LoginPage.open();
       await LoginPage.login('jadeforest@mail.ru', 'Qwert12345!')
       await expect(PublicationPage.butAddPublication).toBeClickable();
    })
    it( 'create publication', async () => {
       await PublicationPage.butAddPublication.click()
       await PublicationCreatePage.inputTitlePublication.setValue('Test title')
       await PublicationCreatePage.inputImageLink.setValue('http//google.com')
       await PublicationCreatePage.inputDescription.setValue('test description')
       await PublicationCreatePage.textareaContent.setValue('content')
       await PublicationCreatePage.buttonSave.click()
       await expect(PublicationPage.butAddPublication).toBeClickable();

    })
})