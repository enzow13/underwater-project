const b1 = document.getElementById('background1');
const b2 = document.getElementById('background2');
const b3 = document.getElementById('background3');
const sun = document.getElementById('img-sun');

const title = document.getElementById('title');
const btn = document.getElementById('btn-titlecontent');

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');

const tl = new TimelineMax();

tl.fromTo(b1, 3, {width: '140%', opacity: '.5', x: '-500px'}, {width: '125%', opacity: '1', x: '0px'})
tl.fromTo(b2, 3, {width: '140%', opacity: '.5', x: '-500px'}, {width: '135%', opacity: '1', x: '0px'}, '-=2.98')
tl.fromTo(b3, 3, {width: '150%', x: '-720px'}, {width: '130%', x: '0px'}, '-=2.95')
tl.fromTo(sun, 3, {y: '-120px', opacity: '0'}, {y: '0px', opacity: '1'}, '-=3')
tl.fromTo(a1, 3, {opacity: '0', y: '-80px'}, {opacity: '1', y: '0px'}, '-=2.8')
tl.fromTo(a2, 3, {opacity: '0', y: '-80px'}, {opacity: '1', y: '0px'}, '-=2.6')
tl.fromTo(a3, 3, {opacity: '0', y: '-80px'}, {opacity: '1', y: '0px'}, '-=2.4')
tl.fromTo(title, 3, {opacity: '0', x: '-40px'}, {opacity: '1', x: '0px'}, '-=4')