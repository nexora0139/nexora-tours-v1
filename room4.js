var room4Data = window.allScenes.find(s => s.data.id === "3-room4");

if (room4Data) {
    var plots = [
        { 
    id: "legend", 
    type: "legend", // New type
    yaw: -1.27, pitch: 0.21, r: 4, // Adjust these to place it near your plots
    shape: "M 0 0 L 250 0 L 260 210 L -10 200 Z", // A clean rectangle
    color: "rgba(0, 0, 0, 0.6)", // Dark semi-transparent background
    isLegend: true // A flag for our logic
},

        { id: "101",
            yaw: -1.9, pitch: 0.35, r: 25, 
            shape: "M 18 11 L 180 -15 L 165 175 L -50 170 Z",
            info: "Area: 1200 sqft | Status: Sold | Price: $50k",
            status: "sold", // available, sold
            color: "rgba(255, 0, 0, 0.4)", // Red fill for sold plot
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
            
        
         },

        { id: "102", yaw: -1.60, pitch: 0.40, r: 18, 
              shape: "M -3 30 L 190 10 L 190 205 L -17 215 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
            },

        { id: "103", yaw: -1.28, pitch: 0.45, r: 10, 
             shape: "M -3 06 L 150 -20 L 170 170 L -5 194 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
            }, 
            
        { id: "104", yaw: -1, pitch: 0.42, r: 0, 
             shape: "M 170 -10 L 190 180 L 10 205 L -7 18 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
            },     

        { id: "105", yaw: -0.70, pitch: 0.35, r: -15,
              shape: "M -3 06 L 135 22 L 200 196 L 1 195 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
            },

        { id: "106", yaw: -0.30, pitch: 0.60, r: -40,  shape: "M -80 -188 L 150 -110 L 210 165 L -60 180 Z",
             color: "rgba(13, 13, 210, 0.4)", // Blue fill for plot 106
             type: "amenity", // saleable, non-saleable
             icon: "assets/img/mosque.png", // Icon for plot 106
             iconX: 50, iconY: -20, 
             textX: 50, textY: 10
         },

      // { id: "207", 
         //   yaw: -1.5, pitch: 0.05, r: -10,
           //  shape: "M -150 -100 C -90 90, -150 -150, 100 80 Z",
            //type: "road",  saleable, non-saleable
            //color: "rgba(128, 128, 128, 0.5)",  gray fill for roads
          //  },  

        { id: "107", yaw: -0.85, pitch: 0.75, r: 79, 
              shape: "M 14 50 L 200 -43 L 205 190 L 14 246 Z",
               info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
           
         },

        { id: "108", yaw: -1.22, pitch: 0.85, r: 90, 
              shape: "M -17 10 L 179 -5 L 165 250 L -25 200 Z" ,
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
        },

        { id: "109",  yaw: -1.64, pitch: 0.85, r: 115, 
              shape: "M -33 8 L 163 23 L 155 250 L -31 220 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
            }, 

        { id: "110", yaw: -1.90, pitch: 0.68, r: 140,
               shape: "M 15 25 L 200 -43 L 219 190 L 51 246 Z",
             info: "Area: 1200 sqft | Status: sold| Price: $50k",
            status: "sold", // available, sold
            color: "rgba(255, 0, 0, 0.4)", // Red fill for sold plots
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 100, textY: 110, textRotate: 0, textScale: 1, textSize: 24
            },

        { id: "111", yaw: -2.14, pitch: 0.60, r: 135,   shape: "M 12 8 L 183 38 L 148 625 L 36 480 Z",
            type: "amenity", // saleable, non-saleable
            color: "rgba(13, 13, 210, 0.4)", // blue fill for plot 111
            icon: "assets/img/temple.png" // icon for plot 111
         },

        { id: "112", yaw: -0.85, pitch: 0.75, r: 79,   shape: "M 14 50 L 200 -43 L 205 190 L 14 246 Z" },

        { id: "213", yaw: -1.64, pitch: 0.55, r: 19, 
              shape: "M -246.5 20 L 1260 -40 L 1670 438 L -312 145 Z",
             type: "road", // saleable, non-saleable
             color: "rgba(128, 128, 128, 0.5)", // gray fill for roads
            labelText: "40 Feet Road", textX: 150, textY: 110, textRotate: 4, textScale: 2, textSize: 54
            },
    ];
// === LOGIC AREA: DO NOT TOUCH ===
    plots.forEach(function(p) {
        var wrapper = document.createElement('div');
        wrapper.className = 'hotspot-wrapper';

        var svgNS = "http://www.w3.org/2000/svg";
        var svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 200 200");
        
        // Define specific classes
        var typeClass = p.type ? "path-" + p.type : "path-saleable";
        var statusClass = p.status ? "status-" + p.status : "status-available";
        svg.setAttribute("class", `svg-plot-container ${typeClass} ${statusClass}`);

        // 1. PATH
      // === REPLACE YOUR PATH SECTION WITH THIS ===
var path = document.createElementNS(svgNS, "path");
path.setAttribute("d", p.shape);
path.id = "path-" + p.id;

// Create the labels based on type (road, amenity, or saleable)
var typeClass = p.type ? "path-" + p.type : "path-saleable";
var statusClass = p.status ? "status-" + p.status : "status-available";

// SET THE CLASS ONCE (This was the main bug)
path.setAttribute("class", "plot-path " + typeClass + " " + statusClass);

if (p.color) path.style.fill = p.color;
svg.appendChild(path);
        // 2. ICON
        if (p.icon) {
            var img = document.createElementNS(svgNS, "image");
            var finalPath = p.icon.includes("assets/") ? p.icon : "assets/img/" + p.icon;
            img.setAttributeNS("http://www.w3.org/1999/xlink", "href", finalPath);
            var ix = p.iconX || 50; var iy = p.iconY || 50;
            img.setAttribute("x", ix); img.setAttribute("y", iy);
            img.setAttribute("width", "100"); img.setAttribute("height", "100");
            img.style.transformOrigin = (parseInt(ix) + 50) + "px " + (parseInt(iy) + 50) + "px";
            img.style.transform = `scale(${p.iconScale || 1}) rotate(${p.iconRotate || 0}deg)`;
            img.setAttribute("class", "plot-icon");
            svg.appendChild(img);
        }

        // 3. TEXT
      // === REPLACE YOUR OLD TEXT LOGIC WITH THIS ===

if (p.id === "legend") { 
    // 1. THE LEGEND FACTORY
    var items = [
        { label: "Available", color: "#00ff64", y: 50 },
        { label: "Sold",      color: "#ef2828", y: 100 },
        { label: "Amenities", color: "#0d0dd2", y: 150 }
    ];

    items.forEach(function(item) {
        // Draw the colored dot
        var dot = document.createElementNS(svgNS, "circle");
        dot.setAttribute("cx", "40"); dot.setAttribute("cy", item.y - 7);
        dot.setAttribute("r", "10");  dot.setAttribute("fill", item.color);
        svg.appendChild(dot);

        // Draw the text next to the dot
        var lbl = document.createElementNS(svgNS, "text");
        lbl.setAttribute("x", "65");  lbl.setAttribute("y", item.y);
        lbl.setAttribute("fill", "white");
        lbl.style.fontSize = "22px";
        lbl.textContent = item.label;
        svg.appendChild(lbl);
    });

} else {
    // 2. THE PLOT NUMBER FACTORY (Your original code)
    var text = document.createElementNS(svgNS, "text");
    var tx = p.textX || 100; var ty = p.textY || 110;
    text.setAttribute("x", tx); text.setAttribute("y", ty);
    text.setAttribute("class", "plot-text");
    text.textContent = p.labelText ? p.labelText : p.id;
    svg.appendChild(text);
}

        // 4. TOOLTIP LOGIC
        var tooltip = document.getElementById('plot-tooltip');
        path.addEventListener('mouseenter', function(e) {
            if (p.info) {
                tooltip.style.display = 'block';
                tooltip.innerHTML = `<strong>Plot ${p.id}</strong><br>${p.info}`;
            }
        });
        path.addEventListener('mousemove', e => {
            tooltip.style.left = (e.clientX + 15) + 'px';
            tooltip.style.top = (e.clientY + 15) + 'px';
        });
        path.addEventListener('mouseleave', () => tooltip.style.display = 'none');

        wrapper.appendChild(svg);
        svg.style.transform = `rotate(${p.r}deg) rotateX(60deg)`;

        room4Data.scene.hotspotContainer().createHotspot(wrapper, 
            { yaw: p.yaw, pitch: p.pitch }, 
            { perspective: { radius: 1000, extraScale: 1 } }
        );
    });
}