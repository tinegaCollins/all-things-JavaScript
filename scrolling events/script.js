import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");
const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0),CSS.percent(100)]
})
scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }
)

//one element
const images = document.querySelectorAll("img");
images.forEach(image => {

    image.animate(
        {
            // transform : [ "perspective(100px)  rotateX(45deg)", "perspective(100px) rotate(0)"],
            opacity : ["0.5", "1"]
        },
        {
            duration: 1,
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    { target: image, edge: "end", threshold: "1" },
                    { target: image, edge: "start", threshold: "1" }
                ]
            })
        }
    )
});

