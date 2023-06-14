let xMousePos = 0;
let yMousePos = 0;
let lastScrolledLeft = 0;
let lastScrolledTop = 0;

export function updateMousePositionOnScroll() {
  if (lastScrolledLeft != window.pageXOffset) {
    xMousePos -= lastScrolledLeft;
    lastScrolledLeft = window.pageXOffset;
    xMousePos += lastScrolledLeft;
  }
  if (lastScrolledTop != window.pageYOffset) {
    yMousePos -= lastScrolledTop;
    lastScrolledTop = window.pageYOffset;
    yMousePos += lastScrolledTop;
  }

  return {
    x: xMousePos,
    y: yMousePos,
  };
}

export function updateMousePositionOnMouseMove(e: any) {
  xMousePos = e.pageX;
  yMousePos = e.pageY;
  window.status = "x = " + xMousePos + " y = " + yMousePos;
  return {
    x: xMousePos,
    y: yMousePos,
  };
}
