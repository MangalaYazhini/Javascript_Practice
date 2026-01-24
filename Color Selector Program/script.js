
const darkRadio = document.getElementById("darkRadio");
const lightRadio = document.getElementById("lightRadio");
const submitBtn = document.getElementById("submitBtn");
const resultTag = document.getElementById("resultTag");

const redColor = document.getElementById("redColor");
const yellowColor = document.getElementById("yellowColor");
const greenColor = document.getElementById("greenColor");
const cyanColor = document.getElementById("cyanColor");
const blueColor = document.getElementById("blueColor");
const magentaColor = document.getElementById("magentaColor");

const colorCode = {'redColor' : 0 ,
                   'yellowColor' : 60, 
                   'greenColor' : 120, 
                   'cyanColor' : 180, 
                   'blueColor' :240,
                   'magentaColor' : 300
}; 

/*
    0 or 360: Red
    60: Yellow
    120: Green
    180: Cyan
    240: Blue
    300: Magenta
*/

/*
  Saturation : The intensity or purity of the color.
  Range: 0% to 100%.
  Key Values:
    0%: A shade of gray (completely desaturated).
    100%: Full color (most vibrant). 
*/

/* 
  Lightness : The brightness of the color.
  Range: 0% to 100%.
  Key Values:
    0%: Black (no light).
    50%: Normal (neutral/true color).
    100%: White (full light). 
*/

submitBtn.addEventListener("click", () => {
  
  if(!darkRadio.checked && !lightRadio.checked )
  {
    resultTag.innerHTML = "Please Select a Mode !";
    return; 
  }

  if(!redColor.checked && !yellowColor.checked && 
     !greenColor.checked && !cyanColor.checked && 
     !blueColor.checked && !magentaColor.checked)
  {
    resultTag.textContent = "Please Select a Color !";
    return; 
  }



  let saturation ; 
  let lightness ; 
  if(darkRadio.checked)
  {
    console.log('Dark mode is checked'); 
    saturation = 90;
    lightness = 10; 
    document.body.style.color = "white"; 
  
  }
  if(lightRadio.checked)
  {
    saturation = 80; 
    lightness = 85; 
    document.body.style.color = "black";
    
  }
    

  let checkedColors = []; 
  if(redColor.checked)
    checkedColors.push('redColor')
  if(yellowColor.checked)
    checkedColors.push('yellowColor')
  if(greenColor.checked)
    checkedColors.push('greenColor')
  if(cyanColor.checked)
    checkedColors.push('cyanColor')
  if(blueColor.checked)
    checkedColors.push('blueColor')
  if(magentaColor.checked)
    checkedColors.push('magentaColor')


  

  if(checkedColors.length === 0)
  {
    resultTag.textContent = "Please Select a Color !";
    return; 
  }

  let x = 0;
  let y = 0;

  for (let color of checkedColors) {
    const angle = colorCode[color] * Math.PI / 180;
    x += Math.cos(angle);
    y += Math.sin(angle);
  }

  let hue = Math.atan2(y, x) * 180 / Math.PI;
  if (hue < 0) hue += 360;
    

  console.log(`hue = ${hue}`);
  document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  console.log(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  resultTag.textContent = "";
  

  
  // document.body.style.backgroundColor = `hsl(${colorVar}, 10%, 30%)`;
  // document.body.style.backgroundColor = "red";

} )



