const verifyEmail = {
    companyName:'ستار لايت',
    emailTitle:"اهلاوسهلا بك في ستار لايت",
    welcome:"السلام عليكم",
    thanking:"شكرا لانضمامك لنا ! 👋",
    firsParagraph:"يرجى اتمام عملية تأكيد البريد الإلكتروني الخاص بك عن طريق النقر على الزر ادناه ، لتنظم رسمياً إلى عائلتنا ، وحتى تبدأ في استكشاف خدماتنا وعروض عملنا.",
    secondParagraph:"إذا لم تكن قد سجّلت مع ستار لايت فقم بتجاهل هذا البريد الإلكتروني أو يمكنك التواصل معنا على البريد التالي : ",
    buttonContent:"تأكيد البريد الإلكتروني ",
    teamThanking:"شكرا لك ، \n فريق ستار لايت",
    ourServiceAndPrivacy:'استخدام خدماتنا وموقعنا وفقاً ل',
    termsOfUse:'شروط الاستخدام',
    and:'و',
    privacyPolicy:'سياسات الخصوصية'
}

const resetPassword = {
    companyName:'ستار لايت',
    emailTitle:"اعادة تعيين كلمة السر",
    welcome:"السلام عليكم",
    thanking:"شكرا لانضمامك لنا ! 👋",
    firsParagraph:"تلقينا طلب اعادة تعيين كلمة السر من",
    account:'للحساب',
    secondParagraph:"انقر على الزر اسفله لتعيين كلمة سر جديدة لحسابك .",
    buttonContent:"اعادة تعيين كلمة السر",
    teamThanking:"شكرا لك ، \n فريق ستار لايت",
    note:'تنبيه',
    noteContent:'هذا الرابط صالح لساعة واحد من وقت طلب تعيين كلمة السر ، والذي يمكن استخدامه مره واحد .',
    ourServiceAndPrivacy:'استخدام خدماتنا وموقعنا وفقاً ل',
    termsOfUse:'شروط الاستخدام',
    and:'و',
    privacyPolicy:'سياسات الخصوصية'
}




const getArabicScript = (target)=>{
    switch(target){
        case 'verify':
            return verifyEmail
        case 'resetPassword':
            return resetPassword
    }
    // if(target=='verify'){
    //     return verifyEmail
    // }
}

module.exports = {
    getArabicScript
}