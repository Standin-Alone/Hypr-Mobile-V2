export default {
    EMAIL_REGEX:
        {
            pattern:/^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/,
            errorMessage:`Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'.`
        },
        PASSWORD_REGEX:
        {
            pattern:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            errorMessage:`Password must contain 8 letters with combination of at least 1 capital letter,1 small letter, 1 digit and 1 special character.`
        },
        PHONE_NUMBER_REGX:
        {
            pattern:/^[0-9]{7}|[0-9]{13}$/,
            errorMessage:`Please input valid phone number.`
        }
    
}