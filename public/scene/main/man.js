class Man extends GameImage{
    constructor(game) {
        super(game, 'man');
        this.game = game
        // this.texture = game.textureByName('man2')
        // this.x = 0
        // this.y = 0
        // this.w = this.texture.width
        // this.h = this.texture.height
        this.rotation = 0
        this.flipX = false
        this.couldLeft = true
        this.couldRight = true
        this.setup()
    }
    static new (game) {
        return new this(game)
    }
    setup() {
        this.speed = 10
        // this.cooldown = 0
    }
    update() {
        // this.speed -= 1
        // if (this.speed <= 0) {
        //     this.speed = 10
        // }
        this.pengzhuang()
    }
    moveLeft() {
        if (this.pengzhuangToBlock(0)) {
            // this.x = this.x
            return
        }
        this.currentLocation = 0
        if (this.couldLeft) {
            this.x -= this.speed
            if (this.x < 0) {
                this.x = 0
            }
            this.rotation = 180
        }
    }
    moveRight() {
        if (this.pengzhuangToBlock(1)) {
            // this.x = this.x
            return
        }
        this.currentLocation = 1
        if (this.couldRight) {
            this.x += this.speed
            if (this.x > 512 - this.w) {
                this.x = 512 - this.w
            }
            this.rotation = 0
            this.couldLeft = true
        }
    }
    moveUp() {
        if (this.pengzhuangToBlock(2)) {
            return
        }
        this.currentLocation = 2
        this.y -= this.speed
        if (this.y < 0) {
            this.y = 0
        }
        this.rotation = -90
    }
    moveDown() {
        if (this.pengzhuangToBlock(3)) {
            return
        }
        this.currentLocation = 3
        this.y += this.speed
        this.rotation = 90
        if (this.y > 512 - this.h) {
            this.y = 512 - this.h
        }
    }
    draw() {
        let context = this.game.context
        context.save()
        let w2 = this.w / 2
        let h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    pengzhuang() {
        let pacs = this.scene.pacElements
        for (let pac of pacs) {
            if (reactIntersects(this, pac) === true || reactIntersects(pac ,this) === true) {
                let i = this.scene.pacElements.indexOf(pac)
                this.scene.pacElements.splice(i, 1)
            }
        }
        if (pacs.length === 0) {
            // console.log('结束了')
            var s = new SceneEnd(this.game)
            this.game.replaceScene(s)
        }
    }
    pengzhuangToBlock (location) {
        let blocks = this.scene.blockElements
        for (let b of blocks) {
            if (reactIntersects(this, b) || reactIntersects(b ,this)) {
                if (location === this.currentLocation) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
}