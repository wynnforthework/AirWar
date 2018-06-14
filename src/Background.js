var Background = (function(_super){
    function Background(){
        Background.super(this);
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage("war/background.png");
        this.addChild(this.bg1);

        console.log("加载背景")

        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage("war/background.png");
        this.bg2.pos(0,-852);
        this.addChild(this.bg2);

        Laya.timer.frameLoop(1,this,this.onLoop);
    }
    Laya.class(Background, "Background",_super);

    var _proto = Background.prototype;
    _proto.onLoop = function(){
        this.y += 10;
        if(this.bg1.y+this.y>=852){
            this.bg1.y -= 852*2;
        }
        if(this.bg2.y+this.y>=852){
            this.bg2.y -= 852*2;
        }
    }

    return Background;
})(Laya.Sprite);