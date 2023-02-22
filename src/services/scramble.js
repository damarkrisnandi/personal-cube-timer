import scrambleGenerator from "rubiks-cube-scramble";

export class ScrambleService {
    getScramble() {
        const scrmbl = document.getElementById('scramble');
        scrmbl.innerText = scrambleGenerator();
        scrmbl.className = 'text-white'
    }
}