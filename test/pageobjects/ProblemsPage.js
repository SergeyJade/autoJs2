const Page = require('../pageobjects/Page')

class ProblemsPage extends Page {
    get titleH6Problems (){
        return $('//*[@id="root"]/header/div/h6')
    }
    get btnNewProblem() {
        return $ ('//*[@id="root"]/div/div[1]/a/button')
    }
    get positionInTable() {
        return $ ('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div/div/div/div[1]/div[2]')
    }
}
module.exports = new ProblemsPage()