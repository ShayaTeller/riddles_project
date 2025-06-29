export default

class Player{
    constructor(name){
        this.name = name
        this.times = [];


    }
    recordTime = function(riddel){
         const Start = Date.now()
         if(riddel!= riddel.ask()){   
            const End = Date.now();
            this.times.push({"id":riddel.id,"startTime":Start,"endTime":End,"time":(End-Start)})  
        }}

    showStats = function(){
        console.log(`the total time is: ${(this.times[0]["endTime"])*-1-(this.times[6]["startTime"])*-1}`)
    }
    riddleAvg = function(times){
        let result = 0;
        for (let index = 0; index < times.length; index++) {
             result += times[index]["time"];  
        }
        return result/times.length
    }
}
