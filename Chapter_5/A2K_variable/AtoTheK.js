 /* 
  * A to the K (to the Z): Computational Typography
  * Studio by K. Donnachie & A. Simionato, 2021
  * Helper sketch developed by Karen ann Donnachie  
  * to display & manipulate variable types in P5js Canvas 
  * To use: Customize CSS in index file 
  * [@fontface | font-variation-settings etc.]
  */
function updateVariableFont(mapper, lower, upper){
  pvar = map(mapper, lower, upper, 100, 900);
  let fs="'wght' "+ pvar;
  cnv.style('font-variation-settings', fs);
  textFont('vartext', typeSize);
}
