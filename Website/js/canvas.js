
  var canvas = document.getElementById('canvas');
  var g = canvas.getContext('2d'); 
  var vierkant = [
    {x: 50, y: 50, w: 50, h: 50, visible: false},
    {x: 50, y: 100, w: 50, h: 50, visible: false},
    {x: 50, y: 150, w: 50, h: 50, visible: false},
    {x: 100, y: 50, w: 50, h: 50, visible: false},
    {x: 100, y: 100, w: 50, h: 50, visible: false},
    {x: 100, y: 150, w: 50, h: 50, visible: false},
    {x: 150, y: 50, w: 50, h: 50, visible: false},
    {x: 150, y: 100, w: 50, h: 50, visible: false},
    {x: 150, y: 150, w: 50, h: 50, visible: false},
  ];
  function tekenvierkant() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < vierkant.length; i++) {
      var mole = vierkant[i];
      if (mole.visible) {
        g.fillStyle = "#2596be";
        g.fillRect(mole.x, mole.y, mole.w, mole.h);
      }
    }
  }
  canvas.addEventListener('click', handleClick);
  function showMole() {
    var mole = vierkant[Math.floor(Math.random() * vierkant.length)];
    mole.visible = true;
    setTimeout(function() {
      mole.visible = false;
      tekenvierkant();
    }, Math.random() * 2000 + 1000);
  }
  setInterval(showMole, 1000);
  function handleClick(event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    for (var i = 0; i < vierkant.length; i++) {
      var mole = vierkant[i];
      if (x > mole.x && x < mole.x + mole.w && y > mole.y && y < mole.y + mole.h && mole.visible) {
        mole.visible = false;
        tekenvierkant();
      }
    }
  }