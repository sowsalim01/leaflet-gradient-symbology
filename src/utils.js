// utils.js
export const Utils = {
    extractValues(layer, field) {
        const values = [];
        layer.eachLayer(l => {
            const v = l.feature?.properties?.[field];
            if (typeof v === 'number') values.push(v);
        });
        return values;
    },

    getColorForValue(value, breaks, colors) {
        for (let i = 0; i < breaks.length - 1; i++) {
            if (value >= breaks[i] && value < breaks[i + 1]) {
                return colors[i];
            }
        }
        return colors[colors.length - 1];
    },

    roundNumber(value, decimals = 2) {
        return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }
};
