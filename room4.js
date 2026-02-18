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
            textX: 35, textY: 40, textRotate: 0, textScale: 0.8, textSize: 24
            
        
         },

        { id: "102", yaw: -1.60, pitch: 0.40, r: 18, 
              shape: "M -3 30 L 190 10 L 190 205 L -17 215 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 30, textY: 60, textRotate: 0, textScale: 1, textSize: 24
            },

        { id: "103", yaw: -1.28, pitch: 0.45, r: 10, 
             shape: "M -3 06 L 150 -20 L 170 170 L -5 194 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 35, textY: 30, textRotate: -6, textScale: 1.1, textSize: 24
            }, 
            
        { id: "104", yaw: -1, pitch: 0.42, r: 0, 
             shape: "M 170 -10 L 190 180 L 10 205 L -7 18 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 30, textY: 45, textRotate: -8, textScale: 1.1, textSize: 24
            },     

        { id: "105", yaw: -0.70, pitch: 0.35, r: -15,
              shape: "M -3 06 L 135 22 L 200 196 L 1 195 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 30, textY: 40, textRotate: 0, textScale: 1, textSize: 24
            },

        { id: "106", yaw: -0.30, pitch: 0.60, r: -40,  shape: "M -80 -188 L 150 -110 L 210 165 L -60 180 Z",
             color: "rgba(13, 13, 210, 0.4)", // Blue fill for plot 106
             type: "amenity", // saleable, non-saleable
             icon: "assets/img/mosque.png", // Icon for plot 106
             iconX: 15, iconY: -20, iconScale: 3.4, iconRotate: 0, 
             textX: -50, textY: -145, textRotate: 10, textScale: 1, textSize: 24,
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
            textX: 37, textY: 200, textRotate: -90, textScale: 1, textSize: 24
           
         },

        { id: "108", yaw: -1.22, pitch: 0.85, r: 90, 
              shape: "M -17 10 L 179 -5 L 165 250 L -25 200 Z" ,
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: -3, textY: 170, textRotate: -86, textScale: 1, textSize: 24
        },

        { id: "109",  yaw: -1.64, pitch: 0.85, r: 115, 
              shape: "M -33 8 L 163 23 L 155 250 L -31 220 Z",
             info: "Area: 1200 sqft | Status: Available | Price: $50k",
            status: "available", // available, sold
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: -10, textY: 190, textRotate: -90, textScale: 1, textSize: 24
            }, 

        { id: "110", yaw: -1.90, pitch: 0.68, r: 140,
               shape: "M 15 25 L 200 -43 L 219 190 L 51 246 Z",
             info: "Area: 1200 sqft | Status: sold| Price: $50k",
            status: "sold", // available, sold
            color: "rgba(255, 0, 0, 0.4)", // Red fill for sold plots
            iconX: 50, iconY: 50, iconScale: 1, iconRotate: 0,
            textX: 65, textY: 210, textRotate: -100, textScale: 1, textSize: 24
            },

        { id: "111", yaw: -2.14, pitch: 0.60, r: 135,   shape: "M 12 8 L 183 38 L 148 625 L 36 480 Z",
            type: "amenity", // saleable, non-saleable
            color: "rgba(13, 13, 210, 0.4)", // blue fill for plot 111
            icon: "assets/img/temple.png" ,// icon for plot 111
             iconX: 45, iconY: 260, iconScale: 1.5, iconRotate: -85, 
             textX: 50, textY: 460, textRotate: -90, textScale: 0.8, textSize: 24,
         },

       // { id: "112", yaw: -0.85, pitch: 0.75, r: 79,   shape: "M 14 50 L 200 -43 L 205 190 L 14 246 Z" },

        { id: "213", yaw: -1.64, pitch: 0.55, r: 19, 
              shape: "M -246.5 20 L 1260 -40 L 1670 438 L -312 145 Z",
             type: "road", // saleable, non-saleable
             color: "rgba(128, 128, 128, 0.5)", // gray fill for roads
            labelText: "40 Feet Road", textX: 150, textY: 110, textRotate: 4, textScale: 2, textSize: 54
            },
        { id: "metro-pin", 
             type: "lollipop", 
             yaw: -0.85, pitch: -0.15, r: 0, 
              labelText: "METRO STATION (1.4 KM)",
            headShape: "M 10,40 H 240 A 10,10 0 0 0 250,30 V 10 A 10,10 0 0 0 240,0 H 10 A 10,10 0 0 0 0,10 V 30 A 10,10 0 0 0 10,40 Z", 
            
            stickShape: "M 120,40 L 125,120 L 130,40 Z",
            headColor: "rgba(255, 0, 0, 0.8)", 
            stickColor: "#ffffff",               
            textX: 125, // W/2
            vbW: 300,   // W+10
},

 { id: "Railway-pin", 
             type: "lollipop", 
             yaw: 0.155, pitch: -0.15, r: 0, 
              labelText: "RAILWAY STATION (NIZAMUDDIN) (3.8 KM)",
            // This shape creates a rounded box (top) and a sharp needle (bottom)
          headShape: "M 10,40 H 390 A 10,10 0 0 0 400,30 V 10 A 10,10 0 0 0 390,0 H 10 A 10,10 0 0 0 0,10 V 30 A 10,10 0 0 0 10,40 Z", 
    stickShape: "M 195,40 L 200,120 L 205,40 Z", 
    headColor: "rgba(255, 0, 0, 0.8)", 
    stickColor: "#ffffff",
    textX: 200, // Middle of 500
    vbW: 410    // Canvas is wide enough to hold 500
},

   { id: "G(clg)-pin", 
             type: "lollipop", 
             yaw: -1.45, pitch: -0.15, r: 0, 
              labelText: "GIRLS COLLEGE (1.9 KM)",
            headShape: "M 10,40 H 240 A 10,10 0 0 0 250,30 V 10 A 10,10 0 0 0 240,0 H 10 A 10,10 0 0 0 0,10 V 30 A 10,10 0 0 0 10,40 Z", 
            
            stickShape: "M 120,40 L 125,120 L 130,40 Z",
            headColor: "rgba(255, 0, 0, 0.8)", 
            stickColor: "#ffffff",               
            textX: 125, // W/2
            vbW: 300,   // W+10
},

   { id: "GU-pin", 
             type: "lollipop", 
             yaw: -2.10, pitch: -0.15, r: 0, 
              labelText: "GALGOTIYAS UNIVERSITY (2.8 KM)",
            headShape: "M 10,40 H 290 A 10,10 0 0 0 300,30 V 10 A 10,10 0 0 0 290,0 H 10 A 10,10 0 0 0 0,10 V 30 A 10,10 0 0 0 10,40 Z", 
            
            stickShape: "M 145,40 L 150,120 L 155,40 Z",
            headColor: "rgba(255, 0, 0, 0.8)", 
            stickColor: "#ffffff",               
            textX: 150, // W/2
            vbW: 310,   // W+10
},

   { id: "fuel-pin", 
             type: "lollipop", 
             yaw: -2.60, pitch: -0.15, r: 0, 
              labelText: "PETROLPUMP (1.2 KM)",
            headShape: "M 10,40 H 240 A 10,10 0 0 0 250,30 V 10 A 10,10 0 0 0 240,0 H 10 A 10,10 0 0 0 0,10 V 30 A 10,10 0 0 0 10,40 Z", 
            
            stickShape: "M 120,40 L 125,120 L 130,40 Z",
            headColor: "rgba(255, 0, 0, 0.8)", 
            stickColor: "#ffffff",               
            textX: 125, // W/2
            vbW: 300,   // W+10
},

   { id: "market-pin", 
             type: "lollipop", 
             yaw: -3.15, pitch: -0.15, r: 0, 
              labelText: "MAIN MARKET (1.1 KM)",
            headShape: "M 10,40 H 240 A 10,10 0 0 0 250,30 V 10 A 10,10 0 0 0 240,0 H 10 A 10,10 0 0 0 0,10 V 30 A 10,10 0 0 0 10,40 Z", 
            
            stickShape: "M 120,40 L 125,120 L 130,40 Z",
            headColor: "rgba(255, 0, 0, 0.8)", 
            stickColor: "#ffffff",               
            textX: 125, // W/2
            vbW: 300,   // W+10
},
    ];
// === LOGIC AREA: DO NOT TOUCH ===
  // === LOGIC AREA: FULLY FLEXIBLE VERSION ===
plots.forEach(function(p) {
    var wrapper = document.createElement('div');
    wrapper.className = 'hotspot-wrapper';

    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    
    // Define specific classes
    var typeClass = p.type ? "path-" + p.type : "path-saleable";
    var statusClass = p.status ? "status-" + p.status : "status-available";
    svg.setAttribute("class", `svg-plot-container ${typeClass} ${statusClass}`);

    // 1. PATH & VIEWBOX LOGIC
    if (p.type === "lollipop") {
        // Use individual ViewBox Width from data, default to 200
        var vbWidth = p.vbW || 200;
        svg.setAttribute("viewBox", `0 0 ${vbWidth} 200`);

        // Create Stick
        var stick = document.createElementNS(svgNS, "path");
        stick.setAttribute("d", p.stickShape); 
        stick.style.fill = p.stickColor || "#ffffff";
        svg.appendChild(stick);

        // Create Head
        var head = document.createElementNS(svgNS, "path");
        head.setAttribute("d", p.headShape); 
        head.id = "path-" + p.id;
        head.setAttribute("class", "plot-path " + typeClass);
        head.style.fill = p.headColor || "rgba(0, 210, 255, 0.8)";
        svg.appendChild(head);
        
        var path = head; 
    } else {
        svg.setAttribute("viewBox", "0 0 200 200");
        var path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", p.shape);
        path.id = "path-" + p.id;
        path.setAttribute("class", "plot-path " + typeClass + " " + statusClass);
        if (p.color) path.style.fill = p.color;
        svg.appendChild(path);
    }

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

    // 3. TEXT LOGIC
    if (p.id === "legend") { 
        var items = [
            { label: "Available", color: "#00ff64", y: 50 },
            { label: "Sold",      color: "#ef2828", y: 100 },
            { label: "Amenities", color: "#0d0dd2", y: 150 }
        ];
        items.forEach(function(item) {
            var dot = document.createElementNS(svgNS, "circle");
            dot.setAttribute("cx", "40"); dot.setAttribute("cy", item.y - 7);
            dot.setAttribute("r", "10");  dot.setAttribute("fill", item.color);
            svg.appendChild(dot);

            var lbl = document.createElementNS(svgNS, "text");
            lbl.setAttribute("x", "65");  lbl.setAttribute("y", item.y);
            lbl.setAttribute("fill", "white");
            lbl.style.fontSize = "22px";
            lbl.textContent = item.label;
            svg.appendChild(lbl);
        });
    } else {
        var text = document.createElementNS(svgNS, "text");
        if (p.type === "lollipop") {
            // USES DATA textX FOR INDIVIDUAL CENTERING
            text.setAttribute("x", p.textX || 100);
            text.setAttribute("y", "25"); 
            text.style.fontSize = "12px"; 
        } else {
            // 2. THE PLOT TEXT FACTORY
    var text = document.createElementNS(svgNS, "text");
    
    var tx = p.textX || 100; 
    var ty = p.textY || 110;
    var tr = p.textRotate || 0;  // Get rotation from data
    var ts = p.textScale || 1;   // Get scale from data

    text.setAttribute("x", tx); 
    text.setAttribute("y", ty);
    
    // THIS IS THE MISSING LINK:
    // We set the center of rotation to the text's own X and Y
    text.style.transformOrigin = `${tx}px ${ty}px`;
    text.style.transform = `rotate(${tr}deg) scale(${ts})`;
        }
        text.setAttribute("class", "plot-text");
        text.textContent = p.labelText ? p.labelText : p.id;
        svg.appendChild(text);
    }

    // 4. TOOLTIP & WRAPPER
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
    
    if (p.type === "lollipop") {
        svg.style.transform = `rotate(${p.r}deg)`; 
    } else {
        svg.style.transform = `rotate(${p.r}deg) rotateX(60deg)`;
    }

    room4Data.scene.hotspotContainer().createHotspot(wrapper, 
        { yaw: p.yaw, pitch: p.pitch }, 
        { perspective: { radius: 1000, extraScale: 1 } }
    );
});}