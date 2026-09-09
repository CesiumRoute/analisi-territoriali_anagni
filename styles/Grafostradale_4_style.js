var size = 0;
var placement = 'point';
function categories_Grafostradale_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 's<3':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,200,76,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '3<s<5':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(117,218,184,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 's>5':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(205,51,105,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Grafostradale_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Larghezza");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if (feature.get("Nome") !== null) {
        labelText = String(feature.get("Nome"));
    }
    
    var style = categories_Grafostradale_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
