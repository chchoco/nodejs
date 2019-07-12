var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var flash     = require("connect-flash"); // 1
var session    = require("express-session"); // 1
var passport   = require("./config/passport"); // 1
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
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(flash()); // 2
app.use(session({secret:"MySecret", resave:true, saveUninitialized:true})); // 3

// Passport // 2
app.use(passport.initialize());
app.use(passport.session());

// Custom Middlewares // 3
app.use(function(req,res,next){
 res.locals.isAuthenticated = req.isAuthenticated();
 res.locals.currentUser = req.user;
 next();
})

// Routes
app.use("/", require("./routes/index")); ///바꾼것 원래 index였음
app.use("/posts", require("./routes/posts"));
app.use("/users", require("./routes/users"));

// Port setting
var port = 80
app.listen(port, function(){
  console.log("server on! http://localhost:"+port);
});
