class DoorWay extends AdventureScene {
    constructor() {
        super("doorway", "DoorWay");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image("door way", "DoorWay.png");
        this.load.image("coat", "Coat.png");
        this.load.image("keys", "Keys.png");
        this.load.image("painting", "painting.png");
    }

    onEnter() {
        let background = this.add.sprite(700,520, "door way");
        background.setScale(0.55);   

        let coat = this.add.image(720, 480, "coat")
            .setDepth()
            .setScale(0.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A coat to shield myself from the world. Good coat"))
            
            .on('pointerdown', () => {
                this.showMessage("Coat, ON. Nothing can stop me now.")
                this.gainItem('coat')
                this.spriteRemove(coat)
            });

        
        let keys = this.add.image(950, 500, "keys")
            .setDepth(1)
            .setScale(0.15)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Keys for the car and the apartment"))
            .on('pointerdown', () => {
                this.showMessage("I dread the day of forgetting these")
                this.gainItem("keys")
                this.spriteRemove(keys)
            });
    
            let painting = this.add.text(180, 400, " painting ")
            .setDepth(1)
            .setInteractive()
            .setScale(2)
            .on('pointerover', () => this.showMessage("Taken on my 16th birthday. I'm 20 now. The guy in the back is kinda weird."))  

            let mainDoor = this.add.text(550, 300, " main door ")
            .setDepth(2)
            .setScale(2)
            .setInteractive()

            .on('pointerover', () => {
                if (this.hasItem("keys")) {
                    this.showMessage("I have my keys. Should be ready to leave now.")
                } else {
                    this.showMessage("I think I'm forgetting something...")
                }
            })

            .on('pointerdown', () => {
                if (this.hasItem("keys")) {
                    this.showMessage("Time to leave")
                    this.gotoScene("walkway")
                } else {
                    this.showMessage("I think I'm forgetting something...")
                }
            });

            
        let bathroomDoor = this.add.text(1150, 700, " bathroom ")
        .setDepth(1)
        .setScale(3)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Enter the bathroom.")
        })
        .on('pointerdown', () => {
            this.gotoScene("sink")
        });
    }
}



class Sink extends AdventureScene {
    constructor() {
        super("sink", "Sink")
    }

    preload() {
        this.load.path = './assets/';
        this.load.image("sink", 'Sink.png');
        this.load.image("pepper spray", 'Pepper Spray.png');
    }

    onEnter() {
        let background = this.add.sprite(715, 540, "sink");
        background.setScale(0.55);

        let pepperspray = this.add.image(1200, 1000, "pepper spray")
            .setScale(0.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I wonder if I can season my steak with this?"))
            .on('pointerdown', () => {
                this.showMessage("Equipped PepperSpray.")
                this.gainItem('pepper spray')
                this.spriteRemove(pepperspray)
        });

        let self = this.add.text(650, 450, " self ")
            .setInteractive()
            .setScale(3)
            .on('pointerover', () => this.showMessage("Ah, so this is how people see me."));

        let bathroomExit = this.add.text(150, 450, " exit ") // exit the bathroom
            .setFontSize(50)
            .setInteractive()
        .on('pointerover', () => this.showMessage("Exit the bathroom"))
        .on('pointerdown', () => {
            this.gotoScene("doorway");
            })
    }
}


class WalkWay extends AdventureScene { // whats wrong with this???
    constructor() {
        super("walkway", "Walkway")
    }

    preload() {
        this.load.image("walkway", "./assets/Walkway.png");
    }

    onEnter() {
        let background = this.add.sprite(715, 540, "walkway");
        background.setScale(0.55)

        let rightArrow = this.add.text(307.5, 200, "➡️")
        .setScale(5)
        .setInteractive()
        .on('pointerdown', () => {
            if (this.hasItem("keys" && "coat" && "pepperspray")) {
                this.gotoScene("stairs")
            } else {
                this.gotoScene("bad end")
            }
        })
    }

}

class Stairs extends AdventureScene {
    constructor() {
        super("stairs", "Stairs")
    }

    preload() {
        this.load.image("stairs", "./assets/Stairs.png");
    }

    onEnter() {
        let background = this.add.sprite(715, 540, "stairs");
        background.setScale(0.55)
    }

}

class BadEnd extends AdventureScene {
    constructor() {
        super("bad end", "Bad End")
    }

    preload() {
        this.load.image("bad end", "./assets/Bad End.png");
    }

    onEnter() {
        let background = this.add.sprite(715, 540, "bad end");
        background.setScale(0.55)
    }

}


class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(750, 300, "Saturday").setFontSize(60);
        this.add.text(800, 375, "Click to Begin").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('doorway'));
        });
    }
}

class Outro1 extends Phaser.Scene {
    constructor() {
        super('goodend');
    }
    create() {
        this.add.text(50, 50, "I made it to the car without embarassing myself. Good job, me!")
        this.input.on('pointerdown', () => this.scene.start('intro'));

    }
}


class Outro2 extends Phaser.Scene {
    constructor() {
        super('badend');
    }
    create() {
        this.add.text(50, 50, "Someone...please.. save..me")
        this.input.on('pointerdown', () => this.scene.start('intro'));

    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080

    },
    scene: [Intro, DoorWay, Sink, WalkWay, Stairs, BadEnd, Outro1, Outro2],
    //scene: [DoorWay],
    //scene: [Sink],
    title: "Saturday",
});
