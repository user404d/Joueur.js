// This is a simple class to represent the Move object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc Contains all details about a Piece's move in the game.
 * @extends GameObject
 */
var Move = Class(GameObject, {
    /**
     * initializes a Move with basic logic as provided by the Creer code generator
     *
     * @memberof Move
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * The Piece captured by this Move, null if no capture.
         *
         * @name Move#captured
         * @type Piece
         */
        this.captured = null;

        /**
         * The file the Piece moved from.
         *
         * @name Move#fromFile
         * @type string
         */
        this.fromFile = "";

        /**
         * The rank the Piece moved from.
         *
         * @name Move#fromRank
         * @type number
         */
        this.fromRank = 0;

        /**
         * The Piece that was moved.
         *
         * @name Move#piece
         * @type Piece
         */
        this.piece = null;

        /**
         * The Piece type this Move's Piece was promoted to from a Pawn, empty string if no promotion occured.
         *
         * @name Move#promotion
         * @type string
         */
        this.promotion = "";

        /**
         * The standard algebraic notation (SAN) representation of the move.
         *
         * @name Move#san
         * @type string
         */
        this.san = "";

        /**
         * The file the Piece moved to.
         *
         * @name Move#toFile
         * @type string
         */
        this.toFile = "";

        /**
         * The rank the Piece moved to.
         *
         * @name Move#toRank
         * @type number
         */
        this.toRank = 0;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Move;
