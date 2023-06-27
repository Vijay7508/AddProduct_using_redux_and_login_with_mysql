// actions.js
export const INSERT_DATA = 'INSERT_DATA';

export const insertData=(data)=>{
    return{
    type: "INSERT_DATA",
    payload: data
}
};