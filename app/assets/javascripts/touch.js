

function touchMove(evnet) {
  console.log(event);
}


function getTouch() {
  window.ontouchmove = touchMove;
}

