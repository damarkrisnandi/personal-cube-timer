import { useEffect } from "react";
import { ScrambleService } from "../services/scramble";
 
export const AppScramble = () => { 
  useEffect(() => {
    (new ScrambleService()).getScramble();
  })
  return (
    <div>
      <p id="scramble"></p>
      {/* <button onClick={() => handleScramble}>Scramble!</button> */}
    </div>
  );
};
export default AppScramble;