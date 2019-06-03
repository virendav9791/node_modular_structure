const languageService = require("./languageService");
const languageCtrl = {};
languageCtrl.getLanguages = async (req, res) => {
    let languages = await languageService.getAllLanguage();
    res.status(200).json({
        message: "SUCCESS",
        data: languages
    })
}
module.exports = languageCtrl;