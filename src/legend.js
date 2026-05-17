// legend.js
export const Legend = {
    create(map, breaks, colors, field) {
        const legend = L.control({ position: 'bottomright' });

        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'legend-gradient');
            let labels = [`<strong>${field}</strong>`];

            for (let i = 0; i < breaks.length - 1; i++) {
                const from = breaks[i].toFixed(2);
                const to = breaks[i + 1].toFixed(2);
                const color = colors[i];
                labels.push(
                    `<i style="background:${color}"></i> ${from}&ndash;${to}`
                );
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };

        legend.addTo(map);
    }
};