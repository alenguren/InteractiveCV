import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    //ID's are from Tiled 
    anims: {
        "idle-down": 936, 
        "walk-down": {from: 936, to: 939, loop: true, speed: 8},
        "idle-side": 975, 
        "walk-side": {from: 936, to: 978, loop: true, speed: 8},
        "idle-up": 1014, 
        "walk-up": {from: 1014, to: 1017, loop: true, speed: 8},
    },
});

k.loadSprite("map", "./map.png")

k.setBackground(k.Color.fromHex("#311047"));

