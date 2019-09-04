import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My <a href="https://www.github.com/ebaadali/myprojects" target="_blank" rel="noopener noreferrer">Projects</a>.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} alt={item.description} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                        <a href="https://www.google.ca" target="_blank" rel="noopener noreferrer">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </a>
                        </div>
                      </div>
                    
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}