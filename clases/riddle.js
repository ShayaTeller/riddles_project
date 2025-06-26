import PromptSync from 'prompt-sync';

export default
class Riddle{
    
    constructor(riddle){
        this.id = riddle.id;
        this.name = riddle.name;
        this.taskDescription = riddle.taskDescription;
        this.correctAnswer = riddle.correctAnswer;
        this.answer = null;


    }
    
    ask(){
        const prompt = PromptSync();
        while(this.answer !=this.correctAnswer){
            this.answer = prompt(this.taskDescription)
        }
        console.log("good job!")
    }
    
}   