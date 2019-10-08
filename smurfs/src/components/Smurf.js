import React,{useState}from 'react'
import './Smurf.css'
import { connect } from 'react-redux'
import {removeSmurf}from'../actions/index.js';

const Smurf=(props)=>{
    //trying to delete a smurf the same way i added a smurf but its not working i will take another route
    const Smurfs=(e)=>{
        let name=props.smurf.name
        remSmurf({...delSmurf,[name]:e.target.value})
    }
    const removeSmurf = (e) => {
     props.removeSmurf(delSmurf)
    }
    const [delSmurf,remSmurf]=useState({
        name:'',
        age:'',
        height:''
    })
    return(
        //smurf information displayed through props
        <div className="SmurfName">
            <h2>Smurf Name: {props.smurf.name}</h2>
            <h3>Smurfs Age: {props.smurf.age} Years</h3>
            <h3>Smurfs Height:{props.smurf.height} Centimeters</h3>
            <button type="submit" onClick={removeSmurf}>Delete Smurf</button>
        </div>
    )
}
export default connect(null,{removeSmurf})(Smurf)