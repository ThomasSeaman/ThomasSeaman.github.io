import React from "react";
import "./Footer.css";

const Footer = props => (
  <div>
  <footer className="footer">
        

        <a href="https://github.com/ThomasSeaman" target="_blank" rel="noopener noreferrer">
            <img src={`../../images/githubimage.png`}  alt="githubimage" className="githubimage"></img>
        </a>
            
        <a href="https://www.linkedin.com/in/thomas-seaman-274a3850/" target="_blank" rel="noopener noreferrer">
            <img src={`../../images/linkedinimage.png`} alt="linkedinimage" className="linkedinimage"></img>
        </a>
            
        <a href="https://stackoverflow.com/users/9157304/tseaman" target="_blank" rel="noopener noreferrer">
            <img src={`../../images/stackoverflowimage.png`} alt="stackoverflowimage" className="stackoverflowimage"></img>
        </a>
</footer>
</div>
);

export default Footer;