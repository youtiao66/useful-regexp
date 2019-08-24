/**
 * 邮箱校验正则
 * @see https://www.mailboxvalidator.com/resources/articles/acceptable-email-address-syntax-rfc/
 * @see https://stackoverflow.com/questions/3697202/including-a-hyphen-in-a-regex-character-bracket
 */
const REG_EMAIL_RFC = /^[!#$%&'*+/=?^`{|}~\w-]{1,64}(\.[!#$%&'*+/=?^`{|}~\w-]{1,64})*@[a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{1,63})+$/
const REG_EMAIL = /^[\w-]{1,64}(\.[\w-]{1,64})*@[a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{1,63})+$/

export { REG_EMAIL_RFC, REG_EMAIL }
