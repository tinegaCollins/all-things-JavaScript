import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
const images = document.querySelectorAll("img")

images.forEach( image => {
    image.animate(
        {
            opacity : [ 0.4 ,1 ],
            transform: [ 'scale(0)', 'scale(1)']
        },
        {
            duration: 1,
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    { target: image, edge: "end", threshold: ".7" },
                    { target: image, edge: "start", threshold: ".4" }
                ]
            })
        }
    )
})