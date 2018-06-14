var Background = (function(_super){
    function Background(){
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage("war/background.png");
        this.addChild(this.bg1);
    }
    Laya.class(Background, "Background",_super);
    return Background;
})(Laya.Sprite);