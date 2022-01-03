const Page = require('./Page')

class PublicationsPage extends Page {

     get gamburgMenu() {
         return $('#nav-bar-toggle')
     }
     get h6Publications() {
         return $('//*[@id="root"]/header/div/h6')

     }
     get butAddPublication() {
         return $('//*[@id="root"]/div/div/div[1]/a')
     }
}
module.exports = new PublicationsPage
