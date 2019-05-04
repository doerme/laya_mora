export default class main extends Laya.Script {
    /** @prop {name: beginBt, tips: "游戏开始按钮", type: Label} */
    beginBt: Laya.Label
    
    constructor() { 
        super();
        Laya.MouseManager.multiTouchEnabled = false;
    }
    
    onEnable(): void {
        // this.game_begin_bt.on(Laya.Event.CLICK, this, this.loadGameScene);
    }

    onDisable(): void {
    }

    loadGameScene(): void {
        // this.loadScene('pages/game')
    }

}