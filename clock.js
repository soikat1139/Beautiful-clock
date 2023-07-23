

function setup(){
    createCanvas(windowWidth,windowHeight)
    angleMode(DEGREES)
    
    
    
}

function draw(){
    background(0)


    let hr=hour()
    let min=minute()

    let sc=second()


   let mapSecond=(sc+1)*6
   let mapMinute=(min+1)*6
   let mapHour=(hr+1)*30
   
   

    translate(200,200)
    rotate(-90)

    noFill()

    strokeWeight(8)
    stroke(255,20,147)
    // arc(0,0,300,300,0,mapSecond)
    noFill()

    push()
    rotate(mapSecond)
    stroke(0,255,255)
    line(0,0,110,0)
    pop()

    push()
    rotate(mapMinute)
    stroke(255,20,147)
    line(0,0,120,0)
    pop()


    push()
    rotate(mapHour)
    stroke(255,69,0)
    line(0,0,120,0)
    pop()
    

    strokeWeight(5)
    stroke(0,255,0)
    // arc(0,0,285,285,0,mapMinute)

    strokeWeight(5)
    stroke(255,69,0)
    // arc(0,0,270,270,0,mapHour)
    push()
    stroke(255)
    ellipse(0,0,3,3)
    pop()
    




}




