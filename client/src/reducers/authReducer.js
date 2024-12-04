import {FETCH_USER} from "../actions/types";

export default function (state = null, action){

    console.log("Rajat: " ,action);
    switch (action.type){
        case FETCH_USER:
            return action.payload || false;   //in JS if empty string is called false

        default:
            return state;
    }
};