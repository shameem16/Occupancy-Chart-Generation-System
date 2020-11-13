import React from "react";
import css from './css.css';
class Student extends React.Component {
    constructor(props){
       super(props);

       this.state = {
           fields1: {},
          errors1: {}, errors2: {} ,errors3: {},
        fields2: {},  
        fields3: {}    
    }
}
handleValidation1(){
    let fields1 = this.state.fields1;
    let errors1 = {};
    let formIsValid1 = true;
    if(!fields1["sem0"]){
       formIsValid1 = false;
       errors1["sem0"] = "Cannot be empty";
    }

    
    if(!fields1["sec0"]){
       formIsValid1 = false;
       errors1["sec0"] = "Cannot be empty";
    }     
    
    if(!fields1["y0"]){
        formIsValid1 = false;
        errors1["y0"] = "Cannot be empty";
     }

      
     

   this.setState({errors1: errors1});
   return formIsValid1;
}


contactSubmit1(e){
    

    if(this.handleValidation1()){
       alert("Form submitted");
    }else{
       alert("Form has errors.");
       e.preventDefault();
    }

}
   handleChange1(field, e){         
        let fields1 = this.state.fields1;
        fields1[field] = e.target.value;        
        this.setState({fields1});
    }

    handleValidation2(){
        let fields2 = this.state.fields2;
        let errors2 = {};
        let formIsValid2 = true;
        if(!fields2["sem1"]){
           formIsValid2 = false;
           errors2["sem1"] = "Cannot be empty";
        }
    
       
        if(!fields2["sec1"]){
           formIsValid2 = false;
           errors2["sec1"] = "Cannot be empty";
        }
        if(!fields2["y1"]){
            formIsValid2 = false;
            errors2["y1"] = "Cannot be empty";
         }
    
         if(!fields2["fh1"] || !fields2["sh1"]|| !fields2["th1"]|| !fields2["foh1"]|| !fields2["fih1"]
         || !fields2["sih1"]|| !fields2["seh1"]|| !fields2["eh1"]|| !fields2["nh1"]){
             formIsValid2 = false;
             alert("Please enter all class hours details for insertion");
          }
          if(!fields2["day1"]){
            formIsValid2 = false;
            errors2["day1"] = "Cannot be empty";
         }

        

    
       this.setState({errors2: errors2});
       return formIsValid2;
    }
    
    
    contactSubmit2(e){
    
        if(this.handleValidation2()){
           alert("Form submitted");
        }else{
           alert("Form has errors.");
           
        e.preventDefault();
        }
    
    }
    handleChange2(field, e){         
        let fields2 = this.state.fields2;
        fields2[field] = e.target.value;        
        this.setState({fields2});
    }


    handleValidation3(){
        let fields3 = this.state.fields3;
        let errors3 = {};
        let formIsValid3 = true;
        if(!fields3["sem2"]){
           formIsValid3 = false;
           errors3["sem2"] = "Cannot be empty";
        }
    
        
        if(!fields3["day2"]){
         formIsValid3 = false;
         errors3["day2"] = "Cannot be empty";
      }

        if(!fields3["sec2"]){
           formIsValid3 = false;
           errors3["sec2"] = "Cannot be empty";
        }
    
        
        if(!fields3["y2"]){
            formIsValid3 = false;
            errors3["y2"] = "Cannot be empty";
         }
    
         if(!fields3["fh2"] || !fields3["sh2"]|| !fields3["th2"]|| !fields3["foh2"]|| !fields3["fih2"]
         || !fields3["sih2"]|| !fields3["seh2"]|| !fields3["eh2"]|| !fields3["nh2"]){
             formIsValid3 = false;
             alert("Please enter all class hours details");
          }



    
       this.setState({errors3: errors3});
       return formIsValid3;
    }
    
    
    contactSubmit3(e){
    
        if(this.handleValidation3()){
           alert("Form submitted");
        }else{

           alert("Form has errors.");
           
      e.preventDefault();
        }
    
    }



    handleChange3(field, e){         
        let fields3 = this.state.fields3;
        fields3[field] = e.target.value;        
        this.setState({fields3});
    }
    render(){
        return (
            <div className="form">
                <table>
                    <tr>
                   <div className="container1" ><fieldset>
          <form action="http://localhost:9000/VIEW" method="POST" onSubmit= {this.contactSubmit1.bind(this)} >
            
              <legend>
                <span className="number">1</span> VIEW STUDENT TIMETABLE
              </legend><br></br>
              Sem*
              <select id="lang" name="sem0" onChange={this.handleChange1.bind(this, "sem0")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
              <option value="select">Select a SEM</option>
          
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option>
          <option value ="5">5</option>
          <option value ="6">6</option>
          <option value ="7">7</option>
          <option value ="8">8</option>
          
        </select><br/>
          <span style={{color: "red"}}>{this.state.errors1["sem0"]}</span> <br/>
                         
         Sec* 
         <select id="lang" name="sec0" onChange={this.handleChange1.bind(this, "sec0")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}  >
         <option value="select">Select a SEC</option>
          
          <option value ="A">A</option>
          <option value ="B">B</option>
          <option value ="C">C</option>
          <option value ="D">D</option>
          <option value ="E">E</option>
          <option value ="F">F</option>
         
          
        </select><br/>
                       <span style={{color: "red"}}>{this.state.errors1["sec0"]}</span>  <br/> 
                       Year*
               
	<select id="lang" name="y0" onChange={this.handleChange1.bind(this, "y0")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
   <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
                         <span style={{color: "red"}}>{this.state.errors1["y0"]}</span>   <br/> 
                         <input type="submit" Value="VIEW" />
       
       </form>
       </fieldset>
       </div>
       </tr>
       <tr>
          <div className="container2" > <fieldset>
      <form action="http://localhost:9000/INSERT" method="POST"onSubmit= {this.contactSubmit2.bind(this)}>
     
        <legend>
          <span className="number">2</span>INSERT STUDENT TIME TABLE
        </legend><br></br>
         Sec *:
         <select id="lang" name="sec1" onChange={this.handleChange2.bind(this, "sec1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}  >
         <option value="select">Select a SEC</option>
         
          <option value ="A">A</option>
          <option value ="B">B</option>
          <option value ="C">C</option>
          <option value ="D">D</option>
          <option value ="E">E</option>
          <option value ="F">F</option>
         
          
        </select><br/>
        
        
        <span style={{color: "red"}}>{this.state.errors2["sec1"]}</span>  <br/>  
                                        
        Sem *:
        
        <select id="lang" name="sem1" onChange={this.handleChange2.bind(this, "sem1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a SEM</option>
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option>
          <option value ="5">5</option>
          <option value ="6">6</option>
          <option value ="7">7</option>
          <option value ="8">8</option>
          
        </select><br/>
        
        <span style={{color: "red"}}>{this.state.errors2["sem1"]}</span> <br/>
                                    
        Year *:
        
        <select id="lang" name="y1" onChange={this.handleChange2.bind(this, "y1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
        <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
           <span style={{color: "red"}}>{this.state.errors2["y1"]}</span> <br/>
                                      
        Day *:
          
        <select id="lang" name="day1" onChange={this.handleChange2.bind(this, "day1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
       
       
        <option value="select">Select a DAY</option>
         
          <option value ="MONDAY">MONDAY</option>
          <option value ="TUESDAY">TUESDAY</option>
          <option value ="WEDNESDAY">WEDNESDAY</option>
          <option value ="THURSDAY">THURSDAY</option>
          <option value ="FRIDAY">FRIDAY</option>
         
          
        </select><br/>
          
          <span style={{color: "red"}}>{this.state.errors2["day1"]}</span> <br/>
                         
        <h4>Enter Time Table</h4>
       First Hour *:
        <input type="text" name="fh1" placeholder="First Hour *" onChange={this.handleChange2.bind(this, "fh1")}/>
        Second Hour *:
        <input type="text" name="sh1" placeholder="Second Hour *" onChange={this.handleChange2.bind(this, "sh1")}/>
        Third Hour *:
        <input type="text" name="th1" placeholder="Third Hour *" onChange={this.handleChange2.bind(this, "th1")}/>
        Fourth Hour *:
        <input type="text" name="foh1" placeholder="Fourth Hour *" onChange={this.handleChange2.bind(this, "foh1")}/>
        Fifth Hour *:
        <input type="text" name="fih1" placeholder="Fifth Hour *" onChange={this.handleChange2.bind(this, "fih1")}/>
        Sixth Hour *:
        <input type="text" name="sih1" placeholder="Sixth Hour *" onChange={this.handleChange2.bind(this, "sih1")}/>
        Seventh Hour *:
        <input type="text" name="seh1" placeholder="Seventh Hour *" onChange={this.handleChange2.bind(this, "seh1")}/>
        Eighth Hour *:
        <input type="text" name="eh1" placeholder="Eight Hour *" onChange={this.handleChange2.bind(this, "eh1")}/>
        Ninth Hour *:
        <input type="text" name="nh1" placeholder="Nine Hour *" onChange={this.handleChange2.bind(this, "nh1")}/>
    
      <input type="submit" Value="INSERT" />
    </form>    </fieldset>
    </div></tr>
    <tr>
    <div className="container3"><fieldset>
     <form action="http://localhost:9000/MODIFY" method="POST"onSubmit= {this.contactSubmit3.bind(this)}>
     
       <legend>
         <span className="number">3</span>MODIFY STUDENT TIME TABLE
       </legend><br></br>
       Sec *:
      
       <select id="lang" name="sec2" onChange={this.handleChange3.bind(this, "sec2")}style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
         
       <option value="select">Select a SEC</option>
         
          <option value ="A">A</option>
          <option value ="B">B</option>
          <option value ="C">C</option>
          <option value ="D">D</option>
          <option value ="E">E</option>
          <option value ="F">F</option>
         
          
        </select><br/>
       <span style={{color: "red"}}>{this.state.errors3["sec2"]}</span>  <br/>  
        
       Sem *:

       <select id="lang" name="sem2" onChange={this.handleChange3.bind(this, "sem2")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a SEM</option>
          <option value ="1">1</option>
          <option value ="2">2</option>
          <option value ="3">3</option>
          <option value ="4">4</option>
          <option value ="5">5</option>
          <option value ="6">6</option>
          <option value ="7">7</option>
          <option value ="8">8</option>
          
        </select><br/>

       <span style={{color: "red"}}>{this.state.errors3["sem2"]}</span>  <br/>  
       
        
       Year *:
       <select id="lang" name="y2" onChange={this.handleChange3.bind(this, "y2")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
       <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/> 
        <span style={{color: "red"}}>{this.state.errors3["y2"]}</span>  <br/>  
      
       Day *:
         
         
        <select id="lang" name="day2" onChange={this.handleChange3.bind(this, "day2")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
        <option value="select">Select a DAY</option>
          
          <option value ="MONDAY">MONDAY</option>
          <option value ="TUESDAY">TUESDAY</option>
          <option value ="WEDNESDAY">WEDNESDAY</option>
          <option value ="THURSDAY">THURSDAY</option>
          <option value ="FRIDAY">FRIDAY</option>
         
          
        </select><br/>
         
          <span style={{color: "red"}}>{this.state.errors3["day2"]}</span> <br/>
          
       <h4>Enter Time Table</h4>
       First Hour *:
       <input type="text" name="fh2" placeholder="First Hour *" onChange={this.handleChange3.bind(this, "fh2")}/>
       Second Hour *:
       <input type="text" name="sh2" placeholder="Second Hour *" onChange={this.handleChange3.bind(this, "sh2")}/>
       Third Hour *:
       <input type="text" name="th2" placeholder="Third Hour *" onChange={this.handleChange3.bind(this, "th2")}/>
       Fourth Hour *:
       <input type="text" name="foh2" placeholder="Fourth Hour *" onChange={this.handleChange3.bind(this, "foh2")}/>
       Fifth Hour *:
       <input type="text" name="fih2" placeholder="Fifth Hour *" onChange={this.handleChange3.bind(this, "fih2")}/>
       Sixth Hour *:
       <input type="text" name="sih2" placeholder="Sixth Hour *" onChange={this.handleChange3.bind(this, "sih2")}/>
       Seventh Hour *:
       <input type="text" name="seh2" placeholder="Seventh Hour *" onChange={this.handleChange3.bind(this, "seh2")}/>
       Eighth Hour *:
       <input type="text" name="eh2" placeholder="Eight Hour *" onChange={this.handleChange3.bind(this, "eh2")}/>
       Ninth Hour *:
       <input type="text" name="nh2" placeholder="Nine Hour *" onChange={this.handleChange3.bind(this, "nh2")}/>
  
     <input type="submit"Value="MODIFY" />
   </form>     </fieldset>
   </div></tr>
     
   </table>
   </div>

      )
    }
}
export default Student;