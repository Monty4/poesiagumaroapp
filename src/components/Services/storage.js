const storage = {

    getToken() {
        return sessionStorage.getItem('token')
    },

    setToken(value) {
        return sessionStorage.setItem('token', value)
    },

    removeToken() {
        return sessionStorage.removeItem('token')
    },

    setUserId(value) {
        return sessionStorage.setItem('userId', value)
    },

    getUserId() {
        return sessionStorage.getItem('userId')
    },

    setUsername(value) {
        return sessionStorage.setItem('username', value)
    },

    getUsername() {
        return sessionStorage.getItem('username')
    },

    setUserType(value) {
        return sessionStorage.setItem('type', value)
    },

    getUserType() {
        return sessionStorage.getItem('type')
    }
}

export default storage