$(document).ready(function () {

    const animation = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("progress--bar"),
        keyframes: [
            {
                height: 122
            }
        ],
    });
    Motus.addAnimation(animation);

    const animation2 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("progress--bar-2"),
        keyframes: [
            {
                height: 68
            }
        ]
    });
    Motus.addAnimation(animation2);

    const animation3 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("progress--bar-3"),
        keyframes: [
            {
                height: 86
            }
        ]
    });
    Motus.addAnimation(animation3);

    const animation4 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("progress--bar-4"),
        keyframes: [
            {
                height: 55
            }
        ]
    });
    Motus.addAnimation(animation4);
});