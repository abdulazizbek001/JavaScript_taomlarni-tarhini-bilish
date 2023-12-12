const elContainer = document.getElementById('container');
const elWrap = document.getElementById('wrap');
const elBox = document.getElementById('box');
const elBtn = document.getElementById('btn');
const elList = document.getElementById('list');
const elWrapper = document.getElementById('wrapper');
const elWrapperText = document.getElementById('wrapper-text');
const elWrapperInput = document.getElementById('wrapper-input');
const elWrapperSpan = document.getElementById('wrapper-span');
const elWrapperBtn = document.getElementById('wrapper-btn');

// ============================= ALERT START ============================= //

alert('Siz bu saytda taomlarning narxini bilishingiz uchun maxsus tayyorlangan');
alert('      😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎');

// ============================= ALERT END ============================= //

// ============================= CONTAINER START ============================= //

elContainer.style.width = '970px';
elContainer.style.margin = '0 auto';
elContainer.style.padding = '0 20px';

// ============================= CONTAINER END ============================= //

// ============================= WRAP START ============================= //

elWrap.style.display = 'flex';
elWrap.style.gap = '0 20px';

// ============================= WRAP END ============================= //

// ============================= BOX START ============================= //

elBox.style.width = '200px';
elBox.style.display = 'inline-block';
elBox.style.borderRadius = '10px';
elBox.style.background = 'linear-gradient(0deg, rgb(163 163 163), white, rgb(207 207 207 / 53%), rgb(163 163 163), white, rgb(207 207 207 / 53%), rgb(163 163 163), white, rgb(207 207 207 / 53%))';
elBox.style.display = 'flex';
elBox.style.justifyContent = 'center';
elBox.style.flexWrap = 'wrap';
elBox.style.boxShadow = '0px 0px 10px 10px #00000066';

// ============================= BOX END ============================= //

// ============================= BTN START  ============================= //

elBtn.addEventListener('click', function () {
    elList.style.display = 'inline';
})

elBtn.style.padding = '10px 79px';
elBtn.style.border = '1px solid black';
elBtn.style.borderRadius = '10px';
elBtn.style.fontSize = '20px'
elBtn.style.background = 'linear-gradient(#3600ff6e, white, #17ff0075)';
elBtn.style.cursor = 'pointer';

// ============================= BTN END ============================= //

// ============================= LIST START ============================= //

elList.style.display = 'none';
elList.style.padding = '10px 0';

// ============================= LIST END ============================= //

// ============================= WRAPPER START ============================= //

elWrapper.style.display = 'inline-block';


// ============================= WRPPER END ============================= //

// ============================= WRAPPER-TEXT START ============================= //

// elWrapperText.style.display = 'inline-block';
elWrapperText.style.margin = '0';
elWrapperText.style.color = 'rgb(0 0 0 / 64%)';
elWrapperText.style.marginBottom = '5px';

// ============================= WRAPPER-TEXT END ============================= //

// ============================= WRAPPER-INPUT START ============================= //

// elWrapperInput.style.display = 'inline-block';
elWrapperInput.style.width = '70px';
elWrapperInput.style.marginLeft = '20px';
elWrapperInput.style.outline = 'none';
elWrapperInput.style.padding = '10px';
elWrapperInput.style.borderRadius = '20px';
elWrapperInput.style.border = '1.5px solid black';
elWrapperInput.style.borderRight = '0';
elWrapperInput.style.borderBottomRightRadius = '0';
elWrapperInput.style.borderTopRightRadius = '0';
elWrapperInput.style.background = 'linear-gradient(0deg, rgb(207 207 207 / 53%), white, rgb(207 207 207 / 53%), rgb(207 207 207 / 53%), white, rgb(207 207 207 / 53%), rgb(207 207 207 / 53%), white, rgb(207 207 207 / 53%))';

// ============================= WRAPPER-INPUT END ============================= //

// ============================= WRAPPER-BTN START ============================= //

elWrapperBtn.addEventListener('click', function () {

    if (elWrapperInput.value == 'shashlik') {
        elWrapperSpan.textContent = 'bu taomning narxi: 20 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'somsa') {
        elWrapperSpan.textContent = 'bu taomning narxi: 4 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'pirashka') {
        elWrapperSpan.textContent = 'bu taomning narxi: 3 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'cheburak') {
        elWrapperSpan.textContent = 'bu taomning narxi: 5 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'monti') {
        elWrapperSpan.textContent = 'bu taomning narxi: 6 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'gumma') {
        elWrapperSpan.textContent = 'bu taomning narxi: 3 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'grill') {
        elWrapperSpan.textContent = 'bu taomning narxi: 60 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'kfc') {
        elWrapperSpan.textContent = 'bu taomning narxi: 36 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'lavash') {
        elWrapperSpan.textContent = 'bu taomning narxi: 28 000 sum';
        elWrapperSpan.style.display = 'flex';
    } else if (elWrapperInput.value == 'hot-dog') {
        elWrapperSpan.textContent = 'bu taomning narxi: 8 000 sum';
        elWrapperSpan.style.display = 'flex';
    }
})


elWrapperBtn.style.display = 'inline-block';
elWrapperBtn.style.padding = '10px 30px';
elWrapperBtn.style.borderRadius = '20px';
elWrapperBtn.style.border = '1.5px solid black';
elWrapperBtn.style.borderLeft = '0';
elWrapperBtn.style.borderBottomLeftRadius = '0';
elWrapperBtn.style.borderTopLeftRadius = '0';
elWrapperBtn.style.position = 'relative';
elWrapperBtn.style.left = '-10px';
elWrapperBtn.style.cursor = 'pointer';
elWrapperBtn.style.background = 'linear-gradient(0deg, rgb(207 207 207 / 53%), white, rgb(207 207 207 / 53%), rgb(207 207 207 / 53%), white, rgb(207 207 207 / 53%), rgb(207 207 207 / 53%), white, rgb(207 207 207 / 53%))';
elWrapperBtn.style.marginBottom = '10px';

// ============================= WRAPPER-BTN END ============================= //

// ============================= WRAPPER-SPAN START ============================= //

elWrapperSpan.style.display = 'none';
elWrapperSpan.style.borderRadius = '10px';
elWrapperSpan.style.padding = '10px 20px';
elWrapperSpan.style.background = 'repeating-linear-gradient(90deg, red, #8080fe)';
elWrapperSpan.style.color = 'white';

// ============================= WRAPPER-SPAN END ============================= //