import r1 from './riddles/r1.js';
import r2 from './riddles/r2.js';
import r3 from './riddles/r3.js';
import r4 from './riddles/r4.js';
import r5 from './riddles/r5.js';
import r6 from './riddles/r6.js';
import r7 from './riddles/r7.js';
import Riddle from './clases/riddle.js';
import Player from './clases/player.js';

const r01 = new Riddle(r1)
const r02 = new Riddle(r2)
const r03 = new Riddle(r3)
const r04 = new Riddle(r4)
const r05 = new Riddle(r5)
const r06 = new Riddle(r6)
const r07 = new Riddle(r7)
// const p1 = new Player()
r01.ask()
r02.ask()
r03.ask()
r04.ask()
r05.ask()
r06.ask()
r07.ask()
// p1.showStats()