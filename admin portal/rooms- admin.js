import React from "react";
import css from "./css.css";

class Room extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        fields1: {},
      errors1: {},
   
     fields2: {},
 
     errors2: {},

     fields3: {},
   
     errors3: {}
 
 }
}


handleValidation1(){
    let fields1 = this.state.fields1;
    let errors1 = {};
    let formIsValid1 = true;
    if(!fields1["r1"]){
       formIsValid1 = false;
       errors1["r1"] = "Cannot be empty";
    }
    if(typeof fields1["sem0"] !== "undefined"){
       if(!fields1["sem0"].match(/[1-8]/)){
          formIsValid1 = false;
          errors1["sem0"] = "Only 1-8";
       }        
    }
    if(!fields1["y0"]){
        formIsValid1 = false;
        errors1["y0"] = "Cannot be empty";
     }

      
     if(typeof fields1["y0"] !== "undefined"){
         if(!fields1["y0"].match(/2019/)){
            formIsValid1 = false;
            errors1["y0"] = "Only 2019";
         }        
      }

   this.setState({errors1: errors1});
   return formIsValid1;
}


contactSubmit1(e){
    e.preventDefault();

    if(this.handleValidation1()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
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

    if(typeof fields2["sem1"] !== "undefined"){
       if(!fields2["sem1"].match(/[1-8]/)){
          formIsValid2 = false;
          errors2["sem1"] = "Only 1-8";
       }        
    }
    if(!fields2["r2"]){
       formIsValid2 = false;
       errors2["r2"] = "Cannot be empty";
    }

    if(!fields2["y1"]){
        formIsValid2 = false;
        errors2["y1"] = "Cannot be empty";
     }

     if(!fields2["fh1"] || !fields2["sh1"]|| !fields2["th1"]|| !fields2["foh1"]|| !fields2["fih1"]
     || !fields2["sih1"]|| !fields2["seh1"]|| !fields2["eh1"]|| !fields2["nh1"]){
         formIsValid2 = false;
         alert("Please enter all class hours details");
      }



      if(!fields2["day1"]){
         formIsValid2 = false;
         errors2["day1"] = "Cannot be empty";
      }

      if(typeof fields2["day1"] !== "undefined"){
         if(!fields2["day1"].match(/monday|tuesday|wednesday|thursday|friday/)){
            formIsValid2 = false;
            errors2["day1"] = "Only monday to friday";
         }        
      }
     if(typeof fields2["y1"] !== "undefined"){
         if(!fields2["y1"].match(/2019/)){
            formIsValid2 = false;
            errors2["y1"] = "Only 2019";
         }        
      }

   this.setState({errors2: errors2});
   return formIsValid2;
}


contactSubmit2(e){
    e.preventDefault();

    if(this.handleValidation2()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
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

    if(typeof fields3["sem2"] !== "undefined"){
       if(!fields3["sem2"].match(/[1-8]/)){
          formIsValid3 = false;
          errors3["sem2"] = "Only 1-8";
       }        
    }
    if(!fields3["r3"]){
       formIsValid3 = false;
       errors3["r3"] = "Cannot be empty";
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



     if(typeof fields3["y2"] !== "undefined"){
         if(!fields3["y2"].match(/2019/)){
            formIsValid3 = false;
            errors3["y2"] = "Only 2019";
         }        
      }
      if(!fields3["day2"]){
         formIsValid3 = false;
         errors3["day2"] = "Cannot be empty";
      }

      if(typeof fields3["day2"] !== "undefined"){
         if(!fields3["day2"].match(/monday|tuesday|wednesday|thursday|friday/)){
            formIsValid3 = false;
            errors3["day2"] = "Only monday to friday";
         }        
      }
    
   this.setState({errors3: errors3});
   return formIsValid3;
}


contactSubmit2(e){
    e.preventDefault();

    if(this.handleValidation2()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
    }

}
handleChange3(field, e){         
    let fields3 = this.state.fields3;
    fields3[field] = e.target.value;        
    this.setState({fields3});
}
/*

handle(event)
{
    if(this.state.r1===""||this.state.y0===""||this.state.sem0==="")
    {
        alert("Please Enter All The Details");
       event.preventDefault();
    } 
} */

  render(props) {
    return (
        <div class="form"><table><tr>
        <div className="container1"><fieldset>
      <form action="http://localhost:4000/VIEW" target="_blank" method="POST" onSubmit={this.handle}>
       
          <legend>
            <span className="number">1</span> VIEW ROOM TIMETABLE
          </legend><br></br>
          Room no:
          <input type="text" name="r1" placeholder="Room no *" onChange={this.handleChange1.bind(this, "r1")}/>
          <span style={{color: "red"}}>{this.state.errors2["r1"]}</span> <br/>
         
          Year *:
         
          <select id="lang" name="y0" onChange={this.handleChange1.bind(this, "y0")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
         <span style={{color: "red"}}>{this.state.errors2["y0"]}</span> <br/>
         
          Sem *:
          
          <select id="lang" name="sem" onChange={this.handleChange1.bind(this, "sem0")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
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
          <span style={{color: "red"}}>{this.state.errors2["sem0"]}</span> <br/>
         
          <input type="submit" Value="VIEW" />
      
      </form>  </fieldset>
     
      </div>
      </tr><tr>
      <div className="container2"><fieldset>
      <form action="http://localhost:4000/INSERT" method="POST">
      <legend>
            <span className="number">2</span>INSERT ROOM TIME TABLE
          </legend><br></br>
        Room no:
          <input type="text" name="r2" placeholder="Room no *" onChange={this.handleChange2.bind(this, "r2")}/>
          <span style={{color: "red"}}>{this.state.errors2["r2"]}</span> <br/>
         
          Year *:
         
          <select id="lang" name="y1" onChange={this.handleChange2.bind(this, "y1")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
          <span style={{color: "red"}}>{this.state.errors2["y1"]}</span> <br/>
         
          Sem *:
          <select id="lang" name="sem1" onChange={this.handleChange2.bind(this, "sem1")}  style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
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
      </form> </fieldset>
      </div></tr>
      <tr>
      <div className="container3"> <fieldset>
      <form action="http://localhost:4000/UPDATE" method="POST">
      <legend>
            <span className="number">3</span>MODIFY ROOM TIME TABLE
          </legend><br></br>
            
          Room no:
          <input type="text" name="r3" placeholder="Room no *" onChange={this.handleChange3.bind(this, "r3")} />
          <span style={{color: "red"}}>{this.state.errors3["r3"]}</span> <br/>
         
          Year *:
         
          Year *:
          <select id="lang" name="y2" onChange={this.handleChange3.bind(this, "y2")} style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}}>
          <option value="select">Select a YEAR</option>
          
          <option value ="2019">2019</option>
          
         
          
        </select><br/>
         
         <span style={{color: "red"}}>{this.state.errors3["y2"]}</span> <br/>
         
          Sem *:
          <select id="lang" name="sem2" onChange={this.handleChange3.bind(this, "sem2")}style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
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
          <span style={{color: "red"}}>{this.state.errors3["sem2"]}</span> <br/>
         
          Day *:
          <select id="lang" name="day2" onChange={this.handleChange3.bind(this, "day2")}style={{borderRadius:'4px',width:'100%',backgroundColor:'rgb(158, 151, 151)'}} >
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
          <input type="text" name="fh2" placeholder="First Hour *" onChange={this.handleChange3.bind(this, "fh2")} />
          Second Hour *:
          <input type="text" name="sh2" placeholder="Second Hour *" onChange={this.handleChange3.bind(this, "sh2")} />
          Third Hour *:
          <input type="text" name="th2" placeholder="Third Hour *" onChange={this.handleChange3.bind(this, "th2")} />
          Fourth Hour *:
          <input type="text" name="foh2" placeholder="Fourth Hour *" onChange={this.handleChange3.bind(this, "foh2")} />
          Fifth Hour *:
          <input type="text" name="fih2" placeholder="Fifth Hour *" onChange={this.handleChange3.bind(this, "fih2")} />
          Sixth Hour *:
          <input type="text" name="sih2" placeholder="Sixth Hour *" onChange={this.handleChange3.bind(this, "sih2")} />
          Seventh Hour *:
          <input type="text" name="seh2" placeholder="Seventh Hour *" onChange={this.handleChange3.bind(this, "seh2")} />
          Eighth Hour *:
          <input type="text" name="eh2" placeholder="Eight Hour *" onChange={this.handleChange3.bind(this, "eh2")} />
          Ninth Hour *:
          <input type="text" name="nh2" placeholder="Nine Hour *" onChange={this.handleChange3.bind(this, "nh2")} />
        
        <input type="submit"Value="MODIFY" />
      </form>  </fieldset>
      </div>
      </tr>
      </table>
      </div>
      
    );
  }
}

export default Room;
