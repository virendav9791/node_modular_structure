const languageModel = require('../../models/languages');
const languageService = {};
languageService.getAllLanguage = (() => {
    return languageModel.find()
})

module.exports = languageService;