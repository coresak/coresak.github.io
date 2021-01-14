$(document).ready(function () {

    const animation = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("train"),
        keyframes: [
            {
                right: {
                    from: -250,
                    to: 30,
                    unit: "px"
                }
            }
        ]
    });
    Motus.addAnimation(animation);

    const animation2 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("train-2"),
        keyframes: [
            {
                left: {
                    from: -350,
                    to: 30,
                    unit: "px"
                }
            }
        ]
    });
    Motus.addAnimation(animation2);

    const animation3 = new Motus.Animation({
        startPoint: [-50],
        endPoint: [-450],

        $el: document.getElementById("train-2"),
        keyframes: [
            {
                left: {
                    from: -350,
                    to: 30,
                    unit: "px"
                }
            }
        ],


    });
    Motus.addAnimation(animation3);


    const animation4 = new Motus.Animation({

        $el: document.getElementById("boat"),
        keyframes: [
            {
                left: {
                    from: 600,
                    to: 300,
                    unit: "px"
                }
            }
        ]
    });
    Motus.addAnimation(animation4);
});