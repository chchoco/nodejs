var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('book', bookSchema);

//model은 데이터베이스에서 데이터를 읽고 생성하고 수정하는 프로그래밍 인터페이스를 정의합니다.
//첫번째 인자 book은 document가 사용할 collection의 단수적 표현이다.
//단수적 표현을 복수적형태로 변환하여 그걸 collection이름으로 사용합니다.
