# Leaflet Gradient Symbology

A Leaflet plugin for creating choropleth maps with gradient color symbology based on feature properties.

## Features

- **Multiple classification methods**: Equal interval and quantile classification
- **Predefined color palettes**: Blues, Reds, Greens, Oranges
- **Automatic legend generation**: Dynamic legend with class breaks
- **Customizable styling**: Control opacity, number of classes, and color schemes
- **Easy integration**: Simple API that works with Leaflet GeoJSON layers

## Installation

### CDN

Include the CSS and JS files in your HTML:

```html
<link rel="stylesheet" href="path/to/leaflet-gradient-symbology.css" />
<script src="path/to/leaflet-gradient-symbology.js"></script>
```

html### npm

```bash
npm install leaflet-gradient-symbology
```

bash## Usage

```javascript
// Initialize the map
const map = L.map('map').setView([14, -14], 7);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Load your GeoJSON data
fetch('data/regions.geojson')
    .then(res => res.json())
    .then(data => {
        const layer = L.geoJSON(data).addTo(map);

        // Apply gradient symbology
        L.gradientSymbology({
            map: map,
            layer: layer,
            field: 'densite',           // Property to classify
            palette: 'Blues',           // Color palette
            classes: 6,                 // Number of classes
            method: 'quantile',         // Classification method
            legend: true,               // Show legend
            opacity: 0.7                // Fill opacity
        });
    });
```

javascript## Options

| Option      | Type    | Default             | Description                                           |
| ----------- | ------- | ------------------- | ----------------------------------------------------- |
| `map`     | Object  | `null`            | Leaflet map instance (required for legend)            |
| `layer`   | Object  | required            | Leaflet GeoJSON layer                                 |
| `field`   | String  | required            | Property name to classify                             |
| `palette` | String  | `'Blues'`         | Color palette name (Blues, Reds, Greens, Oranges)     |
| `classes` | Number  | `5`               | Number of classification classes                      |
| `method`  | String  | `'equalInterval'` | Classification method ('equalInterval' or 'quantile') |
| `legend`  | Boolean | `true`            | Whether to show legend                                |
| `opacity` | Number  | `0.7`             | Fill opacity (0-1)                                    |

## Classification Methods

### Equal Interval

Divides the data range into equal-sized intervals. Best for uniformly distributed data.

### Quantile

Divides data into classes with equal numbers of features. Best for skewed distributions.

## Color Palettes

- **Blues**: Light to dark blue gradient
- **Reds**: Light to dark red gradient
- **Greens**: Light to dark green gradient
- **Oranges**: Light to dark orange gradient

## Demo

See the `examples/` directory for a working demo using Senegal region data.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES6 module support

## Dependencies

- Leaflet 1.9.4+

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Developed for choropleth mapping and spatial data visualization.
