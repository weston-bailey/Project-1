//triangle ship for player
class Ship {
  constructor(){
    this.speed = 5;
    this.noseX = canvasWidth * .5; //start in middle (ship is draw from nose)
    this.noseY = canvasHeight * .5;
    this.movingX = false;
    this.movingY = false;
    this.velocityX = 0;
    this.velocityY = 0;
    this.color = `#faebd7`; //`antiquewhite`
    this.sheildColor =  `173, 216, 230`; //`lightblue`
    this.sheildColorAlpha = 1;  //presently unsued, but could be modified for effect
    this.sheild = false;
    this.sheildLevel = 4; //draw width for line and level of how much sheild is left
    this.isGarbage = false;
  }
  update(directionX, directionY){
    //update postion and make exhaust if player is moving ship
    if(this.movingY){
      this.velocityY = directionY * 3;
      this.noseY += this.speed * directionY;
      for(let i = 0; i < 3; i++){
        exhuastParticles.push(new Exhaust);
      }
    }
    if(this.movingX){
      this.velocityX = directionX * 3;
      this.noseX += this.speed * directionX;
      exhuastParticles.push(new Exhaust);
    }
    //move ship to other side of screen when it reaches the side
    if(this.noseX > canvasWidth){                     
      this.noseX = 0;
    }       
    if(this.noseX < 0){                     
      this.noseX = canvasWidth;
    }  
    //restrict movement to height boundaries of screen     
    if(this.noseY > (canvasHeight - 45)){                    
      this.noseY = (canvasHeight - 45);
    }       
    if(this.noseY < 0){                     
      this.noseY = 0;
    } 
    //rate that velocity wears off
    this.velocityX *= 0.999;                             
    this.velocityY *= 0.999;   
    //influence position with velocity
    this.noseX += this.velocityX;
    this.noseY += this.velocityY;
  }
  draw(){
    //draw a traingle
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.noseX, this.noseY);
    ctx.lineTo(this.noseX - 15, this.noseY + 45);
    ctx.lineTo(this.noseX + 15, this.noseY + 45);
    ctx.closePath();
    ctx.stroke();
    //draw sheild if sheild is active
    if(this.sheild && this.sheildLevel > 0){
      ctx.lineWidth = this.sheildLevel; //shield gets smaller when hit
      ctx.strokeStyle = `rgba(${this.sheildColor}, ${this.sheildColorAlpha})`;
      ctx.beginPath();
      ctx.arc(this.noseX, this.noseY + 25, 45, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.stroke();
    }
  }
  //for debug
  drawCollisionRadius(){
    ctx.lineWidth = 1;
    ctx.strokeStyle = `white`;
    ctx.beginPath();
    ctx.arc(this.noseX, this.noseY + 30, 15, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
  }
  makeDebris(){
    //make alot of debris for ship explosion
    let amount = randomInRange(80, 100);
    for (let i = 0; i < amount; i++){
      debrisParticles.push(new Debris(this.noseX, this.noseY, .001, hexToRGBArray(this.color)));
    }
    //reactor blowout XD
    amount = randomInRange(64, 90);
    for(let i = 0; i < amount; i++){
      exhuastParticles.push(new Exhaust(this.noseX, this.noseY + 30, randomSignInRange(.1, 5), randomSignInRange(.1, 5)));
    }
    //make a little rainbow explosion
    amount = randomInRange(32, 64);
    for (let i = 0; i < amount; i++){
      debrisParticles.push(new Debris(this.noseX + randomInRange(5, 30), this.noseY + randomInRange(5, 60)));
    }
    //make a little rainbow explosion
    amount = randomInRange(32, 64);
    for (let i = 0; i < amount; i++){
      debrisParticles.push(new Debris(this.noseX + randomInRange(5, 30), this.noseY + randomInRange(5, 60)));
    }
    //make a little rainbow explosion
    amount = randomInRange(32, 64);
    for (let i = 0; i < amount; i++){
      debrisParticles.push(new Debris(this.noseX + randomInRange(5, 30), this.noseY + randomInRange(5, 60)));
    }
    //make a little rainbow explosion
    amount = randomInRange(32, 64);
    for (let i = 0; i < amount; i++){
      debrisParticles.push(new Debris(this.noseX, this.noseY, .01));
    }
  }
}