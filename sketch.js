let lastMin;
function setup() {
    createCanvas(600,600);
    angleMode(DEGREES);
}

function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();
    
    background(225);
    
    let red_h, blue_h, green_h;
    let red_m, blue_m, green_m;
    let red_s, blue_s, green_s;
  
    let h_r = 255, h_g = 255, h_b = 0;
    let h_r2 = 255, h_g2 = 140, h_b2 = 0;
    let h_r3 = 184, h_g3 = 9, h_b3 = 0;
    
    let m_r = 255, m_g = 200, m_b = 224;
    let m_r2 = 199, m_g2 = 100, m_b2 = 200;
    let m_r3 = 75, m_g3 = 0, m_b3 = 130;
    
    let s_r = 2, s_g = 206, s_b = 250;
    let s_r2 = 30, s_g2 = 144, s_b2 = 255;
    let s_r3 = 25, s_g3 = 25, s_b3 = 112;
    
    if (hr < 8) {
      red_h = map(hr, 16, 24, h_r3, h_r);
      blue_h = map(hr, 16, 24, h_b3, h_b);
      green_h = map(hr, 16, 24, h_g3, h_g);

      red_m = map(hr, 16, 24, m_r3, m_r);
      blue_m = map(hr, 16, 24, m_b3, m_b);
      green_m = map(hr, 16, 24, m_g3, m_g);

      red_s = map(hr, 16, 24, s_r3, s_r);
      blue_s = map(hr, 16, 24, s_b3, s_b);
      green_s = map(hr, 16, 24, s_g3, s_g);
      
    } else if (hr < 16) {
      red_h = map(hr, 0, 8, h_r, h_r2);
      blue_h = map(hr, 0, 8, h_b, h_b2);
      green_h = map(hr, 0, 8, h_g, h_g2);

      
      red_m = map(hr, 0, 8, m_r, m_r2);
      blue_m = map(hr, 0, 8, m_b, m_b2);
      green_m = map(hr, 0, 8, m_g, m_g2);

      red_s = map(hr, 0, 8, s_r, s_r2);
      blue_s = map(hr, 0, 8, s_b, s_b2);
      green_s = map(hr, 0, 8, s_g, s_g2);
      
    } else {
      red_h = map(hr, 8, 16, h_r2, h_r3);
      blue_h = map(hr, 8, 16, h_b2, h_b3);
      green_h = map(hr, 8, 16, h_g2, h_g3);

      red_m = map(hr, 8, 16, m_r2, m_r3);
      blue_m = map(hr, 8, 16, m_b2, m_b3);
      green_m = map(hr, 8, 16, m_g2, m_g3);

      red_s = map(hr, 8, 16, s_r2, s_r3);
      blue_s = map(hr, 8, 16, s_b2, s_b3);
      green_s = map(hr, 8, 16, s_g2, s_g3);
    }
    
    // hours
    push();
    fill(red_h,green_h,blue_h);
    let side_h = width/6;
    let time_h = hr % 6;
    let pos_h, ang_h;
    if (hr >= 0 && hr < 6) {
      // hours top
      pos_h = map(time_h, 0, 6, 0, width);
      ang_h = map(min, 0, 59, -90, -180);
      translate(pos_h, 0);
    } else if (hr >= 6 && hr < 12) {
      // hours right
      pos_h = map(time_h, 0, 6, 0, height);
      ang_h = map(min, 0, 59, 0, -90);
      translate(width, pos_h);
    } else if (hr >= 12 && hr < 18) {
      // hours bottom
      pos_h = map(time_h, 0, 6, width, 0);
      ang_h = map(min, 0, 59, 90, 0);
      translate(pos_h, height);
    } else {
      // hours left
      pos_h = map(time_h, 0, 6, height, 0);
      ang_h = map(min, 0, 59, 180, 90);
      translate(0, pos_h);
    }
    rotate(ang_h);
    rect(0, 0, -side_h, -side_h);
    pop();
    
    // minutes
    push();
    fill(red_m,green_m,blue_m);
    let side_m = width/15;
    let time_m = min % 15;
    let ang_m, pos_m;
    if (min >= 0 && min < 15) {
      // minutes top
      pos_m = map(time_m, 0, 15, 0, width);
      ang_m = map(sec, 0, 59, -90, -180);
      translate(pos_m, 0);
    } else if (min >= 15 && min < 30) {
      // minutes right
      pos_m = map(time_m, 0, 15, 0, height);
      ang_m = map(sec, 0, 59, 0, -90);
      translate(width, pos_m);
    } else if (min >= 30 && min < 45) {
      // minutes bottom
      pos_m = map(time_m, 0, 15, width, 0);
      ang_m = map(sec, 0, 59, 90, 0);
      translate(pos_m, height);
    } else {
      // minutes left
      pos_m = map(time_m, 0, 15, height, 0);
      ang_m = map(sec, 0, 59, 180, 90);
      translate(0, pos_m);
    }
    rotate(ang_m);
    rect(0, 0, -side_m, -side_m);
    pop();
  
    // seconds
    push();
    fill(red_s,green_s,blue_s);
    let side = width/60;
    let edge = min % 4;
    let ms = Date.now();
    let x = ms % 1000;
    let ang, pos_s;
    if (edge == 0) {
      // seconds top
      pos_s = map(sec, 0, 60, 0, width);
      ang = map(x, 0, 1000, -90, -180);
      translate(pos_s, 0);
    } else if (edge == 1) {
      // seconds right
      pos_s = map(sec, 0, 60, 0, height);
      ang = map(x, 0, 1000, 0, -90);
      translate(width, pos_s);
    } else if (edge == 2) {
      // seconds bottom
      pos_s = map(sec, 0, 60, width, 0);
      ang = map(x, 0, 1000, 90, 0);
      translate(pos_s, height);
    } else {
      // seconds left
      pos_s = map(sec, 0, 60, height, 0);
      ang = map(x, 0, 1000, 180, 90);
      translate(0, pos_s);
    }
    rotate(ang);
    rect(0, 0, -side, -side);
    pop();
    
    if (min !== lastMin) {
      console.log(min);
      lastMin = min;
    }
    
    noStroke();
}