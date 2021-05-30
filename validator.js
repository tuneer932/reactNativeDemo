
export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || email.length <= 0) return false;
    if (!re.test(String(email).toLowerCase())) return false;
    return true;
}

export const validatePassword = (password) => {
    const re = /^[a-zA-Z0-9]{6,}$/;
    if (!password || password.length <= 0) return false;
    if (!re.test(password)) return false;
    return true;
};
