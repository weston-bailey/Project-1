//pass to the wave machine as a 'null' function so it doesn't freak out
let dummyWave = function(){
  return;
}

let circleWave = function(){
  //for testing
  for(let i = 0; i < 50; i++){
    let rad = 15 + (Math.random() * 50);
    enemies[i] = new CircleWrap(randomInRange(0, canvasWidth),      //x
      randomInRange(spawn1X, spawn2X),                                  //y
        randomSignInRange(1, 5),                                        //speedX
          randomInRange(1, 5),                                          //speedY
            rad,                                                        //radius
              `#FFFFFF`);                                                //color white
  }  
}
//completely random polygons
let polygonWaveRandom = function(){
  for(let i = 0; i < 50; i++){
    enemies.push(new PolygonTemplate());    
  }
}

//falling triangles
let triangleCometWaveBig = function(){
  let boxColor = randomColorHex();
  for(let i = 0; i < randomInRange(30, 60); i++){
    enemies.push(new PolgonWrap( randomInRange(0, canvasWidth), //x random
        (i * 200) * -1 + spawn3X,                               //y random
          0,                                                    //speedX
            randomInRange(7, 9),                                //speedY
            randomInRange(25, 70),                              //size
                180,                                            //radans
                  .01,                                          //spinSpeed
                    3,                                          //sides
                      2,                                        //lineWidth
                        boxColor));                             //color
  }
}
//rows of squares with an offset y
let squareLineSlantWave = function() {
  //random color per wave 
  let boxColor = randomColorHex();
  //random speed per wave
  let spinningSpeed = randomSignInRange(.10, .12)
  for(let h = 0; h < randomInRange(3, 6); h++){
    for(let i = 0; i < 10; i++){
      enemies.push(new PolgonWrap( (i * 90),      //x inc with every box made
          (i * 40 + spawn1X) + (h * spawnHalfX),  //y inc with everybox made
            0,                                    //speedX fall straight down
              4,                                  //speedY
              50,                                 //size needs to be consistent
                  180,                            //radians so they all spin together
                    spinningSpeed,                //spinSpeed
                      4,                          //sides
                        4,                        //lineWidth
                          boxColor));             //color
    }
  }
}
//rows of squares missing on square per row
let squareLineWave = function() {
  //random per wave
  let boxColor = randomColorHex();
  let spinningSpeed = randomSignInRange(.10, .12)
  for(let h = 0; h < randomInRange(3, 6); h++){
    let noBox = Math.floor(randomInRange(1, 9)); //each row skips one box
    for(let i = 0; i < 10; i++){
      if(i != noBox){
        enemies.push(new PolgonWrap( (i * 90),  //x inc per box
            (spawn1X) + (h * spawnHalfX),       //y same for each box row
              0,                                //speedX falls straight down
                4,                              //speedY
                  50,                           //size
                    180,                        //radians
                      spinningSpeed,            //spinSpeed
                        4,                      //sides
                          4,                    //lineWidth
                            boxColor));         //color random per wave
      }
    }
  }
}
