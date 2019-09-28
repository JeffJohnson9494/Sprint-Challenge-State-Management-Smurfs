import React, {useState} from "react";
import {connect} from "react-redux";
import {addSmurf} from "../actions/index.js";
import './SmurfForm.css';

const SmurfForm = (props) => {
    //adding a new smurf to the list
    const handleChanges = (e) => {
        let name = e.target.name;

        setNewSmurf({ ...newSmurf, [name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    
//smurf form itself
    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}></input>
                <input name="age" type="text" placeholder="age" onChange={handleChanges}></input>
                <input name="height" type="text" placeholder="height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Add New Smurf</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(SmurfForm)