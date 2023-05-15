import React from 'react'
import logo from './logo.png';
import styles from './sign-up-page.module.css';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const SignUpPage = (props) => {
  const userRef = useRef();
  const errRef = useRef();

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


  return (
    <section>
      <img
          alt = "logo not loading"
          src={logo}
          className={styles['logo1']}
          />
      <form>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          {/* <div className={styles['menu']}>
            <span className={styles['text']}>
              <span>For job seekers</span>
            </span>
            <span className={styles['text02']}>
              <span>For employers</span>
            </span>
            <div className={styles['new-york']}>
              <span className={styles['text04']}>
                <span>Lahore</span>
              </span>
              <img
                src="/playground_assets/line11081-zb5.svg"
                alt="Line11081"
                className={styles['line1']}
              />
            </div>
          </div>
          <img
            src="/playground_assets/logo11081-ieco-200h.png"
            alt="logo11081"
            className={styles['logo1']}
          />
          <img
            src="/playground_assets/rectangle1081-wsl-800w.png"
            alt="Rectangle1081"
            className={styles['rectangle']}
          />
          <img
            src="/playground_assets/rectangle1081-la7j-700h.png"
            alt="Rectangle1081"
            className={styles['rectangle1']}
          /> */}
          
          {/* <span>Register</span> */}
            {/* <span className={styles['text08']}> */}

              {/* <label htmlFor="username">Email Address</label> */}
              {/* <input value={username} name="username" id="username" placeholder="ful name" /> */}
              <label htmlFor='email'>Email:</label>
              <input type="text" placeholder="" className={styles["textbar"]} />
           
          
            <label htmlFor='username'>
              Username:
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
              className={styles["textbar"]}  
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
                className={styles["textbar"]} 
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
              className={styles["textbar"]} 
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>
          {/* <div className={styles['frame18']}>
            <span className={styles['text16']}>
            <input type="text" placeholder="Location" className={styles["textbar"]} />

            </span>
          </div> */}
          <button
            disabled={!validName || !validPwd || !validMatch ? true : false} 
            // type="button" 
            // className={styles["button-1"]} 
          >
            Register
          </button> 
        
      <p>
          Already registered?<br />
          <span className="line">
              {/*put router link here*/}
              <a href="#">Sign In</a>
          </span>
      </p>
      </form>
    </section>
  )
}

export default SignUpPage
