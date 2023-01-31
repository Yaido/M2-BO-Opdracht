
  var canvas = document.getElementById('canvas');
  var g = canvas.getContext('2d'); 
  var vierkantjes = [
    {x: 50, y: 50, w: 50, h: 50, visible: false},
    {x: 50, y: 100, w: 50, h: 50, visible: false},
    {x: 50, y: 150, w: 50, h: 50, visible: false},
    {x: 100, y: 50, w: 50, h: 50, visible: false},
    {x: 100, y: 100, w: 50, h: 50, visible: false},
    {x: 100, y: 150, w: 50, h: 50, visible: false},
    {x: 150, y: 50, w: 50, h: 50, visible: false},
    {x: 150, y: 100, w: 50, h: 50, visible: false},
    {x: 150, y: 150, w: 50, h: 50, visible: false}
  ];
  function drawvierkantjes() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < vierkantjes.length; i++) {
      var mole = vierkantjes[i];
      if (mole.visible) {
        g.fillStyle = '#2596be';
        g.fillRect(mole.x, mole.y, mole.w, mole.h);
      }
    }
  }
  function handleClick(event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    for (var i = 0; i < vierkantjes.length; i++) {
      var mole = vierkantjes[i];
      if (x > mole.x && x < mole.x + mole.w && y > mole.y && y < mole.y + mole.h && mole.visible) {
        mole.visible = false;
        drawvierkantjes();
      }
    }
  }
  canvas.addEventListener('click', handleClick);
  function showMole() {
    var mole = vierkantjes[Math.floor(Math.random() * vierkantjes.length)];
    mole.visible = true;
    setTimeout(function() {
      mole.visible = false;
      drawvierkantjes();
    }, Math.random() * 2000 + 1000);
  }
  setInterval(showMole, 1000);