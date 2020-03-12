import React from 'react';
import data from './data.json';
import icon from './clerk.svg';




let Resume1=(props)=>{
    let info = Object.values(props.location.index.value);
    console.log(info);
    let person=data.profiles[info]
    console.log(person);

    return(
        <div className="parent">
            <div className="child">
            <img src={icon} alt="profile"/>

                <h3>{person.basics.name}</h3>
                <a href={"mail to:"+person.basics.email}className="link">{person.basics.email }</a>
                <br></br>
                <a href={"tel no:"+person.basics.mobile} className="link">{person.basics.mobile}</a>
            </div>
            <hr></hr>
            <div className="child2">
            <h2>Educational Qualifications</h2>
            <hr></hr>
            {person.education.map((i,j)=>(
                <div key={j}>
                    <h4><hr></hr> {i.degree} </h4>
                    <u1>
                        <li>{i.percentage+"%"}</li>
                        <li>{i.institute}</li>

                    </u1>
                </div>
            ))
        }
        <hr></hr>
        <h3> skills </h3>
        {person.skills.map((x,y)=>(
            < div >
                <h4><hr></hr>{x.type}</h4>
                {x.values.map((k,l)=>(
                    <div className="skill" key={l} style={{display:"flex",}}>
                        <span>{k}</span>
                    </div>
                )
                )}
            </div>

        )
        )}
        <hr></hr>
        </div>

        </div>
    )
}
export default Resume1;