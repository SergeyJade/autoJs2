const Page = require('./Page')

class PublicationCreatePage extends Page {

    get gamburgMenu() {
        return $('#nav-bar-toggle')
    }
    get inputTitlePublication () {
        return $('//*[@id="title"]')
    }
    get inputImageLink () {
        return $('//*[@id=\'image\']')
    }
    get inputDescription() {
        return $ ('//*[@id=\'description\']')
    }
    get textareaContent() {
        return $ ('//*[@id="root"]/div/div/div[2]/form/div[4]/div[2]/div/div/textarea')
    }
    get buttonSave () {
        return $ ('//*[@id="root"]/div/div/div[2]/form/div[6]/button[2]')
    }
}
module.exports = new PublicationCreatePage();
