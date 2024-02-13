const dragAndDropFlavors = (lenDataFlavor, firstCardWidth, posFlavorImg) => {
  const $slider = document.querySelector(".slider");
  const $arrows = document.querySelectorAll("#arrow");
  const $arrowLeft = document.querySelector(".arrow__left");
  const $arrowRight = document.querySelector(".arrow__right");
  
  let isDragging = false; 
  let startX = 0;
  let startScrollLeft = 0;
  let pos = posFlavorImg;
  
  let windowWithCurrent = window.innerWidth  
  
  const resizeWidth = () => {
    firstCardWidth = $slider.querySelector(".card-flavor").offsetWidth;
    $slider.scrollLeft = firstCardWidth * pos;
    windowWithCurrent = window.innerWidth;
  }

  $arrows.forEach(arrow => {
    arrow.addEventListener("click", ({target}) => {
      
      if (target.className.includes("arrow__left")) {
        $slider.scrollLeft -=  firstCardWidth;
        if ($slider.scrollLeft <= firstCardWidth) $arrowLeft.style.display = "none";
        else if ($slider.scrollLeft >= firstCardWidth * (lenDataFlavor-3)) $arrowRight.style.display = "flex"
        pos--;
      }
      else if (target.className.includes("arrow__right")) {
        $slider.scrollLeft +=  firstCardWidth;
        if ($slider.scrollLeft == 0) $arrowLeft.style.display = "flex";
        else if ($slider.scrollLeft >= (firstCardWidth * (lenDataFlavor-2)-5)) $arrowRight.style.display = "none"
        pos++;
      }
    })
  })


  const dragStart = e => {
    if (!e.target.className.includes("modal-closed") && windowWithCurrent <= 768) {
      isDragging = true;
      $slider.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = $slider.scrollLeft;
    }
  }

  const draggIng = e => {
    if (!e.target.className.includes("modal-closed") && windowWithCurrent <= 768) {
      if (!isDragging) return;
      $slider.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
  }
  const dragStop = e => {
    if (!e.target.className.includes("modal-closed") && windowWithCurrent <= 768) {
      isDragging = false;
      $slider.classList.remove("dragging")
    }
  }  

  $slider.addEventListener("mousedown", dragStart);
  $slider.addEventListener("mousemove", draggIng);
  document.addEventListener("mouseup", dragStop); 

  window.addEventListener("resize", resizeWidth);

}

export default dragAndDropFlavors
