const LoginPage = require('../pageobjects/LoginPage')
const PublicationPage = require('../pageobjects/PublicationsPage')
const ProblemsPage = require('../pageobjects/ProblemsPage')
const ProblemsCreatePage = require('../pageobjects/ProblemsCreatePage');
const HamburgMenu = require('../pageobjects/HamburgMenu')

describe ('Создаем тикет', () =>{
    it('заходим на страницу с тикетами', async () => {
        await LoginPage.open()
        await LoginPage.login('jadeforest@mail.ru', 'Qwert12345!')
        await expect(PublicationPage.gamburgMenu).toBeClickable()
        await (PublicationPage.gamburgMenu.click())
        await (HamburgMenu.btnProblems.click())
        await expect(ProblemsPage.titleH6Problems).toHaveText('problems')
    })
    it ('открваем страницу создания тикета', async () => {
        await ProblemsPage.btnNewProblem.click()
        await expect(ProblemsCreatePage.inputProblemTitle).toBeExisting()
    })
    it('создаем тикет и проверяем переход на другую страницу', async () => {
        await ProblemsCreatePage.inputProblemTitle.setValue('title problems2')
        await ProblemsCreatePage.inputProblemCompany.click()
        await ProblemsCreatePage.selectCompany.click()
        await ProblemsCreatePage.inputProblemPosition.setValue('777')
        await ProblemsCreatePage.inputProblemContent.setValue('123 content')
        await ProblemsCreatePage.btnProblemSave.click()
        await expect(ProblemsPage.positionInTable).toHaveText('777')
    })
})