/**
 * Created by peter on 19/08/2017.
 */

var canvas, engine;

function Donut () {
    console.log("Load donut");

    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true);

    var createScene = function() {

        // Create scene
        var scene = new BABYLON.Scene(engine);

        // Create camera to rotate around donut
        var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 30, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);

        // Light source
        var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);

        // Material to attach to mesh
        var donutMaterial = new BABYLON.StandardMaterial("texture1", scene);
        donutMaterial.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.7);

        // Create donut object and attach material
        var donut = BABYLON.Mesh.CreateTorus("torus", 10, 5, 40, scene, false);
        donut.material = donutMaterial;

        return scene;
    };

    var scene = createScene();

    engine.runRenderLoop(function() {
        scene.render();
    });
}

window.addEventListener('DOMContentLoaded', function() {
    Donut();
});

window.addEventListener('resize', function() {
    engine.resize();
});