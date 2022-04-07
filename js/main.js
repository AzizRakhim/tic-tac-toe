// HOVER SECTION START

let elItem = document.querySelectorAll(".main-box");
let elCount = 0;

function callBack(){
  elItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let elX = item.querySelector(".bx-x");
      let elCircle = item.querySelector(".bx-circle");
      if(elCount == 0 && !item.classList.contains("orange")){
        elX.classList.remove("d-none");
      }
      if(elCount == 1 && !item.classList.contains("orange")){
        elCircle.classList.remove("d-none");
      } 
    });
  
    item.addEventListener("mouseleave", () => {
      let elX = item.querySelector(".bx-x");
      let elCircle = item.querySelector(".bx-circle");
      if(elCount == 0 && !item.classList.contains("orange")){
        elX.classList.add("d-none");
      } 
      if(elCount == 1 && !item.classList.contains("orange")){
        elCircle.classList.add("d-none");
      } 
    });
  });
}

callBack();

// HOVER SECTION END
// CLICK SECTION START

elItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    let elX = item.querySelector(".bx-x");
    let elCircle = item.querySelector(".bx-circle");
    if(elCount == 0){
      item.style.background = "#e85737";
      item.classList.add("orange")
      elX.style.display = "block";
      elX.style.color = "#f4f7f6";
      elCount++;
      elArr[index].name = "x";
      elArr[index].save = true;
      calculate();
    } else{
      item.style.background = "#ef9b1e";
      item.classList.add("orange");
      elCircle.style.display = "block";
      elCircle.style.color = "#f4f7f6";
      elCount--;
      elArr[index].name = "circle";
      elArr[index].save = true;
      calculate();
    }
  });
});

// CLICK SECTION END
// WINNER SECTION START

let elBox = document.querySelector(".end-box");
let elText = document.querySelector(".end-text");

function calculate(){
  if(elArr[0].name == "x" && elArr[1].name == "x" && elArr[2].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[0].name == "circle" && elArr[1].name == "circle" && elArr[2].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  } else if(elArr[3].name == "x" && elArr[4].name == "x" && elArr[5].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[3].name == "circle" && elArr[4].name == "circle" && elArr[5].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  } else if(elArr[6].name == "x" && elArr[7].name == "x" && elArr[8].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[6].name == "circle" && elArr[7].name == "circle" && elArr[8].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  } else if(elArr[0].name == "x" && elArr[4].name == "x" && elArr[8].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[0].name == "circle" && elArr[4].name == "circle" && elArr[8].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  } else if(elArr[2].name == "x" && elArr[4].name == "x" && elArr[6].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[2].name == "circle" && elArr[4].name == "circle" && elArr[6].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  } else if(elArr[0].name == "x" && elArr[3].name == "x" && elArr[6].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[0].name == "circle" && elArr[3].name == "circle" && elArr[6].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  } else if(elArr[1].name == "x" && elArr[4].name == "x" && elArr[7].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[1].name == "circle" && elArr[4].name == "circle" && elArr[7].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  } else if(elArr[2].name == "x" && elArr[5].name == "x" && elArr[8].name == "x"){
    elBox.style.display = "flex";
    elText.innerText = "Player 1 wins!";
  } else if(elArr[2].name == "circle" && elArr[5].name == "circle" && elArr[8].name == "circle"){
    elBox.style.display = "flex";
    elText.innerText = "Player 2 wins!";
  }
}

// WINNER SECTION END
// RESTART SECTION START

let elEndBtn = document.querySelector(".end-btn");

elEndBtn.addEventListener("click", () => {
  elBox.style.display = "none";

  elItem.forEach((item) => {
    let elX = item.querySelector(".bx-x");
    let elCircle = item.querySelector(".bx-circle");
    elX.style.display = "none";
    elCircle.style.display = "none";
    item.style.background = "#5baec0";
    item.classList.remove("orange");
    elCount = 0;
  });

  elArr.forEach((item) => {
    item.name = "";
    item.save = false;
  });

  callBack();
});



