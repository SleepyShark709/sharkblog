const __main = () => {
    // 这个地方是加了一个滑动条来控制帧率
    // let input = document.querySelector('#id-input-speed')
    // input.addEventListener('input', (event) => {
    //     let input = event.target
    //     window.fps = Number(input.value)
    // })
    var images = {
        man: 'image/man.png',
        pac: 'image/pac.png'
    }

    var game = new Game(30, images, function(g) {
        // var s = SceneTitle.new(g)
        var s = Scene.new(g)
        g.runWithScene(s)
    })
}
__main()
