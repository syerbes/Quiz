var models = require('../models');


// GET /quizes
 exports.index = function(req, res, next) {
 	console.log('Param: ' + req.query.search);
 	if(req.query.search != undefined){
 		var busqueda = req.query.search;
 		busqueda = busqueda.replace(" ", "%");
 		console.log(busqueda);
 		models.Quiz.findAll({where: {question: {$like: '%' + busqueda +'%'}}}).then(function(resultado){
 				if(resultado != undefined){
 					res.render('quizes/index.ejs', { quizes: resultado});
 				}
 				else{
 					throw new Error("No encontrado");
 				}
 			}).catch(function(error){
 				next(error);
 			});
 	}
 	else{
 		models.Quiz.findAll()
 			.then(function(quizes) {
 				res.render('quizes/index.ejs', { quizes: quizes});
 			})
 				.catch(function(error) { next(error) });
 		}
 };

// GET /quizes/question
 exports.show = function(req, res, next) {
 	models.Quiz.findById(req.params.quizId)
 		.then(function(quiz){
 			if (quiz) {
 				var answer = req.query.answer || '';
 				res.render('quizes/show', {quiz: quiz, answer: answer});
 			}
 			else {
 				throw new Error('No existe ese quiz en la BBDD.');
 			}
 		}).catch(function(error) {
 			next(error);
 		});
 };
 
 // GET /quizes/answer
 exports.check = function(req, res, next) {
 	models.Quiz.findById(req.params.quizId)
 		.then(function(quiz){
 			if (quiz) {
 				var answer = req.query.answer || '';
 				var result = answer === quiz.answer ? 'Correcta' : 'Incorrecta';
 				res.render('quizes/result', { quiz: quiz, result: result, answer: answer});
 			}
 			else {
 				throw new Error('No existe ese quiz en la BBDD.');
 			}
 		}).catch(function(error) {
 			next(error);
 		});
 };

 exports.author = function (req, res) {
 	res.render('author');
 };