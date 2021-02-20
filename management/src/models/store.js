import {observable, computed, action} from 'mobx';

import { makeObservable} from "mobx";
class loginStore {
    @observable registerVisible;
    constructor() {
        makeObservable(this)
        this.registerVisible = false;
    }

    @action.bound
    registerClick = (flag) => {
        this.registerVisible = flag;
        console.log(this.registerVisible);
    }
}

// const loginStore = ;
export default new loginStore()