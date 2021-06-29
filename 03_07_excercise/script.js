// create a laptop object

const laptop = {
    name : "Jason's laptop",
    weight = 200,
    color = "Silver",
    side_length:{
        left : 30,
        right : 30
    },
    openStatus: false,
    openlap: function (openStatus) {
        this.openlap = openStatus;
    },
    newSideLength: function (lengthLeft, lengthRight){
        this.newSideLength.left = lengthLeft;
        this.newSideLength.right = lengthRight;
    }
}