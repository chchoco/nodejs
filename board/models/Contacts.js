

var mongoose = require("mongoose");
var bodyParser = require('body-parser'); //1




//DB schema //4
var contactSchema = mongoose.Schema({
 //required: �ݵ����Է�, unique:�ߺ��ȵ�
  link:{type:String},
  title:{type:String},
  money:{type:String},
  regdate:{type:String},
  enddate:{type:String},
  local:{type:String},
  job:{type:String},
  degree:{type:String},
  barrier:{type:String},
  condition:{type:String},
  career:{type:String}
});
//db���� ������ ��Ű�� ������Ʈ ���� , �����·� db�� data�� ������

var Contact = mongoose.model("contact", contactSchema); //5
//contact: ���������� �÷����̸�,
// contactSchema�� model ����
// model & export

module.exports = Contact;
