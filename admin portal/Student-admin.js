var express    = require("express");
var mysql      = require('mysql');
var bodyParser = require("body-parser");

var connection = mysql.createConnection({
  host     : 'occupancychart.cmauel5myhvk.us-east-1.rds.amazonaws.com',
 port      :  '3306',
  user     : 'admin',
  password : 'occupancy',
  database : 'occupancy'
});

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
var server = app.listen(9000, function () {
  console.log('Node server is running..');
});

app.post('/VIEW', function (req, res) {
  var sem0 = req.body.sem0; 
  var y0= req.body.y0;
  var sec0= req.body.sec0;
  connection.connect(function(err) {
    if (err) throw err;  
  connection.query("SELECT * FROM student where sem='"+sem0+"'and yr='"+y0+"' and sec='"+sec0+"' ", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      var sem=result[0].sem;
      var year=result[0].yr;
      var sec=result[0].sec;
      var day=result[0].dy;
      var period1=result[0].fh;
      var period2=result[0].sh;
      var period3=result[0].th;
      var period4=result[0].foh;
      var period5=result[0].fih;
      var period6=result[0].sih;
      var period7=result[0].seh;
      var period8=result[0].eh;
      var period9=result[0].nh;
      res.render('C:/Users/Shameem Banu/occupancy/src/studenttimetable.ejs', {records:result });
      console.log("success");
    });
});});


/*
app.post("/INSERT", function(req, res) {
  console.log("Inside post /INSERT method");
  
  var sec1 = req.body.sec1;
  var sem1 = req.body.sem1; 
  var y1 = req.body.y1; 
  var day1=req.body.day1;
  var fh1 = req.body.fh1; 
  var sh1= req.body.sh1;
  var th1 = req.body.th1; 
  var foh1= req.body.fh1;
  var fih1= req.body.fih1; 
  var sih1= req.body.sih1;
  var seh1 = req.body.seh1; 
  var eh1= req.body.eh1;  
  var nh1= req.body.nh1; 
let f=0;
  //check if previously present
  connection.query("select DAY from studenttime where SEC="+sec1+" and YEAR="+y1+" and SEM="+sem1+" ", function(err, result, fields) {
    if (!err) {
      for (let i = 0; i < result.length; i++) {

         if(result[i]===day1)
         {
             res.send("CANNOT INSERT BUT CAN MODIDFY");
             f=1;
             break;
         }
         
      }
      if(f!=1)
      {
          mysqlConnection.query("INSERT INTO studenttime values (SEM,YEAR,SECTION,DAY,PERIOD1,PERIOD2,PERIOD3,PERIOD4,PERIOD5,PERIOD6,PERIOD7,PERIOD8,PERIOD9) VALUES ('"+req.body.sem1+"','"+req.body.y1+"','"+req.body.sec1+"','"+req.body.day1+"','"+req.body.fh1+"','"+req.body.sh1+"','"+req.body.th1+"','"+req.body.foh1+"','"+req.body.fih1+"','"+req.body.sih1+"','"+req.body.seh1+"','"+req.body.eh1+"','"+req.body.nh1+'")"' ,function(err,result)
          {
              res.send("1 record inserted");
          });
      }}
     });

 

});*/
   

connection.connect(function(err){
  if (err) throw err;
var sql2 = "INSERT INTO student (sec,sem,yr,dy,fh, sh,th,foh,fih,sih,seh,eh,nh) VALUES ('"+req.body.sec1+"','"+req.body.sem1+"','"+req.body.y1+"','"+req.body.day1+"','"+req.body.fh1+"','"+req.body.sh1+"','"+req.body.th1+"','"+req.body.foh1+"','"+req.body.fih1+"','"+req.body.sih1+"','"+req.body.seh1+"','"+req.body.eh1+"','"+req.body.nh1+"')";
  connection.query(sql2, function (err, result) {
    console.log("1 day record inserted");
  });
  res.send("1 record successfully inserted");
});


 





 

app.post("/MODIFY", function(req, res) {
console.log("Update post /UPDATE method");

var sec2=req.body.sec2;
var sem2 = req.body.sem2; 
var y2 = req.body.y2;
var day2=req.body.day2; 
var fh2 = req.body.fh2; 
var sh2= req.body.sh2;
var th2 = req.body.th2; 
var foh2= req.body.foh2;
var fih2= req.body.fih2; 
var sih2= req.body.sih2;
var seh2 = req.body.seh2; 
var eh2= req.body.eh2;  
var nh2= req.body.nh2; 

connection.connect(function(err){
  if (err) throw err;
var sql3="UPDATE student set fh='"+fh2+"', sh='"+sh2+"' ,th='"+th2+"',foh='"+foh2+"',fih='"+fih2+"',sih='"+sih2+"',seh='"+seh2+"',eh='"+eh2+"',nh='"+nh2+"' where sem='"+sem2+"' and yr='"+y2+"' and sec='"+sec2+"' and dy='"+day2+"' ";
//var sql3 = "UPDATE Room set fir_hr='"+fh2+"' where room_no='"+r3+"'";
connection.query(sql3, function (err, result) {
  
    console.log("1 record updated");
  });
  res.send("1 record successfully updated");
});});
