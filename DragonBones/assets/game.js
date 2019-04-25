// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        dragonPrefab:cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //WEB环境下没有问题，安卓，苹果，windows等原生平台均会发生第二种使用方式出现的问题。

        //第一种使用方式---多次使用，没有问题。
        let dragonOfChildNode = this.node.getChildByName("Dragon_ske");
        let dragonOfChildArmatureDisplay = dragonOfChildNode.getComponent(dragonBones.ArmatureDisplay);
        dragonOfChildArmatureDisplay.playAnimation("walk", 10);

        //第二种使用方式---在多次instantiate后，会发生ArmatureDisplay为null的情况，导致程序崩溃或者动画不播放，没有ArmatureData;
        let dragonOfPrefabNode = cc.instantiate(this.dragonPrefab);
        dragonOfPrefabNode.x = 150;
        this.node.addChild(dragonOfPrefabNode);
        let dragonOfPrefabArmatureDisplay = dragonOfPrefabNode.getComponent(dragonBones.ArmatureDisplay);
        dragonOfPrefabArmatureDisplay.playAnimation("jump", 10);

    },

    start () {

    },

    // update (dt) {},
});
