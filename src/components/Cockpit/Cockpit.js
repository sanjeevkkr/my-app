import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // // for every change setTimeout() will call at 1 second delay.
    // useEffect(() => {
    //   console.log('[cockpit.js] useeffect')
    //   // Http Request..
    //   setTimeout(()=>{
    //     alert('Saved data to cloud!');
    //   }, 1000);
    // })

     // To restrict when person component changes then setTimeout() will call at 1 sec. delay.
     // We can add as more condition also (like persons)
     // if we want setTimeout() will call once when component rendered for first time, just pass an empty list: []
     // In our case it call once when page loaded.
     useEffect(() => {
      console.log('[cockpit.js] useeffect')
      // Http Request..
      setTimeout(()=>{
        alert('Saved data to cloud!');
      }, 1000);
    },[props.persons]) 

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPerson){
      btnClass= classes.Red; 
    }    

    if(props.persons.length <=2){
        assignedClasses.push(classes.red); // classes = [red]
      }
      if(props.persons.length <=1){
        assignedClasses.push(classes.bold); //classes = [red, bold] and classes.join('' ) will be 'red bold'
      }
      
      //var myClass = assignedClasses.join(' ');  

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Wow Its working!</p>      
            <button className={btnClass} onClick={props.clicked}>Click to Toggle</button>        
        </div>
    );
};

export default cockpit;

