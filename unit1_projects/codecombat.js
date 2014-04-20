//CodeCombat.com

//Rescue mission
this.moveDown(); //move down
this.moveDown(); //move down
this.moveRight(); //move right
this.moveUp(); //move up
this.moveUp(); //move up
this.moveRight(); //move right
this.moveRight(); //move up right
this.moveDown(); //move up down
this.attackNearbyEnemy(); //attack!

// Grab the Mushroom
this.moveUp(); //move up
this.moveRight();//move right to get shroom
this.moveLeft();//move left
this.moveUp();//move up
this.attackNearbyEnemy();//attack!

//Drink me
this.moveRight(); //move right
this.attackNearbyEnemy(); //attack!
this.moveRight(); //move right
this.moveDown();//move right to pick up postion
this.moveUp();//move up
this.moveRight();//move right
this.attackNearbyEnemy();//Attack!

//Taunt the Guards
this.moveRight();// move right
this.bustDownDoor(); // save Phoebe
this.moveRight(); //get close to oger
this.say("Hey there!"); // taunt
this.moveLeft(26); // run back
this.say("Attack!"); //tell Phoebe to kill the oger
this.moveRight(); // move right
this.say("Follow me."); //get phoebe to follow
this.moveRight(22); //move right
this.moveUp (12); //move up
this.moveRight (12); // move right
this.say("Hey there!"); // taunt
this.moveDown (12); // get away down
this.moveRight(16); // get away left
this.moveUp (12); //get away up
this.moveRight(16);// get away right

//It's a Trap
this.moveDown(16); //get closer to ogre
this.say("Hi! Ugly!"); //taunt
this.moveUp(16); //run away

//Taunt
this.say("Hey Sexy!"); //taunt
this.say("Where you going you big blue beast?!"); //taunt
this.say("Who else would i be talking to?"); //taunt

//Cowardly Taunt
this.moveXY(50, 31); //test distance
this.moveXY(70, 10);  // run to a safe spot.
this.moveXY(70, 40); //get close to ogres
this.say("Poop!"); //taunt
this.moveXY(70, 10); //run back to safe spot

//Commanding Followers
this.moveXY(75, 63); //move to troops
this.say("Hail, friends!"); //greet troops
this.say("Follow me!"); // get troups to follow me
this.moveXY(67, 48); //move close to ogres
this.say("attack"); //tell troops to attack ogres

//Mobile Artillery 
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(49, 40); // Move into range
this.attackXY(67, 55); // Shoot once in the middle of the ogres
this.attackXY(60, 47); // Shoot agian to kill big ogre
this.attackXY(50, 69); // Shoot once in the middle of the ogres
this.attackXY(49, 51); // Shoot agian to kill big ogre