var like = 0;
var dislike = 0;
function thumsup() {
    like = like + 1;
    document.getElementById("Like_id").innerHTML = like;

}
function thumsdown() {
    dislike = dislike + 1;
    document.getElementById("Dislike_id").innerHTML = dislike;
    if (like != 0) {
        like = like - 1;
        document.getElementById("Like_id").innerHTML = like;
    }
}