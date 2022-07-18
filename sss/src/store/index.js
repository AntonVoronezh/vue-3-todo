import { createStore } from "vuex";

export const store = createStore({
    state: {
        users: [
            {id:1, name: 'aaa', isAdmin: true},
            {id:2, name: 'bbb', isAdmin: false},
            {id:3, name: 'ccc', isAdmin: false},
        ]
    },
    getters: {
        getUsers (state) {
            return state.users
        }
    }
});
