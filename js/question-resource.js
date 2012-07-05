angular.module('question-resource', []).
    factory('questionResource', function () {
        function QuestionResourceStub() {
            this.questions = [
                {question_id:"question1", title:"Math (basique)", text:"Combien font deux plus deux?", answers:[
                    {answer_id:"answer1", text:"un"},
                    {answer_id:"answer2", text:"deux"},
                    {answer_id:"answer3", text:"trois"},
                    {answer_id:"answer4", text:"quatre"}
                ]},
                {question_id:"question2", title:"Math (pro)", text:"Combien font trois plus trois?", answers:[
                    {answer_id:"answer1", text:"un"},
                    {answer_id:"answer2", text:"trois"},
                    {answer_id:"answer3", text:"six"}
                ]},
                {question_id:"question3", title:"Geographie", text:"Quelle est la plus grande ile de la Méditerranée?", answers:[
                    {answer_id:"answer1", text:"La Sicile"},
                    {answer_id:"answer2", text:"La Corse"},
                    {answer_id:"answer3", text:"La Sardaigne"}
                ]},
                {question_id:"question4", title:"Cuisine", text:"Quelle est la plus chère des épices ?", answers:[
                    {answer_id:"answer1", text:"Le safran"},
                    {answer_id:"answer2", text:"Le cumin"},
                    {answer_id:"answer3", text:"L'estragon"}
                ]},
                {question_id:"question5", title:"Vieux", text:"Qui a envoyé le 1er message télégraphique en 1844 ?", answers:[
                    {answer_id:"answer1", text:"Samuel Morse"},
                    {answer_id:"answer2", text:"John Morse"},
                    {answer_id:"answer3", text:"Alexandre Morse"}
                ]}
            ];
            this.correctAnswers = {
                "question1":"answer4",
                "question2":"answer3",
                "question3":"answer2",
                "question4":"answer1",
                "question5":"answer2"
            };
            this.scoreBoard = [];

            this.getAllQuestions = function () {
                return this.questions;
            };
            this.registerAnswer = function (questionId, chosenAnswerId) {
                var correctAnswerId = this.correctAnswers[questionId];
                var question = this.questions.filter(function (item) {
                    return item.question_id == questionId;
                })[0];
                var score = {};
                score.question_title = question.title;
                score.question_text = question.text;
                score.correct = correctAnswerId == chosenAnswerId;
                score.chosen_answer_text = question.answers.filter(function (item) {
                    return item.answer_id == chosenAnswerId;
                })[0].text;
                if (!score.correct) {
                    score.correct_answer_text = question.answers.filter(function (item) {
                        return item.answer_id == correctAnswerId;
                    })[0].text;
                }

                this.scoreBoard.push(score);
                return correctAnswerId;
            };
            this.getScoreBoard = function () {
                return this.scoreBoard;
            }

        }

        return new QuestionResourceStub();
    })
;

