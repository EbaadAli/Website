import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
            <h2> Feel Free to Contact Me</h2>
            <h4>
              Phone: +1 (416) 566-8510
            </h4>
            <h4>
              Email: <a href="mailto:ebaadali@gmail.com"> ebaadali@gmail.com </a>
            </h4> 
            <h4>
              LinkedIn: <a href="www.linkedin.com/in/ebaadali"> ebaadali@gmail.com </a>
            </h4>
            <h4>
            <a href="http://www.ebaadali.wordpress.com"> Check out my Blogs!</a>
          </h4>
            
           </div>
          </div>
        </section>
        );
  }
}