(function(){
    (()=>{
        var WebGL = laya.webgl.WebGL;
        Laya.init(400,852,WebGL);
        this.bg = new Background();
        Laya.stage.addChild(this.bg);

        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

        Laya.Stat.show(0,0);

    });
})();
