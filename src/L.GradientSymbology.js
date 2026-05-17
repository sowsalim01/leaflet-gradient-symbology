// L.GradientSymbology.js
// Author: Mamadou SOW (sowsalim)
// Leaflet plugin for gradient symbology
import { Classifier } from './classifier.js';
import { Palette } from './palette.js';
import { Legend } from './legend.js';
import { Utils } from './utils.js';

L.gradientSymbology = function(options) {
    const {
        layer,
        field,
        palette = 'Blues',
        classes = 5,
        method = 'equalInterval',
        legend = true,
        opacity = 0.7
    } = options;

    const values = Utils.extractValues(layer, field);
    const breaks = Classifier.computeBreaks(values, classes, method);
    const colors = Palette.generate(palette, classes);

    applyStyle(layer, breaks, colors, field, opacity);

    if (legend && options.map) {
        Legend.create(options.map, breaks, colors, field);
    }

    return layer;
};

function applyStyle(layer, breaks, colors, field, opacity) {
    layer.eachLayer(featureLayer => {
        const value = featureLayer.feature.properties[field];
        const color = Utils.getColorForValue(value, breaks, colors);
        featureLayer.setStyle({
            fillColor: color,
            fillOpacity: opacity,
            weight: 1,
            color: '#333'
        });
    });
}
