import { UPDATE_EMAIL, UPDATE_NAME } from "./actionTypes";

export const updateName = (data)=>({
    type:UPDATE_NAME,
    payload: data
})

export const updateEmail = (data)=>({
    type:UPDATE_EMAIL,
    payload: data
})