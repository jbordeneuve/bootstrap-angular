angular.module('question-service', ['question-resource']).
    factory('questionService', function (questionResource) {
        return {
            resource:questionResource,
            getAllQuestions:function () {
                return this.resource.getAllQuestions();
            },
            checkAnswer:function (question_id, chosenAnswerId) {
                var correctAnswerId = this.resource.registerAnswer(question_id, chosenAnswerId);
                var correct = chosenAnswerId == correctAnswerId;
                return {
                    correct:correct,
                    correctAnswerId:correctAnswerId
                };
            },
            countCorrects:function (questions) {
                // reduce <3
                return questions.reduce(function (count, question) {
                    if (question.answered && question.correct) {
                        return ++count;
                    } else {
                        return count;
                    }
                }, 0);
            },
            countIncorrects:function (questions) {
                return questions.reduce(function (count, question) {
                    if (question.answered && !question.correct) {
                        return ++count;
                    } else {
                        return count;
                    }
                }, 0);
            },
            countRemaining:function (questions) {
                return questions.reduce(function (count, question) {
                    if (!question.answered) {
                        return ++count;
                    } else {
                        return count;
                    }
                }, 0);
            },
            getScoreBoard:function () {
                return this.resource.getScoreBoard();
            }
        };
    })
;