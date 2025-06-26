export default

class Player{
    constructor(name){
        this.name = name
    }
    times = [];
    recordTime = function(){
        const Start = Date.now();
        const End = Date.now();
    }
    showStats = function(){
        console.log(`the total time is: ${End-Start}\nthe average of answer one riddle is: ${(End-Start)/5} `)
    }
}