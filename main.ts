sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.startCountdown(10)
    pizza.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
})
let pizza: Sprite = null
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
. . . b b b b b b b b b . . . . 
. . b 1 d d d d d d d 1 b . . . 
. b 1 1 1 1 1 1 1 1 1 1 1 b . . 
. b d b c c c c c c c b d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c 6 d 6 6 6 6 6 c d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c 6 6 6 6 6 6 6 c d b . . 
. b d c c c c c c c c c d b . . 
. c b b b b b b b b b b b c . . 
c b c c c c c c c c c c c b c . 
c 1 d d d d d d d d d d d 1 c . 
c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
c b b b b b b b b b b b b b c . 
c c c c c c c c c c c c c c c . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Food)
