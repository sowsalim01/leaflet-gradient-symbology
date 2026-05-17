// palette.js
// Author: Mamadou SOW (sowsalim)
// Color palette generation and interpolation
export const Palette = {
    predefined: {
        Blues: ['#f7fbff', '#deebf7', '#9ecae1', '#3182bd', '#08519c'],
        Reds: ['#fff5f0', '#fcbba1', '#fc9272', '#de2d26', '#a50f15'],
        Greens: ['#f7fcf5', '#c7e9c0', '#74c476', '#238b45', '#00441b'],
        Oranges: ['#fff5eb', '#fdd0a2', '#fdae6b', '#e6550d', '#a63603']
    },

    generate(paletteName, numClasses) {
        const base = this.predefined[paletteName] || this.predefined.Blues;
        if (numClasses <= base.length) return base.slice(0, numClasses);

        const colors = [];
        for (let i = 0; i < numClasses; i++) {
            const factor = i / (numClasses - 1);
            const color = this.interpolateColor(
                base[0],
                base[base.length - 1],
                factor
            );
            colors.push(color);
        }
        return colors;
    },

    interpolateColor(color1, color2, factor) {
        const c1 = this.hexToRgb(color1);
        const c2 = this.hexToRgb(color2);
        const result = {
            r: Math.round(c1.r + factor * (c2.r - c1.r)),
            g: Math.round(c1.g + factor * (c2.g - c1.g)),
            b: Math.round(c1.b + factor * (c2.b - c1.b))
        };
        return this.rgbToHex(result.r, result.g, result.b);
    },

    hexToRgb(hex) {
        const bigint = parseInt(hex.replace('#', ''), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    },

    rgbToHex(r, g, b) {
        return (
            '#' +
            [r, g, b]
                .map(x => x.toString(16).padStart(2, '0'))
                .join('')
        );
    }
};
