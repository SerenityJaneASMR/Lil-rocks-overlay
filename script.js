const liquid = document.getElementById("liquid");

// The highest the liquid should ever reach inside the bottle
const MAX_FILL = 65;

/**
 * progress = 0 to 100
 */
function updateJar(progress) {

    const fill = (progress / 100) * MAX_FILL;
    liquid.style.height = fill + "%";

}
updateJar(0);     // Empty
// updateJar(25);
// updateJar(50);
// updateJar(75);
// updateJar(100);
