

var mongoose = require("mongoose");
var util  = require("../util"); // 1

var saveSchema = mongoose.Schema({
 //required: �ݵ����Է�, unique:�ߺ��ȵ�
 author:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
  link:{type:String},
  title:{type:String},
  job:{type:String},
  enddate:{type:String},
});


var SaveData = mongoose.model("saveData", saveSchema); //5
//contact: ���������� �÷����̸�,
// contactSchema�� model ����
// model & export

module.exports = SaveData;
