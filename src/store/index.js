import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state: {
        saltKey: "S<edjCEcma!0d",
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        logOut(state) {
            state.user = null
        },
        uptadeLikes(state, bookmarkIds) {
            state.user.likes = bookmarkIds;
        },
        setBookmark(state, bookmarkIds) {
            state.user.bookmarks = bookmarkIds
        }
    },
    getters: {
        _isAuthenticated: state => state.user != null,
        _currentUser(state) {
            const user = state.user
            delete user?.password
            return user
        },
        _userLikes: state => state.user?.likes || [],
        _userBookmarks: state => state.user?.bookmarks || [],
        _currentUserId: state => state?.user?.id,
        _saltKey: state => state.saltKey
    },
    plugins: [createPersistedState({
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
        },
    }),],
});