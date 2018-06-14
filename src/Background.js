var Background = (function(_super){
    function Background(){
        Background.super(this);
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage("war/background.png");
        this.addChild(this.bg1);

        console.log("加载背景")
    }
    Laya.class(Background, "Background",_super);
    return Background;
})(Laya.Sprite);