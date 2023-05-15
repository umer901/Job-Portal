// import React from 'react'
// import logo from './logo.png';
import styles from './Register.css';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import logo from './logo.png'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const REGISTER_URL = '/register';

const RegisterEmployers = (props) => {
  const userRef = useRef();
  const errRef = useRef();
  
  const [email, setEmail] = useState('');

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(userRef.current){
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        // console.log(user, pwd);
        // setSuccess(true)
        try {
            axios.post('http://localhost:3001/signup',
            {
                email: email,
                name: user,
                password: pwd,
                userType: 'Recruiter'
            
            }    
            
            // JSON.stringify({ user, pwd }),
                // {
                //     headers: { 'Content-Type': 'application/json' },
                //     withCredentials: true
                // }
            ).then((response)=>{     
                console.log(response?.data);
                console.log(response?.accessToken);
                console.log(JSON.stringify(response))
                setSuccess(true);
                //clear state and controlled inputs
                //need value attrib on inputs for this
                setUser('');
                setPwd('');
                setMatchPwd('');
            })
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

  return (
    <>
            {success ? (
                <section>
                    <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                        <h1>Success!</h1>
                        <p>
                            <a style={{color:'blue'}} href="http://localhost:3000/loginemployer">Sign In</a>
                        </p>
                    </div>
                </section>
            ) : (
                <div>
                    <div style={{ display: 'inline-block' }}>
                        <img
                            src={logo}
                            alt="logo19382"
                            className={styles['logo1']}
                            height='200px'
                            style={{ verticalAlign: 'middle' }}
                        />
                        <h1 style={{ display: 'inline-block', marginLeft: '20px', fontSize:'80px' }}>Job Portal</h1>
                        <p style={{ marginTop: '-80px', marginLeft: '250px', fontSize:'40px' }}>Job for everyone</p>
                        <h2 style={{ marginLeft: '640px', fontSize:'20px', top:'28%'}}>Sign up as an Employer:</h2>
                    </div>  
                    <div>
                        <section  className='registersec'>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='email'>
                                    Email:
                                </label>
                                <input 
                                    type="email" 
                                    placeholder=""
                                    onChange={(e)=>setEmail(e.target.value)} 
                                    onFocus={()=>setUserFocus(true)}
                                    onBlur={()=>setUserFocus(false)} 
                                />
                            
                            
                                <label htmlFor='username'>
                                    Organization Name:
                                <span>
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </span> 
                                </label>
                                <input 
                                type="text" 
                                placeholder=""
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e)=>setUser(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby='uidnote'
                                onFocus={()=>setUserFocus(true)}
                                onBlur={()=>setUserFocus(false)}   
                                />
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                4 to 24 characters.<br />
                                                Must begin with a letter.<br />
                                                Letters, numbers, underscores, hyphens allowed.
                                </p>

                            
                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                </label>
                                <input 
                                    type="password"  
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)} 
                                    
                                />
                                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                                <label htmlFor="confirm_pwd">
                                Confirm Password:
                                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                </label>
                                <input 
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)} 
                                placeholder="" 
                                
                                />
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                                <button
                                    disabled={!validName || !validPwd || !validMatch ? true : false} 
                                    // type="button" 
                                    // className={styles["button-1"]} 
                                >
                                    Register
                                </button> 
                                <p>
                                    Already registered?<br />
                                    <span>
                                        {/*put router link here*/}
                                        <a style={{color:'blue'}} href="http://localhost:3000/loginemployer">Sign In</a>
                                    </span>
                                </p>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
  )
}

export default RegisterEmployers; 
