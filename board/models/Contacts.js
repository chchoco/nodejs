

var mongoose = require("mongoose");
var bodyParser = require('body-parser'); //1




//DB schema //4
var contactSchema = mongoose.Schema({
  link:{type:String}, //required: �ݵ����Է�, unique:�ߺ��ȵ�
  title:{type:String},
  content:{type:String},
  content:{type:String},
  regdate:{type:String}
});
//db���� ������ ��Ű�� ������Ʈ ���� , �����·� db�� data�� ������

var Contact = mongoose.model("contact", contactSchema); //5
//contact: ���������� �÷����̸�,
// contactSchema�� model ����
// model & export

module.exports = Contact;
