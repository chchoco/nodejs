

var express = require("express");
var router = express.Router();
var Contacts  = require("../models/Save");
var util  = require("../util"); // 1
// Routes
// Home // 6
router.get("/", function(req, res){
  res.redirect("saves");  //7-12-1:21바꾼것
});
// Contacts - Index // 7
//contacts�� get��û�̿��� ���� contacs�� redicet�ϴ� �ڵ�



router.get("/", function(req, res){
  Contact.find({}, function(err, saves){
    if(err) return res.json(err);
    res.render("saves/index", {saves:saves});
  });
});
//contacs�� get��û�̿��� ���� ���Ŷ� �ִٸ� json���� ǥ��
//������ ���ٸ� view/contacts/index.ejs�� render
/*
// Contacts - New // 8
router.get("/contacts/new", function(req, res){
  res.render("contacts/new");
});
//new�� get��û�̿��� ����  ���ο� �ּҷ��� ������ form�� �ִ� contacts/new.ejs�� �����մϴ�.


// Contacts - create // 9
router.post("/contacts", function(req, res){
  Contact.create(req.body, function(err, contact){
    if(err) return res.json(err);
    res.redirect("/contacts");
  });
});
///contactsdp post��û�� ���� ����


*/

module.exports = router;
