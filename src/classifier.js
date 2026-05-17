// classifier.js
// Author: Mamadou SOW (sowsalim)
// Classification methods for gradient symbology
export const Classifier = {
    computeBreaks(values, numClasses, method) {
        if (!values.length) return [];

        switch (method) {
            case 'quantile':
                return this.quantile(values, numClasses);
            case 'equalInterval':
                return this.equalInterval(values, numClasses);
            default:
                return this.equalInterval(values, numClasses);
        }
    },

    equalInterval(values, numClasses) {
        const min = Math.min(...values);
        const max = Math.max(...values);
        const step = (max - min) / numClasses;
        const breaks = [];
        for (let i = 0; i <= numClasses; i++) {
            breaks.push(min + i * step);
        }
        return breaks;
    },

    quantile(values, numClasses) {
        const sorted = [...values].sort((a, b) => a - b);
        const breaks = [];
        for (let i = 0; i <= numClasses; i++) {
            const idx = Math.floor((i * sorted.length) / numClasses);
            breaks.push(sorted[idx]);
        }
        return breaks;
    }
};
