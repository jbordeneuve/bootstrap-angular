angular.module('player-service', ['player-resource']).factory('playerService', function (playerResource) {
    return {
        resource:playerResource,
        savePlayer:function (playerData) {
            this.registeredPlayer = this.resource.registerPlayer(playerData);
            return this.registeredPlayer;
        },
        getPlayer:function () {
            return this.registeredPlayer;
        },
        getFullName:function () {
            var player = this.registeredPlayer;
            if (player) {
                return player.firstName + " " + player.lastName;
            }
        }
    }
});