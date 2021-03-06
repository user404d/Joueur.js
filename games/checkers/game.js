// This is a simple class to represent the Game object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var BaseGame = require(__basedir + "/joueur/baseGame");

// game object classes
var Checker = require("./checker");
var GameObject = require("./gameObject");
var Player = require("./player");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc The simple version of American Checkers. An 8x8 board with 12 checkers on each side that must move diagonally to the opposing side until kinged.
 * @extends BaseGame
 */
var Game = Class(BaseGame, {
    /**
     * initializes a Game with basic logic as provided by the Creer code generator
     *
     * @memberof Game
     * @private
     */
    init: function() {
        BaseGame.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

        /**
         * The name of the game.
         */
        this.name = "Checkers";


        /**
         * The height of the board for the Y component of a checker.
         *
         * @name Game#boardHeight
         * @type number
         */
        this.boardHeight = 0;

        /**
         * The width of the board for X component of a checker.
         *
         * @name Game#boardWidth
         * @type number
         */
        this.boardWidth = 0;

        /**
         * The checker that last moved and must be moved because only one checker can move during each players turn.
         *
         * @name Game#checkerMoved
         * @type Checker
         */
        this.checkerMoved = null;

        /**
         * If the last checker that moved jumped, meaning it can move again.
         *
         * @name Game#checkerMovedJumped
         * @type boolean
         */
        this.checkerMovedJumped = false;

        /**
         * All the checkers currently in the game.
         *
         * @name Game#checkers
         * @type Array.<Checker>
         */
        this.checkers = [];

        /**
         * The player whose turn it is currently. That player can send commands. Other players cannot.
         *
         * @name Game#currentPlayer
         * @type Player
         */
        this.currentPlayer = null;

        /**
         * The current turn number, starting at 0 for the first player's turn.
         *
         * @name Game#currentTurn
         * @type number
         */
        this.currentTurn = 0;

        /**
         * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
         *
         * @name Game#gameObjects
         * @type Object.<string, GameObject>
         */
        this.gameObjects = {};

        /**
         * The maximum number of turns before the game will automatically end.
         *
         * @name Game#maxTurns
         * @type number
         */
        this.maxTurns = 0;

        /**
         * List of all the players in the game.
         *
         * @name Game#players
         * @type Array.<Player>
         */
        this.players = [];

        /**
         * A unique identifier for the game instance that is being played.
         *
         * @name Game#session
         * @type string
         */
        this.session = "";


        this._gameObjectClasses = {
            "Checker": Checker,
            "GameObject": GameObject,
            "Player": Player,
        };

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Game;
