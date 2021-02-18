controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hadík.vy += -10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Hadík.vx += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Hadík.vx += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Hadík.vy += 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    jablko.setPosition(randint(0, 160), randint(0, 120))
})
let jablko: Sprite = null
let Hadík: Sprite = null
scene.setBackgroundColor(14)
Hadík = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 f 5 5 f 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 2 2 5 5 5 . . . . 
    . . . . 5 5 5 5 2 2 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
jablko = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e 7 . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
