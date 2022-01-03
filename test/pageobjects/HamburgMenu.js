const Page = require('./Page')

class HamburgMenu extends Page
{
    get    btnProblems()
    {
        return $('#problems')
    }
}

module.exports = new HamburgMenu()