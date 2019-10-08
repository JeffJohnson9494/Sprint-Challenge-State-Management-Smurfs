import {FETCHING_SMURFS_START,
        FETCHING_SMURFS_FAILURE,
        FETCHING_SMURFS_SUCCESS,
        ADDING_SMURF_SUCCESS}from'../actions/index.js';
        
//importing cases and setting the initial State
const initialState={
    smurfs:[],
    isFetching:false,
    error:''
}

//unpacking state in relation to which case gets fired
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCHING_SMURFS_START:return{
            ...state,
            isFetching:true
        }
        case FETCHING_SMURFS_SUCCESS:return{
            ...state,
            smurfs:action.payload.smurfs,
            isFetching:false,
            error:''
        }
        case FETCHING_SMURFS_FAILURE:return{
            ...state,
            isFetching:false,
            error:action.payload.error
        }
        case ADDING_SMURF_SUCCESS:return {
            ...state,
            smurfs: action.payload.data
        }
        default:
            return state
    }
}