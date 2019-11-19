function setup()
{
  var colors = [color(255,0,0), color(0,255,0), color(0,0,255), color(255,255,0), color(255,0,255), color(0,255,255), color(128,128,128), color(255,165,0), color(0,0,0)];

  createCanvas(600,450);
  background(0);
  noStroke();


  fill(255);
  rect(width-60,0,800,height);

  for (i = 0; i < colors.length; i++)
  {
    fill(colors[i]);
    circle(580,30+(i*40),25);
  }

    square(565, 20+(i*40),25);


}

function draw()
{
}

function mousePressed()
{
  var colors = [color(255,0,0), color(0,255,0), color(0,0,255), color(255,255,0), color(255,0,255), color(0,255,255), color(128,128,128), color(255,165,0), color(0,0,0)];

  if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15 && mouseY <= 40)
  {
    fill(colors[0]);
    print("c0");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*2 && mouseY <= 40*2)
  {
    fill(colors[1]);
    print("c1");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*3 && mouseY <= 40*3)
  {
    fill(colors[2]);
    print("c2");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*4 && mouseY <= 40*4)
  {
    fill(colors[3]);
    print("c3");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*5 && mouseY <= 40*5)
  {
    fill(colors[4]);
    print("c4");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*6 && mouseY <= 40*6)
  {
    fill(colors[5]);
    print("c5");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*7 && mouseY <= 40*7)
  {
    fill(colors[6]);
    print("c6");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*8 && mouseY <= 40*8)
  {
    fill(colors[7]);
    print("c7");
  }
  else if ((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*9 && mouseY <= 40*9)
  {
    fill(colors[8]);
    print("c8");
  }
  else if((mouseX >= 560 && mouseX <= 590) && mouseY >= 15*10 && mouseY <= 40*10)
  {
    background(0);
    //stroke();
    fill(255);
    rect(width-60,0,800,height);

    for (i = 0; i < colors.length; i++)
    {
      fill(colors[i]);
      circle(580,30+(i*40),25);
    }

      square(565, 20+(i*40),25);

    print("reset");
  }
}

function mouseDragged()
{
  circle(mouseX,mouseY,5);
}
