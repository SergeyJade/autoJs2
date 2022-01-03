const LoginPage = require('../pageobjects/LoginPage');
const PublicationsPage = require('../pageobjects/PublicationsPage')
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('jadeforest@mail.ru', 'Qwert12345!');
        await expect(PublicationsPage.butAddPublication).toBeExisting();
        // await expect(PublicationsPage.gamburgMenu).toBeExisting();
        await expect(PublicationsPage.h6Publications).toHaveTextContaining(
            'publications');
        await expect(PublicationsPage.gamburgMenu).toBeClickable();
    });
});


