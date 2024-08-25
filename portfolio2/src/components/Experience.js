
import './styles/Experiences.scss';
import React, { useState } from 'react';

  const Experiences = (props) => {
      return (
        <div className="content-container experience-container">
            <div className="section-container">
                <div className="section-content">
                    <h1>Experience</h1>
                    <strong>Professional Summary</strong>
                    <div className="paragraph">
                        {`
Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.`}
                    </div>
                    <strong>Background</strong>
                    <div className="pararaph">
                        {`I spent the last couple of years learning and teaching to code. After highschool, curious about coding, I completed some credits toward a computer science degree while i worked in retail. I spent free time creating small games, and looking for resources to learn more and find out what I could make. I followed small courses on coding through things such as Youtube, Udemy, or Watch and Code. I spent these past two years enrolled in Lambda School as a student and as a contract teaching assistant.

During my time as a student, I learned Full Stack web development and computer science fundamentals, along with an assortment of librarys, frameworks and algorithms. With that I created some pretty cool projects that I’m proud of. I was a contract worker for Lambda School as well, where I frist worked as a Team lead above students, leading daily meetings, solving any debugging issues, helping my students learn the cirriculum in javscript, java, and python. The times I was working on a project with a team, I was responsible with the relationship between the stakeholder and the team, and managed our planning. I also debugged and filled any gaps in the conribution to the project where nessesary. I spent most of my time in meetings getting to know my students and solving problems or planning with them and creating documentation.`}
                    </div>
                    {/* <strong>Early</strong>
                    <div class="paragraph">
{`I got interested in game development at a very young age, and throughout my time in middle and highschool i would create small gamedev projects in my freetime for function

    My last couple years of highschool, i took elective classes for coding and software developement. My senior year i graduated half a year early and started comunity college classes that last semester of my senior year.
I took classes towards a computer science degree`
                        }

                    </div> */}
                    {/* <strong>School</strong>
                    <div class="paragraph">
{`I got interested in game development at a very young age, and throughout my time in middle and highschool i would create small gamedev projects in my freetime for function

    My last couple years of highschool, i took elective classes for coding and software developement. My senior year i graduated half a year early and started comunity college classes that last semester of my senior year.
I took classes towards a computer science degree
                        `}

                    </div> */}
                </div>
            </div>
        </div>
      );
  }
  
  export default Experiences;