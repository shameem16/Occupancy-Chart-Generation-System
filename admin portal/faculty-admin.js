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
var server = app.listen(7000, function () {
  console.log('Node server is running..');
});

app.post('/VIEW', function (req, res) {
  var fid0= req.body.fid0;
  var y0= req.body.y0;
  var sem0 = req.body.sem0; 
  connection.connect(function(err) {
    if (err) throw err;
 connection.query("SELECT * FROM Faculty where sem='"+sem0+"'and fac_id='"+fid0+"' and year='"+y0+"' ", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
  var sem=result[0].sem;
  var fid=result[0].fac_id;
  var year=result[0].year;
  var day=result[0].day;
  var period1=result[0].p1;
  var period2=result[0].p2;
  var period3=result[0].p3;
  var period4=result[0].p4;
  var period5=result[0].p5;
  var period6=result[0].p6;
  var period7=result[0].p7;
  var period8=result[0].p8;
  var period9=result[0].p9;
  res.render('C:/Users/Shameem Banu/formvalid/src/facultytimetable.ejs', {records:result });
 console.log("success");
});});});

app.post("/INSERT", function(req, res) {
  console.log("Inside post /INSERT method");
var fid1 = req.body.fid1;
var sem1 = req.body.sem1; 
var y1 = req.body.y1;
var day1=req.body.day1; 
  var fh1 = req.body.fh1; 
  var sh1= req.body.sh1;
  var th1 = req.body.th1; 
  var foh1= req.body.foh1;
  var fih1= req.body.fih1; 
  var sih1= req.body.sih1;
  var seh1 = req.body.seh1; 
  var eh1= req.body.eh1;  
  var nh1= req.body.nh1; 
  connection.connect(function(err){
    if (err) throw err;
 var sql2 = "INSERT INTO Faculty (fac_id,sem,year,day,fir_hr, sec_hr,thi_hr,fou_hr,fif_hr,six_hr,sev_hr,eig_hr,nin_hr) VALUES ('"+req.body.fid1+"','"+req.body.sem1+"','"+req.body.y1+"','"+req.body.day1+"','"+req.body.fh1+"','"+req.body.sh1+"','"+req.body.th1+"','"+req.body.foh1+"','"+req.body.fih1+"','"+req.body.sih1+"','"+req.body.seh1+"','"+req.body.eh1+"','"+req.body.nh1+"')";
    connection.query(sql2, function (err, result) {
      console.log("1 day record inserted");
    });
    res.send("1 record successfully inserted");
});});
   



   

app.post("/MODIFY", function(req, res) {
  console.log("Update post /UPDATE method");
  

  var fid2 = req.body.fid2;
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
  
 //var sql3 = "UPDATE Room set fir_hr='"+fh2+"' where room_no='"+r3+"'";
  connection.query(sql3, function (err, result) {
    
      console.log("1 record updated");
    });
    res.send("1 record successfully updated");
});});
