const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (direct = true){
    this.direct = direct;
    this.alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    this.matrix = Array(this.alphas.length).fill([]);
    for (let i = 0; i < this.alphas.length; i += 1){
      this.matrix[i] = Array(this.alphas.length).fill('');
      for (let j = 0; j < this.alphas.length; j += 1){
        this.matrix[i][j] = this.alphas[(i + j) % this.alphas.length];
      }
    }

  }


  encrypt(message, key) {
    try{
      if(message === undefined || key === undefined) throw new Error("Incorrect arguments!");
      
      const toEncrypt = message.toUpperCase().split("");
      const result = [];
      const upperKey = key.toUpperCase();
      let garbage = 0;
      toEncrypt.forEach((item, index) => {
        if (this.alphas.includes(item)){
          let i = this.alphas.indexOf(item);
          let j = this.alphas.indexOf(upperKey[(index - garbage) % key.length]);
          result.push(this.matrix[i][j]);
          return this.matrix[i][j];
        }else{
            result.push(item);
            garbage += 1;
        } 
      });
      if (this.direct) return result.join('');
      else return result.reverse().join('');
    }
    catch (err){
      throw new Error("Incorrect arguments!");
    }
  }

  
  decrypt(message, key) {
    try{
      if(message === undefined || key === undefined) throw new Error("Incorrect arguments!");
      
      const toEncrypt = message.toUpperCase().split("");
      const result = [];
      const upperKey = key.toUpperCase();
      let garbage = 0;
      toEncrypt.forEach((item, index) => {
        if (this.alphas.includes(item)){
          let i = this.alphas.indexOf(upperKey[(index - garbage) % key.length]);
          let j = this.matrix[i].indexOf(item);
          result.push(this.alphas[j]);
          return this.alphas[j];
        }else{
            result.push(item);
            garbage += 1;
        } 
      });
      if (this.direct) return result.join('');
      else return result.reverse().join('');
    }
    catch (err){
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
