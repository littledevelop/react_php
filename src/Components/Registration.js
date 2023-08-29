import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
function Registration() {
    const [inputField,setInputField]=useState({
        name:'',
        email:'',
        phone:'',
    });

    const inputHandle = (e)=>{
        setInputField({...inputField,[e.target.name]:e.target.value});
    }
    
    const submitButton=async()=>{

    }
  return (
    <div className='containe'>
        <div className='row login'>
            <h3 className='heading' style={{marginTop:'20px'}}>Add Registation</h3>
            <div className='col-md-2'></div>
            <div className='col-md-6'>
                <form autoComplete='off' action='/login-user' method='post'>
                <div className='col-md-3'>
                    <label className='form-label'>User Name</label>
                    <input type='text' className='form-control' name='name' value={inputField} onChange={inputHandle} />
                 </div>
                 <div className='col-md-3'>
                    <label className='form-label'> Email</label>
                    <input type='text' autoComplete='off' className='form-control' name='email' value={inputField} onChange={inputHandle} />
                 </div>
                 <div className='col-md-3'>
                    <label className='form-label'>Phone</label>
                    <input type='text' autoComplete='off' className='form-control' name='phone' maxLength="10" value={inputField} onChange={inputHandle} />
                 </div>
                 <div>
                    <button type="button" className='btn btn-primary' onClick={submitButton}>Add User</button>
                    <Link to="/home"><button type='button' id='addUserBtn' className='btn btn-success'>Back</button></Link>
                 </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Registration