import React,{useEffect} from'react';
import Smurf from'./Smurf.js';
import {connect}from'react-redux';
import{fetchingSmurfs}from'../actions/index.js';

const SmurfList=(props)=>{

    

    return(
        //mapping over props.smurfs and putting the smurf data into my smurf component...smurf
        <div className="WholeList">
            
            {props.smurfs.map(smurf=>{
                return<Smurf smurf={smurf}/>
            })}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps,{fetchingSmurfs})(SmurfList);