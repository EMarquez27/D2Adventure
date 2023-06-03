class livingRoom extends AdventureScene {
    constructor() {
        super("door way", "DoorWay.png");
    }

    preload() {
        this.load.image("door way", "./assets/DoorWay.png");
    }

    onEnter() {
        let background = this.add.sprite(715, 540, "door way");
        background.setScale(1.155);

        
    }
}

class bathRoom extends Phaser.Scene {
    constructor() {
        super('bathroom')
    }

    preload() {
        this.load.image("sink", "./assets/Sink.png");
    }
    
    onEnter() {
        let background = this.add.sprite(715, 540, "sink");
        background.setScale(1.155)
    }
        
}

class bathRoom extends Phaser.Scene {
    constructor() {
        super('bathroom')
    }

    preload() {
        this.load.image("sink", "./assets/Sink.png");
    }
    
    onEnter() {
        let background = this.add.sprite(715, 540, "sink");
        background.setScale(1.155)
    }
        
}

class bathRoom extends Phaser.Scene {
    constructor() {
        super('bathroom')
    }

    preload() {
        this.load.image("sink", "./assets/Sink.png");
    }
    
    onEnter() {
        let background = this.add.sprite(715, 540, "sink");
        background.setScale(1.155)
    }
        
}


    class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(750,300, "Saturday").setFontSize(60);
        this.add.text(800, 375, "Click to Begin").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('cell'));
        });
        }
    }

    class goodEnd extends Phaser.Scene {
        constructor() {
            super('goodend');
        }
        create() {
            this.add.text(50, 50, "I made it to the car without embarassing myself. Good job, me!")
            this.input.on('pointerdown', () => this.scene.start('intro'));
                
        }
    }


    class badEnd extends Phaser.Scene {
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
        scene: [Intro, livingRoom, walkWay, bathRoom, goodEnd, badEnd],
        title: "Saturday",
    });
