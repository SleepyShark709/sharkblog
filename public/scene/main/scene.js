class Scene extends GameScene {
    constructor(game) {
        super(game);
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.man = new Man(game)
        this.pac = new Pac(game)
        this.pac.x = 100
        this.pac.y = 100
        this.man.x = 0
        this.man.y = 0
        this.pacArray = []
        this.addPacs()
        this.addElement(this.man)
        this.addPacElements(this.pacArray)
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
        // this.label.time += 1
        // this.cloud.y += 1
        // if (this.cloud.y > 768) {
        //     this.cloud.y = -50
        // }
        // for (let i = 0; i < this.enemies.length; i++) {
        //     let e = this.enemies[i]
        //     this.pac.pengzhuang(this.man)
        // }
        // for (let pac of this.pacArray) {
        //     // pac.pengzhuang(this.man)
        // }
    }
}
