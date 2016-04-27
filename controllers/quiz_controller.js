// GET /quizes/question
 exports.question = function(req, res, next) {

 	var answer = req.query.answer || '';
    res.render('quizes/question', {question: 'Capital de Italia', answer: answer});
 };
 
 // GET /quizes/answer
 exports.check = function(req, res, next) {

 	var answer = req.query.answer || '';
 	var result = ((answer === 'Roma') ? 'Correcta' : 'Incorrecta');
 	res.render('quizes/result', {result: result, answer: answer});
 };

 exports.author = function (req, res) {
 	res.render('author');
 };