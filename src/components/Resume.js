import React, { Component } from 'react';
import Bars from 'react-bars';

const skills = [
    { label: 'Angular.js', value: 85 },
    { label: 'ASP .NET', value: 95 },
    { label: 'Bootstrap', value: 90 },
    { label: 'C / C++', value: 90 },
    { label: 'CSS', value: 90 },
    { label: 'HTML5', value: 95 },
    { label: 'Java', value: 90 },
] ;

const skills2 = [
    { label: 'Javascript', value: 80 },
    { label: 'JQuery', value: 80 },
    { label: 'Node.js', value: 70 },
    { label: 'PowerBI', value: 95 },
    { label: 'Python', value: 90 },
    { label: 'React', value: 65 },
    { label: 'SQL', value: 98 },
] ;


              
export default  class Resume extends Component {
  
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthStarted}{item.YearStarted} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                              <ul id="bullet">
                           <li>{item.Achievement1}</li>
                           <li>{item.Achievement2}</li>
                           <li>{item.Achievement3}</li>
                           <li>{item.Achievement4}</li>
                           <li>{item.Achievement5}</li>
                           <li >{item.Achievement6}</li>
                           <li>{item.Achievement7}</li>
                           <li>{item.Achievement8}</li>
                           <li>{item.Achievement9}</li>
                           <li>{item.Achievement10}</li>
                          </ul>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Technical Skills</span></h1>
            </div>
            <br/>
            <br/>

           <div className="bars-container">
              

   				   <div className="skills1">
                {
                  <li>
                     <Bars data={skills}/>
                  </li>
                }
              </div>
              <div className="skills2">
              {
                <li>
                      <Bars data={skills2} />
                  </li>
              }
                  
              </div>

   					</div>

   				

   			</div>


      </section>
    );
  }
}