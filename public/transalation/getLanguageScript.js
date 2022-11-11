const {
  getArabicScript
} = require('./ar/script')


const {
    getEnglishScript
  } = require('./en/script')
  

const getTargetLanguageScript = (targetLanguage,targetScript)=>{
  switch(targetLanguage){
      case 'ar':
        return getArabicScript(targetScript)
      case 'en':
        return getEnglishScript(targetScript)
      default:
        return getEnglishScript(targetScript)
  }
}
module.exports = {
    getTargetLanguageScript
}