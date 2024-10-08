var container = document.getElementById('emojis')
var emoji = ['🤑', '💰', '💵', '💸', '🎉', '💖', '🌈', '🔥', '😁', '👏']
var circles = []

for (var i = 0; i < 25; i++) {
  addCircle(
    i * 150,
    [10 + 0, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
  addCircle(
    i * 150,
    [10 + 0, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
  addCircle(
    i * 150,
    [10 - 200, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
  addCircle(
    i * 150,
    [10 + 200, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
  addCircle(
    i * 150,
    [10 - 400, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
  addCircle(
    i * 150,
    [10 + 400, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
  addCircle(
    i * 150,
    [10 - 600, -300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
  addCircle(
    i * 150,
    [10 + 600, 300],
    emoji[Math.floor(Math.random() * emoji.length)]
  )
}

function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(
      range[0] + Math.random() * range[1],
      -50 + Math.random() * 4,
      color,
      {
        x: -0.15 + Math.random() * 0.3,
        y: 1 + Math.random() * 1
      },
      range
    )
    circles.push(c)
  }, delay)
}

function Circle(x, y, c, v, range) {
  var _this = this
  this.x = x
  this.y = y
  this.color = c
  this.v = v
  this.range = range
  this.element = document.createElement('span')

  this.element.style.opacity = 0
  this.element.style.position = 'absolute'
  this.element.style.fontSize = '32px'
  this.element.style.backgroundColor = 'hsl(' + ((Math.random() * 360) | 0) + ',80%,50%)'
  this.element.style.padding = '8px'
  this.element.style.borderRadius = '999px'
  this.element.style.lineHeight = '1'
  this.element.innerHTML = c
  container.appendChild(this.element)

  this.update = function() {
    if (_this.y > window.innerHeight) {
      _this.y = -50 + Math.random() * 4
      _this.x = _this.range[0] + Math.random() * _this.range[1]
    }
    _this.y += _this.v.y
    _this.x += _this.v.x
    this.element.style.opacity = 1
    this.element.style.transform =
      'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)'
    this.element.style.webkitTransform =
      'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)'
    this.element.style.mozTransform =
      'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)'
  }
}

function makeItRain() {
  for (var i in circles) {
    circles[i].update()
  }
  requestAnimationFrame(makeItRain)
}