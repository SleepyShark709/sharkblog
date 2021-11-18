class SceneEnd extends GameScene{
    constructor(game) {
        super(game);
        let label = new GameLabel(game, '恭喜达成隐藏成就，凭截图领取奖品一份', 100, 190)
        let label2 = new GameLabel(game, '按R重新进入游戏', 100, 230)
        this.addElement(label)
        this.addElement(label2)

        game.registerAction('r', (event) => {
            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
}