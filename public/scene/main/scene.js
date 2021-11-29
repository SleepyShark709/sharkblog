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
        let addWidthBtn = document.querySelector('#button-width')
        let addHeightBtn = document.querySelector('#button-height')
        this.addWidthBlock(addWidthBtn)
        this.addHeightBlock(addHeightBtn)
        this.moveBlock()
        this.deleteBlock()
    }

    deleteBlock() {
        let Blocks = this.blockElements
        this.game.canvas.onmousedown =  (e) => {
            if (e.button === 2) {
                var x = event.offsetX
                var y = event.offsetY
                for (let i = 0; i < Blocks.length; i++) {
                    let b = Blocks[i]
                    if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) {
                        // 删除b
                        this.deleteBlockElement(i)
                    }
                }
            }
        }
    }

    moveBlock() {
        let game = this.game
        let Blocks = this.blockArray
        game.canvas.addEventListener('mousedown', (event) => {
            if (event.button === 0) {
                var x = event.offsetX
                var y = event.offsetY
                for (let i = 0; i < Blocks.length; i++) {
                    let b = Blocks[i]
                    if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) {
                        b.blockDrag = true
                    }
                }
            }
        })
        game.canvas.addEventListener('mousemove', (event) => {
            var x = event.offsetX
            var y = event.offsetY
            for (let i = 0; i < Blocks.length; i++) {
                let b = Blocks[i]
                if (b.blockDrag === true) {
                    b.x = x
                    b.y = y
                }
            }
        })
        game.canvas.addEventListener('mouseup', (event) => {
            var x = event.offsetX
            var y = event.offsetY
            for (let i = 0; i < Blocks.length; i++) {
                let b = Blocks[i]
                if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) {
                    b.blockDrag = false
                }
            }
        })
    }

    addWidthBlock(btn) {
        btn.addEventListener('click', () => {
            let b = new Block(this.game, 'block_w')
            b.x = 0
            b.y = 0
            // map_w.push(o)
            // this.createBlockArray()
            this.blockArray.push(b)
            this.addBlockElements([b])
        })
    }

    addHeightBlock(btn) {
        btn.addEventListener('click', () => {
            let b = new Block(this.game, 'block')
            b.x = 0
            b.y = 0
            // let o = {
            //     x: 0,
            //     y: 0,
            // }
            // map_h.push(o)
            // this.createBlockArray()
            this.blockArray.push(b)

            this.addBlockElements([b])
        })
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
                let y = 100 * i + 35
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
