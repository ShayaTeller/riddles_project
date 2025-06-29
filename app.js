
import AllRiddles from './riddlesindex.js';
import Riddle from './clases/riddle.js';
import Player from './clases/player.js';
import PromptSync from 'prompt-sync';



const prompt = PromptSync();
const name = prompt(`enter yor name!`)
const pley1 = new Player(name)


const riddleList = AllRiddles
riddleList.forEach(element => {
    const riddle1 = new Riddle(element);
    pley1.recordTime(riddle1)
    riddle1.ask()
});
const res = pley1.riddleAvg(pley1.times)
    console.log(`hello pleyr: ${pley1.name}\n you win!\nlook of your information:`)
    console.log(`the average of answer one riddle is:${res}`)
pley1.showStats()
















// const p1 = new Player()


// r03.ask()
// r04.ask()
// r05.ask()
// r06.ask()
// r07.ask()
// p1.showStats()



// r01.ask()
// r02.ask()