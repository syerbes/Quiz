// GET /quizes/question
 exports.question = function(req, res, next) {
    res.render('quizes/question', {question: 'Capital de Italia'});
 };
 
 // GET /quizes/answer
 exports.check = function(req, res, next) {
 	var result = req.query.answer === 'Roma' ? 'Correcta' : 'Incorrecta';
 	res.render('quizes/result', {result: result});
 };