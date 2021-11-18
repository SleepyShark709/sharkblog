class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.pacElements= []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
        console.log('this.element', this.elements)
    }
    addPacElements(imgs) {
        for (let img of imgs) {
            img.scene = this
            this.pacElements.push(img)

        }
    }

    popElement() {
        this.elements.pop()
    }
    popPacElement() {
        this.pacElements.pop()
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
    }
}