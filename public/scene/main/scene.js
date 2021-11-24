class Scene extends GameScene {
    constructor(game) {
        super(game);
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.man = new Man(game)
        this.man.x = 0
        this.man.y = 0
        this.pacArray = []
        this.blockArray = []
        this.createBlockArray()
        // this.blockArray.push(this.block)
        this.addPacs()
        this.addElement(this.man)
        this.addPacElements(this.pacArray)
        this.addBlockElements(this.blockArray)
    }
    createBlockArray() {
        let bh = map_h
        let bw = map_w
        for (let bwElement of bw) {
            let { x, y } = bwElement
            let b = new Block(this.game, 'block_w')
            b.x = x
            b.y = y
            this.blockArray.push(b)
        }
        for (let bhElement of bh) {
            let { x, y } = bhElement
            let b = new Block(this.game, 'block')
            b.x = x
            b.y = y
            this.blockArray.push(b)
        }
    }
    addPacs() {
        let PacNum = 50 // 50 个豆子 每行十个，一共五行
        let as = []
        for (let i = 0; i < 5; i++) {
            // y
            for (let j = 0; j < 10; j++) {
                // x
                let x = 50 * j + 20
                let y = 100 * i + 25
                let p = new Pac(this.game)
                p.x = x
                p.y = y
                as.push(p)
            }
        }
        this.pacArray = as
    }
    setupInputs() {
        let g = this.game
        let s = this
        g.registerAction('a', function() {
            s.man.moveLeft()
        })
        g.registerAction('d', function() {
            s.man.moveRight()
        })
        g.registerAction('w', function() {
            s.man.moveUp()
        })
        g.registerAction('s', function() {
            s.man.moveDown()
        })
    }
    update() {
        super.update()

    }
}
