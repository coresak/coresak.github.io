$(document).ready(function () {

    const animation = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("line-bar"),
        keyframes: [
            {
                width: 0
            }
        ]
    });
    Motus.addAnimation(animation);

    const animation2 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("line-bar-2"),
        keyframes: [
            {
                width: 3
            }
        ]
    });
    Motus.addAnimation(animation2);

    const animation3 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("line-bar-3"),
        keyframes: [
            {
                width: 46
            }
        ]
    });
    Motus.addAnimation(animation3);

    const animation4 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("line-bar-4"),
        keyframes: [
            {
                width: 269
            }
        ]
    });
    Motus.addAnimation(animation4);
});