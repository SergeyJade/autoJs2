const Page = require('./Page')

class ProblemsCreatePage extends Page {
    get inputProblemTitle() {
        return $('//*[@id="title"]')
    }
    get inputProblemCompany() {
        return $('//*[@id="company"]')
    }
    get inputProblemPosition() {
        return $('//*[@id="position"]')
    }
    get inputProblemContent() {
        return $('//*[@id="root"]/div/div/div[2]/form/div[4]/div[2]/div/div/textarea')
    }
    get btnProblemSave() {
        return $('//*[@id="root"]/div/div/div[2]/form/div[6]/button[2]')
    }
    get selectCompany() {
        return $('//*[@id="company-option-1"]')
    }
}

module.exports = new ProblemsCreatePage()