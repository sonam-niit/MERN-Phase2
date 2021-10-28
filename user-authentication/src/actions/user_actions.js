import { userConstants } from "../constants";
import { alertAction } from "./alert_action";

export const userActions={
    login,
    logout,
    getAll
}

function login(username,password){
    return dispatch =>{
        dispatch(request({username}));

        userService.login(username,password)
        .then(
            user=>{
                dispatch(success(user));
                history.push('/');
            },
            error=>{
                dispatch(failure(error));
                dispatch(alertAction.error(error));
            }
        );
    };
    function request(user){
        return {type:userConstants.LOGIN_REQUEST,user}
    }
    function failure(user){
        return {type:userConstants.LOGIN_FAILUER,user}
    }
    function success(user){
        return {type:userConstants.LOGIN_SUCCESSR,user}
    }
}

function logout(){
    userService.logout();
    return {type: userConstants.LOGOUT}
}

function getAll(){
    return dispatch=>{
        dispatch(request());

        userService.getAll()
        .then(
            users=>dispatch(success(users)),
            error=>dispatch(failure(error))
        )
    }

    function request(user){
        return {type:userConstants.GETALL_REQUEST,user}
    }
    function failure(user){
        return {type:userConstants.GETALL_FAILURE,user}
    }
    function success(user){
        return {type:userConstants.GETALL_SUCCESS,user}
    }

}