import React from 'react'
import logo from './logo.png';
import styles from './resume.css';
// import styles from './sign-up-page.module';
import { useRef, useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Resume from './resume';
// import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'


const ResumeDisplay = (props) => {
    console.log(props)
    const generatePDF = ()=>{
        var doc = new jsPDF("p","pt","a4")
        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("resume.pdf");
            }
        })
    }
        const [loader,setLoader] = useState(false)
        const downloadPDF = () =>{
            const capture = document.querySelector('#content');
            setLoader(true)
            html2canvas(capture).then((canvas)=>{
                const imgData = canvas.toDataURL('img/png')
                const doc = new jsPDF('p','mm','a4');
                doc.addImage(imgData,'PNG',0,0)
                setLoader(false)
                doc.save('Resume.pdf')
            })
        }
     

    return(

    <div >
        


{/* <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Open+Sans:300,400,500,700|Waiting+for+the+Sunrise|Shadows+Into+Light' rel='stylesheet' type='text/css'> */}

<div className="wrapper clearfix" id="content">
  <div className="left">

    <div className="name-hero">

      <div className="me-img"></div>

      <div className="name-text">

        <h1>{props.f} {props.l}</h1>
        <p>Place of residence: {props.l2}</p>
        <h3>Personal Contact Details</h3>

        <p>Official Email Address: {props.e}</p>
        <p>Phone Number: {props.p}</p>

      </div>

    </div>

  </div>
  <div className="right">

    <div className="inner">
      <section>
        <h1>Employment History</h1>
        <p>{props.ex}</p>
         <p>Higher Education Degree: <em>{props.m}</em></p>
      </section>
      <section>
        <h1>Technical Skills</h1>
        <ul className="skill-set"><em>{props.sk}</em>
        </ul>
      </section>

    </div>

  </div>

</div>
            <button onClick={downloadPDF}
                disabled={!(loader===false)}
            >{loader?(<span>Downloading</span>):(<span>Download</span>)}</button>
         
        </div>
    )

}

export default ResumeDisplay
