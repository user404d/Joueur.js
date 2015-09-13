// Generated by Creer at 04:00AM on September 13, 2015 UTC, git hash: '3f0e08b46657dff30d7c082da7471381f8a1ab62'
// This is where you build your AI for the Checkers game.

var Class = require(__basedir + "/joueur/class");
var BaseAI = require(__basedir + "/joueur/baseAI");

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
// <<-- /Creer-Merge: requires -->>

/**
 * This is the class to play the Checkers game. This is where you should build your AI.
 * @class
 */
var AI = Class(BaseAI, {
    /**
     * this is the name you send to the server to play as.
     */
    getName: function() {
        // <<-- Creer-Merge: getName -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        return "Checkers JavaScript Player";
        // <<-- /Creer-Merge: getName -->>
    },

    /**
     * this is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
     */
    start: function() {
        // <<-- Creer-Merge: start -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        this.checkersMap = [];
        for(var x = 0; x < this.game.boardWidth; x++) {
            this.checkersMap[x] = [];
        }
        // <<-- /Creer-Merge: start -->>
    },

    /**
     * this is called every time the game's state updates, so if you are tracking anything you can update it here.
     */
    gameUpdated: function() {
        // <<-- Creer-Merge: gameUpdated -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        for(var x = 0; x < this.game.boardWidth; x++) {
            this.checkersMap[x].empty();
        }

        for(var i = 0; i < this.game.checkers.length; i++) {
            var checker = this.game.checkers[i];
            this.checkersMap[checker.x][checker.y] = checker;
        }
        // <<-- /Creer-Merge: gameUpdated -->>
    },

    /**
     * this is called when the game ends, you can clean up your data and dump files here if need be
     *
     * @param {boolean} won - true means you won, false means you lost
     * @param {string} reason - the human readable string explaining why you won or lost
     */
    ended: function(won, reason) {
        // <<-- Creer-Merge: ended -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // pass
        // <<-- /Creer-Merge: ended -->>
    },



    /**
     * This is called every time the AI is asked to respond with a command during their turn
     *
     * @returns {boolean} represents if you want to end your turn. true means end the turn, false means to keep your turn going and re-call runTurn()
     */
    runTurn: function() {
        // <<-- Creer-Merge: runTurn -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        while(true) {
            var moveData = this.findCheckerToMove();

            if(moveData) {
                moveData.checker.move(moveData.x, moveData.y);
            }
            else {
                break;
            }
        }

        return true;
        // <<-- /Creer-Merge: runTurn -->>
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    shuffle: function(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },

    findCheckerToMove: function() {
        var myCheckers = this.player.checkers.clone();
        var forceJump = false;

        if(this.game.checkerMoved) {
            if(this.game.checkerMovedJumped) { // then it is valid to move again
                forceJump = true;
                myCheckers = [ this.game.checkerMoved ];
            }
            else { // it moved but did not jump, so it can't move again
                return;
            }
        }

        this.shuffle(myCheckers);

        var yDirection = this.player.yDirection;

        for(var i = 0; i < myCheckers.length; i++) {
            var checker = myCheckers[i];

            var neighbors = [];
            neighbors.push({x: checker.x + 1, y: checker.y + yDirection});
            neighbors.push({x: checker.x - 1, y: checker.y + yDirection});

            if(checker.kinged) {
                neighbors.push({x: checker.x + 1, y: checker.y - yDirection});
                neighbors.push({x: checker.x - 1, y: checker.y - yDirection});
            }

            this.shuffle(neighbors);

            while(neighbors.length > 0) {
                var neighbor = neighbors.pop();

                if(neighbor.x >= this.game.boardWidth || neighbor.x < 0 || neighbor.y >= this.game.boardHeight || neighbor.y < 0) {
                    continue; // because we can't use this neighor as it is out of bounds
                }

                if(forceJump) { // then we have to jump
                    if(neighbor.jump) {// we can jump!
                        return {
                            checker: checker,
                            x: neighbor.x,
                            y: neighbor.y,
                        };
                    }
                }
                else {
                    var jumpingChecker = this.checkersMap[neighbor.x][neighbor.y];
                    if(jumpingChecker) { // we have to jump it, so add the next tile over
                        if(jumpingChecker.owner !== checker.owner) {
                            if(!neighbor.jump) {
                                var dx = neighbor.x - checker.x;
                                var dy = neighbor.y - checker.y;
                                
                                neighbors.push({
                                    jump: true,
                                    x: neighbor.x + dx,
                                    y: neighbor.y + dy,
                                });
                            }
                        }
                    }
                    else { // it's valid!
                        return {
                            checker: checker,
                            x: neighbor.x,
                            y: neighbor.y,
                        };
                    }
                }
            }
        }
    },
    //<<-- /Creer-Merge: functions -->>

});

module.exports = AI;
