function MainCtrl($scope, playerService, questionService) {
    $scope.playerName = function () {
        return playerService.getFullName();
    };
    $scope.player = function () {
        return playerService.getPlayer();
    };
    $scope.correctAnswers = function () {
        return questionService.countCorrects();
    };
    $scope.incorrectAnswers = function () {
        return questionService.countIncorrects();
    };
}
;

function SetupCtrl($scope, $location, playerService) {
    $scope.save = function (player) {
        playerService.savePlayer(player);
        $location.path("/start");
    };
    $scope.valid = function (player) {
        return false;
    };
    $scope.when = function (booleanExpr, trueValue, falseValue) {
        return booleanExpr ? trueValue : falseValue;
    };
    $scope.isInvalid = function (field) {
        return field.$dirty && field.$invalid;
    };
}
;

function QuestionCtrl($scope, questionService) {
    $scope.questions = questionService.getAllQuestions();

    $scope.currentIndex = 0;
    $scope.current = $scope.questions[0];

    $scope.remaining = function () {
        return questionService.countRemaining($scope.questions);
    };

    $scope.correctsCount = function () {
        return questionService.countCorrects($scope.questions);
    };

    $scope.incorrectsCount = function () {
        return questionService.countIncorrects($scope.questions);
    };

    $scope.when = function (booleanExpr, trueValue, falseValue) {
        return booleanExpr ? trueValue : falseValue;
    };

    $scope.isCurrent = function (question) {
        return question.question_id == $scope.current.question_id;

    };

    $scope.checkAnswer = function (chosenAnswerId) {
        var current = $scope.current;
        var checkResult = questionService.checkAnswer(current.question_id, chosenAnswerId);
        current.correct = checkResult.correct;
        current.answered = true;
        var correctAnswer = current.answers.filter(function (answer) {
            return answer.answer_id == checkResult.correctAnswerId
        })[0];
        current.correctAnswer = correctAnswer;
    };

    $scope.hasNextQuestion = function () {
        return $scope.currentIndex < $scope.questions.length - 1;
    };

    $scope.nextQuestion = function () {
        if ($scope.hasNextQuestion()) {
            $scope.currentIndex = $scope.currentIndex + 1;
            $scope.current = $scope.questions[$scope.currentIndex];
        }
    };
}
;

function ScoresCtrl($scope, questionService) {
    $scope.getScores = function(){
        var board = questionService.getScoreBoard();
        return board;
    };
    $scope.when = function (booleanExpr, trueValue, falseValue) {
        return booleanExpr ? trueValue : falseValue;
    };
}
;


