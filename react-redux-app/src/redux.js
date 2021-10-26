import { combineReducers, createStore } from "redux";

export const action1=()=>({
    type: "ACTION1",
});

export const action2=(reducer1)=>({
    type: "ACTION2",
    reducer1
});

//reducers

export const reducer1 = (state={},action)=>{
    switch(action.type){
        case "ACTION1":
            return {};
        case "ACTION2":
            return action.reducer1;
        default:
            return state;
    }
}

export const reducers= combineReducers({
    reducer1,
});

//config Store
export function configStore(initialState={}){
    const store= createStore(reducers,initialState);
    return store;
}

export const store=configStore();

