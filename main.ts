scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(assets.image`mrPinky`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`myTileMap`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
