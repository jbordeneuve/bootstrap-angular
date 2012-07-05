angular.module('player-resource', []).factory('playerResource', function () {
    function PlayerResourceStub() {
        this.registerPlayer = function (playerData) {
            return {
                id:123,
                firstName:playerData.firstName,
                lastName:playerData.lastName,
                color:playerData.color,
                scaryMovie:playerData.scaryMovie
            };
        };
    }
    return new PlayerResourceStub();
});

