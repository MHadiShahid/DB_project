import React,{Fragment, useState} from 'react';
import './App.css';
import logo from '../src/images/Flex.PNG'
import { useNavigate } from "react-router-dom";


export default function App() {
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const [password,setPassword] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleChange1(e) {
    setPassword(e.target.value);
  }

  const handleClick = () => {
    let someCondition = 0;
    if (value==="22k-5018" && password==="123") {
      someCondition=1;
    }
    if (someCondition) {
      navigate('/home');
    }else{
      console.log('Error');
      console.log(value);
      console.log(password);
    }
  };
  


  return (
    <Fragment>
      <div className = "container-fluid">
        <div className="row">
            <div className="col-md-4">
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                <img src={logo} alt=""></img>
                </div>
                <br></br>
                {/* sign in text */}
                <div className="text-center">
                <h1 className="animate-charcter">SIGN UP</h1>
                </div>
                
                   <br></br><br></br>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <form>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Roll No</label>
                              <div className="input-group">
                                <div className="input-group-addon" style={{padding: "10px"}}>
                                <span className="fa fa-user-o"></span> 
                            </div>
                              <input type="text" value={value} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Roll Number i.e (17I-1234)"></input>
                            </div>
                              <small id="emailHelp" className="form-text text-muted">Roll Number i.e (17I-1234)</small>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <div className="input-group">
                                <div className="input-group-addon" style={{padding: "10px"}} >
                                 <span className="fa fa-lock"></span> 
                                </div>
                              <input type="password" value={password} onChange={handleChange1} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                              </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                  Remember Me
                                </label>
                            </div>
                            <br></br><br></br>
                            <div className="text-center">
                            <button onClick={()=>handleClick()} type="submit" className="btn btn-primary" id="SignIn">Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2">
    
                    </div>
                </div>
                
            </div>
            <div className="col-md-8 text-center" id="test" >
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1 className="text-center" style={{color: "white"}}>Welcome to Flex-Student</h1>
                <div className="text-center" style={{color: "white"}}>htmlFor Password related queries contact concerned Academic Officer on <a  style={{color: "white"}} href="Login.html">nu.edu.pk</a></div>
                
            </div>
        </div>
    </div>


    </Fragment>
  );
}


