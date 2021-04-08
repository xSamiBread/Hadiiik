namespace SpriteKind {
    export const body_part = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dx = 0
    dy = -6
})
function AddBodyPart () {
    body.push(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.body_part))
    body[body.length - 1].x = body[body.length - 2].x - dx
    body[body.length - 1].y = body[body.length - 2].y - dy
}
function SpawnFood () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . 1 7 3 1 . . . . . . . . . 
        . . . 1 7 3 3 1 . . . . . . . . 
        . . . 1 7 3 f 3 1 . . . . . . . 
        . . . 1 7 3 3 3 3 1 . . . . . . 
        . . . 1 7 7 f 3 f 3 1 . . . . . 
        . . . . 1 7 7 3 3 3 3 1 . . . . 
        . . . . . 1 7 7 3 f 3 3 1 . . . 
        . . . . . . 1 7 7 7 7 7 7 1 . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dx = -6
    dy = 0
})
function SetUpSnake () {
    head = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 7 7 7 7 1 . . . . . 
        . . . . . 1 7 7 7 7 1 . . . . . 
        . . . . . 1 7 7 7 7 1 . . . . . 
        . . . . . 1 7 7 7 7 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    dx = 8
    dy = 0
    body = [sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 6 6 6 6 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.body_part)]
    head.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    body[0].setPosition(head.x - dx, head.y - dy)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dx = 6
    dy = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    dx = 0
    dy = 6
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy(effects.spray, 500)
    AddBodyPart()
    hungry = true
    info.changeScoreBy(1)
    if (game_Speed > 50) {
        game_Speed += 0 - 50
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.body_part, function (sprite, otherSprite) {
    game.over(false)
})
let counter = 0
let i = 0
let head: Sprite = null
let mySprite: Sprite = null
let body: Sprite[] = []
let dy = 0
let dx = 0
let hungry = false
let game_Speed = 0
game_Speed = 250
hungry = true
SetUpSnake()
game.onUpdateInterval(50, function () {
    if (i >= game_Speed) {
        i = 0
        counter = body.length - 1
        while (counter > 0) {
            body[counter].x = body[counter - 1].x
            body[counter].y = body[counter - 1].y
            counter += -1
        }
        body[0].setPosition(head.x, head.y)
        head.x += dx
        head.y += dy
    } else {
        i += 50
    }
})
game.onUpdateInterval(1000, function () {
    if (hungry) {
        SpawnFood()
        hungry = false
    }
})
forever(function () {
    if (head.x < 0) {
        head.x = scene.screenWidth()
    }
    if (head.x > scene.screenWidth()) {
        head.x = 0
    }
    if (head.y < 0) {
        head.y = scene.screenHeight()
    }
    if (head.y > scene.screenHeight()) {
        head.y = 0
    }
})
