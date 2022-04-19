class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.pacElements= []
        this.blockElements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    addPacElements(imgs) {
        for (let img of imgs) {
            img.scene = this
            this.pacElements.push(img)

        }
    }
    addBlockElements(imgs) {
        for (let img of imgs) {
            img.scene = this
            this.blockElements.push(img)
        }
    }

    deleteBlockElement (index) {
        this.blockElements.splice(index, 1)
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.draw()
        }
        for (let i = 0; i < this.pacElements.length; i++) {
            let e = this.pacElements[i]
            e.draw()
        }
        for (let i = 0; i < this.blockElements.length; i++) {
            let e = this.blockElements[i]
            e.draw()
        }
    }
    update() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
        for (let i = 0; i < this.pacElements.length; i++) {
            let e = this.pacElements[i]
            e.update()
        }
        for (let i = 0; i < this.blockElements.length; i++) {
            let e = this.blockElements[i]
            e.update()
        }
    }
}