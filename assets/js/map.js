var map = L.map('map', {
    center: [-11.805540208777106, -77.16513806959128],
    zoom: 14,
    minZoom: 12,
    maxZoom: 20,
    maxBounds: [[-11.844428,-77.220657], [11.721265,-77.117149]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);


var Curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_rosa/wms?", {
    layers: "web_santa_rosa:curvas_nivel", //gisweb:Curvas_nivel
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Curvas_nivel.addTo(map);

var Colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_rosa/wms?", {
    layers: "web_santa_rosa:colegio_rosa", //gisweb:Colegios
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Colegios.addTo(map);

var Farmacia = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_rosa/wms?", {
    layers: "web_santa_rosa:rosa_farmacia", //gisweb:Farmacia
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Farmacia.addTo(map);

var Grifos = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_rosa/wms?", {
    layers: "web_santa_rosa:grifo_santa_rosa", //gisweb:Grifos 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Grifos.addTo(map);

var Rosa = L.tileLayer.wms("http://localhost:8080/geoserver/web_santa_rosa/wms?", {
    layers: "web_santa_rosa:rosa_lima", //gisweb:santa rosa 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Rosa.addTo(map);




var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
};

var overlayMaps = {
    "Curvas_nivel":Curvas_nivel,
    "Colegios":Colegios,
    "Farmacia":Farmacia,
    "Grifos":Grifos,
    "Rosa":Rosa
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
