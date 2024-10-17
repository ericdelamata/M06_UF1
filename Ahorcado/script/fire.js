let width = 174;
let height = 11;

(fireChars = " ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@"),
(maxCharIndex = fireChars.length);


let firePixelArray = [];

for (let i = 0; i < width * height + 1; i++) {
    firePixelArray[i] = 0;
}

generateFire = () => {
    let fireString = "";

    for (let i = 0; i < width; i++) {
        let randomCol = Math.floor(Math.random() * width);
        let index = randomCol + width * (height - 1);
        firePixelArray[index] = Math.floor(Math.random() * maxCharIndex);
    }

    for (let i = 0; i < width; i++) {
        let randomCol = Math.floor(Math.random() * width);
        let index = randomCol + width * (height - 1);
        firePixelArray[index] = 0;
    }


    for (let i = 0; i < width * (height - 1); i++) {

        let averageValue = (
                firePixelArray[i] +
                firePixelArray[i + 1] +
                firePixelArray[i + width] +
                firePixelArray[i + width + 1]) /
            4;

        firePixelArray[i] = Math.floor(averageValue);

        fireString += fireChars[firePixelArray[i]];
        if (i % width === 0) fireString += '\n';
    }

    document.getElementById("fire").innerText = fireString;
    setTimeout(generateFire, 30);
}

generateFire();