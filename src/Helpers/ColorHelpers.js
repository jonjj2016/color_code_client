import chroma from 'chroma-js';
import seedColors from '../Utils/seedColors';

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = (hexColor) => {
    const endColor = '#fff';

    return [chroma(hexColor).darken(1.6).hex(), hexColor, endColor];
};

export const scaleGenerator = (hexColor, numberOfColors) => {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
};

export const paletteGenerator = (starterPallet) => {
    let newPalette = {
        paletteName: starterPallet.paletteName,
        id: starterPallet.id,
        emoji: starterPallet.emoji,
        colors: {},
    };
    levels.forEach((level) => {
        newPalette.colors[level] = [];
    });
    starterPallet.colors.forEach((color) => {
        let scale = scaleGenerator(color.color, 10).reverse();
        scale.forEach((item, index) => {
            newPalette.colors[levels[index]].push({
                name: `${color.name} ${levels[index]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: item,
                rgb: chroma(item).css(),
                rgba: chroma(item).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
            });
        });
    });
    return newPalette;
};

export const findPalette = (palletes, id) => {
    return palletes.find((palette) => {
        return palette.id === id;
    });
};
export const gatherShades = (color, palette) => {
    //gathering all shades
    let shades = [];

    const allCollors = palette.colors;

    const keys = Object.keys(allCollors);
    keys.forEach((key) => {
        shades = [...shades, ...allCollors[key]];
    });
    return shades.filter((shade) => shade.id === color).slice(1);
};
const random = () => {
    return Math.floor(Math.random() * 255 + 1);
};
export const generateColor = () => {
    const randomColor = `rgb(${random()},${random()},${random()})`;
};


export const text_Color = (value) => {
    const isDarkcolor = chroma(value).luminance() <= 0.18;
    const isDarkish = chroma(value).luminance() > 0.18 && chroma(value).luminance() <= 0.38;
    const isBright = chroma(value).luminance() > 0.38;

    if (isDarkcolor) {
        return '#AED3D0';
    } else if (isDarkish) {
        return '#fae662';
    } else if (isBright) {
        return '#051937';
    }
};

export const generateShades = (color, number) => {
    const shades = chroma.scale(['#ffffff', color, '#000000']).colors(number);

    return shades.slice(1, shades.length);
}
export const isDarkcolor = (color) => {

    return chroma(color).luminance() <= 0.18
};