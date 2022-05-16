let delay = 1000;        // In milliseconds
let maxBarHeight = 60;   // In vh

async function swap(bar1, bar2) {
    // change the color of the bar to be swapped to red
    bar1.style.background = "#ff5858";
    bar2.style.background = "#ff5858";
    await new Promise(resolve => setTimeout(resolve, delay));

    // get the height of the bars
    let heightBar1 = bar1.style.height;
    let heightBar2 = bar2.style.height;

    // swapping the height
    bar1.style.height = heightBar2;
    bar2.style.height = heightBar1;
    await new Promise(resolve => setTimeout(resolve, delay));
}
