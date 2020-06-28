import axios from 'axios';
const url = 'api/sidebar';


const state = {
    sidebarList: []
}

const getters = {
    getSidebar: (state, payload) => { return state.sidebarList }
}

const actions = {
    async fetchSidebar({ commit }, payload) {
        console.log('we are in the action for getting the sidebar ', payload);
        const response = await axios.post(url, payload)
        console.log('this is the response for getting the sidebar', response.data);
        commit('setSidebar', response.data);
    }
}

const mutations = {
    setSidebar: (state, result) => {
        console.log('this is the sidebar that we recieved ', result.sidebar);
        state.sidebarList = result.sidebar
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}