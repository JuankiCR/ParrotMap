const loadMap = () => {
    let canvas = Raphael("canvas", 600, 630);
    canvas.image("/public/maps/Campus_Coquimatlan.svg", 0, 0, 600, 630);
}