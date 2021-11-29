const __main = () => {
    var images = {
        man: 'image/man.png',
        // man2: 'image/man2.png',
        m0: 'image/m-0.png',
        m1: 'image/m-1.png',
        m2: 'image/m-2.png',

        pac: 'image/pac.png',
        block: 'image/block_h.png',
        block_w: 'image/block_w.png',
    }

    var game = new Game(30, images, function(g) {
        // var s = SceneTitle.new(g)
        var s = Scene.new(g)
        g.runWithScene(s)
    })
}
__main()
