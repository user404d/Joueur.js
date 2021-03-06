// This is a simple class to represent the Piece object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A chess piece.
 * @extends GameObject
 */
var Piece = Class(GameObject, {
    /**
     * initializes a Piece with basic logic as provided by the Creer code generator
     *
     * @memberof Piece
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * When the Piece has been captured (removed from the board) this is true. Otherwise false.
         *
         * @name Piece#captured
         * @type boolean
         */
        this.captured = false;

        /**
         * The file (column) coordinate of the Piece represented as a letter [a-h], with 'a' starting at the left of the board.
         *
         * @name Piece#file
         * @type string
         */
        this.file = "";

        /**
         * If the Piece has moved from its starting position.
         *
         * @name Piece#hasMoved
         * @type boolean
         */
        this.hasMoved = false;

        /**
         * The player that controls this chess Piece.
         *
         * @name Piece#owner
         * @type Player
         */
        this.owner = null;

        /**
         * The rank (row) coordinate of the Piece represented as a number [1-8], with 1 starting at the bottom of the board.
         *
         * @name Piece#rank
         * @type number
         */
        this.rank = 0;

        /**
         * The type of chess Piece this is, either: 'King', 'Queen', 'Knight', 'Rook', 'Bishop', or 'Pawn'.
         *
         * @name Piece#type
         * @type string
         */
        this.type = "";

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Moves the Piece from its current location to the given rank and file.
     *
     * @memberof Piece
     * @instance
     * @param {string} file - The file coordinate to move to. Must be [a-h].
     * @param {number} rank - The rank coordinate to move to. Must be [1-8].
     * @param {string} [promotionType] - If this is a Pawn moving to the end of the board then this parameter is what to promote it to. When used must be 'Queen', 'Knight', 'Rook', or 'Bishop'.
     * @returns {Move} - The Move you did if successful, otherwise null if invalid. In addition if your move was invalid you will lose.
     */
    move: function(file, rank, promotionType) {
        if(arguments.length <= 2) {
            promotionType = "";
        }

        return client.runOnServer(this, "move", {
            file: file,
            rank: rank,
            promotionType: promotionType,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Piece;
