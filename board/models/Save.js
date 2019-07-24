

var mongoose = require("mongoose");
var util  = require("../util"); // 1

var saveSchema = mongoose.Schema({
 //required: �ݵ����Է�, unique:�ߺ��ȵ�
 author:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
  link:{type:String},
  title:{type:String},
  enddate:{type:String},
  job:{type:String},
});


var Contact = mongoose.model("save", saveSchema); //5
//contact: ���������� �÷����̸�,
// contactSchema�� model ����
// model & export

module.exports = Save;
