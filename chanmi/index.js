//index .js

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser'); //1
var app = express();

// DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/board');
var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//3
//1,2,3 body parser모듈을 변수에 담고,


//DB schema //4
var contactSchema = mongoose.Schema({
  link:{type:String}, //required: 반드시입력, unique:중복안됨
  title:{type:String},
  content:{type:String},
  content:{type:String},
  regdate:{type:String}
});
//db에서 사용할 스키마 오브젝트 생성 , 이형태로 db에 data가 저장됨

var Contact = mongoose.model("contact", contactSchema); //5
//contact: 몽고디비의 컬랙션이름,
// contactSchema에 model 생성


// Routes
// Home // 6
app.get("/", function(req, res){
  res.redirect("/contacts");
});
// Contacts - Index // 7
//contacts로 get요청이오는 경우 contacs로 redicet하는 코드



app.get("/contacts", function(req, res){
  Contact.find({}, function(err, contacts){
    if(err) return res.json(err);
    res.render("contacts/index", {contacts:contacts});
  });
});
//contacts에 get요청이오는 경우 에거라 있다면 json으로 표시
//에러가 없다면 view/contacts/index.ejs를 render

// Contacts - New // 8
app.get("/contacts/new", function(req, res){
  res.render("contacts/new");
});
//new에 get요청이오는 경우  새로운 주소록을 만드는 form이 있는 contacts/new.ejs를 렌더합니다.


// Contacts - create // 9
app.post("/contacts", function(req, res){
  Contact.create(req.body, function(err, contact){
    if(err) return res.json(err);
    res.redirect("/contacts");
  });
});
///contactsdp post요청이 오는 경우



// Port setting
var port = 80;
app.listen(port, function(){
  console.log("server on! http://localhost:"+port);
});
