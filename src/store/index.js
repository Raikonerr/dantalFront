import {createStore} from "vuex";
import router from "../router/index"
const state={};
const getters={};
const mutations={
    redirect(state,payload){
        router.push({name : payload});
    },
};
const actions={
    redirect({commit},payload){
        commit('redirect',payload.val);
    },


    }

const modules={};
export default createStore({
    state,
    getters,
    mutations,
    actions,
    modules,
});