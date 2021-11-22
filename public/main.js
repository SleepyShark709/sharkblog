const __main = () => {
    var images = {
        man: 'image/man.png',
        man2: 'image/man2.png',

        pac: 'image/pac.png',
        block: 'image/block.png',
        block_w: 'image/block-w.png',
    }

    var game = new Game(30, images, function(g) {
        // var s = SceneTitle.new(g)
        var s = Scene.new(g)
        g.runWithScene(s)
    })
}
__main()
