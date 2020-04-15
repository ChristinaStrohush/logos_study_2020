let welcome = 'Welcome'

let userName = prompt('Your Name');
let mainBoxHeight = prompt('Main div height');
let mainBoxWidth = prompt('Main div width');
let mainBackground = prompt('Main div backdround');
let secondBoxHeight = prompt('Second div height');
let secondBoxWidth = prompt('Second div width');
let secondBackground = prompt('Second div background, image');
document.write(`<div style="width: ${mainBoxWidth}px; height: ${mainBoxHeight}px; background: ${mainBackground}; border-radius: 5px; margin: 0 auto; display: flex; flex-direction: column; justify-content: center; align-items: center;">
<div style="width: ${secondBoxWidth}px; height: ${secondBoxHeight}px; background-image: url(${secondBackground}); background-size: cover;"></div>
<div><p style="font-size: 20px;"><b>${welcome}, ${userName}</b></p></div>
</div>`);