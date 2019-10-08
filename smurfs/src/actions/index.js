import axios from 'axios';
//adding cases
export const ADDING_SMURF_START ='ADDING_SMURF_START';
export const ADDING_SMURF_FAILURE='ADDING_SMURF_FAILURE';
export const ADDING_SMURF_SUCCESS ='ADDING_SMURF_SUCCESS';
//fetching cases
export const FETCHING_SMURFS_START='FETCHING_SMURFS_START';
export const FETCHING_SMURFS_FAILURE='FETCHING_SMURFS_FAILURE';
export const FETCHING_SMURFS_SUCCESS='FETCHING_SMURFS_SUCCESS';
//removing case
export const REMOVING_SMURF_SUCCESS='REMOVING_SMURF_SUCCESS';

//fetching the data with axios.get
export const fetchingSmurfs = () => dispatch => {
    dispatch({type: FETCHING_SMURFS_START})
    axios.get("http://localhost:3333/smurfs").then(res => {
            console.log(res)
            dispatch({
                type: FETCHING_SMURFS_SUCCESS,
                payload: res
                
            })
        }).catch(err => console.log(err))
}
//add smurf using axios.post
export const addSmurf = (smurf) => dispatch => {
    axios.post("http://localhost:3333/smurfs", {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height 
        }).then(res => {
            console.log(res)
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: res
            })
        }).catch(err => console.log(err))

}
//remove smurf using axios.delet*i need to look more into this***
export const removeSmurf=(smurf)=>dispatch=>{
    axios.delete('http://localhost:3333/smurfs',{
        name:smurf.name,
        age:smurf.age,
        height:smurf.height
    }).then(res=>{
        dispatch({
            type:REMOVING_SMURF_SUCCESS,
            payload:res
        })
    }).catch(err=>console.log(err))
}