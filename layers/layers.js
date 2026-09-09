var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.723000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_Sezionidicensimento_2 = new ol.format.GeoJSON();
var features_Sezionidicensimento_2 = format_Sezionidicensimento_2.readFeatures(json_Sezionidicensimento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sezionidicensimento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sezionidicensimento_2.addFeatures(features_Sezionidicensimento_2);
var lyr_Sezionidicensimento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sezionidicensimento_2, 
                style: style_Sezionidicensimento_2,
                popuplayertitle: 'Sezioni di censimento',
                interactive: true,
                title: '<img src="styles/legend/Sezionidicensimento_2.png" /> Sezioni di censimento'
            });
var format_Densitdipopolazione_3 = new ol.format.GeoJSON();
var features_Densitdipopolazione_3 = format_Densitdipopolazione_3.readFeatures(json_Densitdipopolazione_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densitdipopolazione_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densitdipopolazione_3.addFeatures(features_Densitdipopolazione_3);
var lyr_Densitdipopolazione_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densitdipopolazione_3, 
                style: style_Densitdipopolazione_3,
                popuplayertitle: 'Densità di popolazione',
                interactive: true,
    title: 'Densità di popolazione<br />\
    <img src="styles/legend/Densitdipopolazione_3_0.png" /> 0 - 2000<br />\
    <img src="styles/legend/Densitdipopolazione_3_1.png" /> 2000 - 5000<br />\
    <img src="styles/legend/Densitdipopolazione_3_2.png" /> 5000 - 10000<br />\
    <img src="styles/legend/Densitdipopolazione_3_3.png" /> 10000 - 15000<br />\
    <img src="styles/legend/Densitdipopolazione_3_4.png" /> 15000 - 18000<br />' });
var format_Grafostradale_4 = new ol.format.GeoJSON();
var features_Grafostradale_4 = format_Grafostradale_4.readFeatures(json_Grafostradale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grafostradale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grafostradale_4.addFeatures(features_Grafostradale_4);
var lyr_Grafostradale_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grafostradale_4, 
                style: style_Grafostradale_4,
                popuplayertitle: 'Grafo stradale.',
                interactive: true,
    title: 'Grafo stradale.<br />\
    <img src="styles/legend/Grafostradale_4_0.png" /> s<3<br />\
    <img src="styles/legend/Grafostradale_4_1.png" /> 3<s<5<br />\
    <img src="styles/legend/Grafostradale_4_2.png" /> s>5<br />' });
var format_UNDGrandeproduttivit_5 = new ol.format.GeoJSON();
var features_UNDGrandeproduttivit_5 = format_UNDGrandeproduttivit_5.readFeatures(json_UNDGrandeproduttivit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNDGrandeproduttivit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNDGrandeproduttivit_5.addFeatures(features_UNDGrandeproduttivit_5);
var lyr_UNDGrandeproduttivit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNDGrandeproduttivit_5, 
                style: style_UNDGrandeproduttivit_5,
                popuplayertitle: 'UND Grande produttività',
                interactive: true,
                title: '<img src="styles/legend/UNDGrandeproduttivit_5.png" /> UND Grande produttività'
            });
var format_UNDBassaproduttivit_6 = new ol.format.GeoJSON();
var features_UNDBassaproduttivit_6 = format_UNDBassaproduttivit_6.readFeatures(json_UNDBassaproduttivit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNDBassaproduttivit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNDBassaproduttivit_6.addFeatures(features_UNDBassaproduttivit_6);
var lyr_UNDBassaproduttivit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UNDBassaproduttivit_6, 
                style: style_UNDBassaproduttivit_6,
                popuplayertitle: 'UND Bassa produttività',
                interactive: true,
                title: '<img src="styles/legend/UNDBassaproduttivit_6.png" /> UND Bassa produttività'
            });
var format_Confinecomunale_7 = new ol.format.GeoJSON();
var features_Confinecomunale_7 = format_Confinecomunale_7.readFeatures(json_Confinecomunale_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confinecomunale_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confinecomunale_7.addFeatures(features_Confinecomunale_7);
var lyr_Confinecomunale_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Confinecomunale_7, 
                style: style_Confinecomunale_7,
                popuplayertitle: 'Confine comunale',
                interactive: false,
                title: '<img src="styles/legend/Confinecomunale_7.png" /> Confine comunale'
            });
var format_Areeraccoltaprossimit_8 = new ol.format.GeoJSON();
var features_Areeraccoltaprossimit_8 = format_Areeraccoltaprossimit_8.readFeatures(json_Areeraccoltaprossimit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areeraccoltaprossimit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areeraccoltaprossimit_8.addFeatures(features_Areeraccoltaprossimit_8);
var lyr_Areeraccoltaprossimit_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areeraccoltaprossimit_8, 
                style: style_Areeraccoltaprossimit_8,
                popuplayertitle: 'Aree raccolta prossimità',
                interactive: false,
                title: '<img src="styles/legend/Areeraccoltaprossimit_8.png" /> Aree raccolta prossimità'
            });
var format_Postazionidiprossimit_9 = new ol.format.GeoJSON();
var features_Postazionidiprossimit_9 = format_Postazionidiprossimit_9.readFeatures(json_Postazionidiprossimit_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postazionidiprossimit_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postazionidiprossimit_9.addFeatures(features_Postazionidiprossimit_9);
var lyr_Postazionidiprossimit_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postazionidiprossimit_9, 
                style: style_Postazionidiprossimit_9,
                popuplayertitle: 'Postazioni di prossimità',
                interactive: false,
                title: '<img src="styles/legend/Postazionidiprossimit_9.png" /> Postazioni di prossimità'
            });
var group_Raccoltadiprossimit = new ol.layer.Group({
                                layers: [lyr_Areeraccoltaprossimit_8,lyr_Postazionidiprossimit_9,],
                                fold: 'open',
                                title: 'Raccolta di prossimità'});
var group_CONFINECOMUNALE = new ol.layer.Group({
                                layers: [lyr_Confinecomunale_7,],
                                fold: 'open',
                                title: 'CONFINE COMUNALE'});
var group_UND = new ol.layer.Group({
                                layers: [lyr_UNDGrandeproduttivit_5,lyr_UNDBassaproduttivit_6,],
                                fold: 'open',
                                title: 'UND'});
var group_GRAFOSTRADALE = new ol.layer.Group({
                                layers: [lyr_Grafostradale_4,],
                                fold: 'open',
                                title: 'GRAFO STRADALE'});
var group_SEZIONICENSIMENTOeANALISIDEMOGRAFICA = new ol.layer.Group({
                                layers: [lyr_Sezionidicensimento_2,lyr_Densitdipopolazione_3,],
                                fold: 'open',
                                title: 'SEZIONI CENSIMENTO e ANALISI DEMOGRAFICA'});
var group_CARTOGRAFIA = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,],
                                fold: 'close',
                                title: 'CARTOGRAFIA'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(false);lyr_Sezionidicensimento_2.setVisible(false);lyr_Densitdipopolazione_3.setVisible(true);lyr_Grafostradale_4.setVisible(true);lyr_UNDGrandeproduttivit_5.setVisible(false);lyr_UNDBassaproduttivit_6.setVisible(false);lyr_Confinecomunale_7.setVisible(true);lyr_Areeraccoltaprossimit_8.setVisible(false);lyr_Postazionidiprossimit_9.setVisible(false);
var layersList = [group_CARTOGRAFIA,group_SEZIONICENSIMENTOeANALISIDEMOGRAFICA,group_GRAFOSTRADALE,group_UND,group_CONFINECOMUNALE,group_Raccoltadiprossimit];
lyr_Sezionidicensimento_2.set('fieldAliases', {'COD_REG': 'COD_REG', 'PRO_COM': 'PRO_COM', 'SEZ21_ID': 'SEZ21_ID', 'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Zona': 'Zona', 'R12_2023_C': 'R12_2023_C', 'R12_2023_R': 'R12_2023_R', 'R12_2023_1': 'R12_2023_1', 'R12_2023_P': 'R12_2023_P', 'R12_2023_2': 'R12_2023_2', 'R12_2023_3': 'R12_2023_3', 'R12_2023_4': 'R12_2023_4', 'R12_2023_5': 'R12_2023_5', });
lyr_Densitdipopolazione_3.set('fieldAliases', {'COD_REG': 'COD_REG', 'PRO_COM': 'PRO_COM', 'SEZ21_ID': 'SEZ21_ID', 'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'R12_2023_C': 'R12_2023_C', 'R12_2023_R': 'R12_2023_R', 'R12_2023_1': 'R12_2023_1', 'R12_2023_P': 'R12_2023_P', 'R12_2023_2': 'R12_2023_2', 'R12_2023_3': 'R12_2023_3', 'R12_2023_4': 'R12_2023_4', 'R12_2023_5': 'R12_2023_5', 'DENSPOP': 'DENSPOP', });
lyr_Grafostradale_4.set('fieldAliases', {'Nome': 'Nome', 'Lunghezza': 'Lunghezza', 'Area': 'Area', 'Larghezza': 'Larghezza', });
lyr_UNDGrandeproduttivit_5.set('fieldAliases', {'name': 'name', 'address': 'address', 'type': 'type', 'latitude': 'latitude', 'longitude': 'longitude', 'INDIRIZZO': 'INDIRIZZO', 'UND': 'UND', 'CATEGORIA': 'CATEGORIA', });
lyr_UNDBassaproduttivit_6.set('fieldAliases', {'name': 'name', 'address': 'address', 'type': 'type', 'CATEGORIA': 'CATEGORIA', 'latitude': 'latitude', 'longitude': 'longitude', 'UND': 'UND', 'INDIRIZZO': 'INDIRIZZO', });
lyr_Confinecomunale_7.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Areeraccoltaprossimit_8.set('fieldAliases', {'SEZ21_ID': 'SEZ21_ID', 'FAM21': 'FAM21', });
lyr_Postazionidiprossimit_9.set('fieldAliases', {'pkuid': 'pkuid', 'Indirizzo': 'Indirizzo', 'Latitudine': 'Latitudine', 'Longitudine': 'Longitudine', 'Numero': 'Numero', 'Stato': 'Stato', 'Quantità': 'Quantità', });
lyr_Sezionidicensimento_2.set('fieldImages', {'COD_REG': 'TextEdit', 'PRO_COM': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Zona': 'TextEdit', 'R12_2023_C': 'TextEdit', 'R12_2023_R': 'TextEdit', 'R12_2023_1': 'TextEdit', 'R12_2023_P': 'TextEdit', 'R12_2023_2': 'TextEdit', 'R12_2023_3': 'TextEdit', 'R12_2023_4': 'TextEdit', 'R12_2023_5': 'TextEdit', });
lyr_Densitdipopolazione_3.set('fieldImages', {'COD_REG': 'TextEdit', 'PRO_COM': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'R12_2023_C': 'TextEdit', 'R12_2023_R': 'TextEdit', 'R12_2023_1': 'TextEdit', 'R12_2023_P': 'TextEdit', 'R12_2023_2': 'TextEdit', 'R12_2023_3': 'TextEdit', 'R12_2023_4': 'TextEdit', 'R12_2023_5': 'TextEdit', 'DENSPOP': 'TextEdit', });
lyr_Grafostradale_4.set('fieldImages', {'Nome': 'TextEdit', 'Lunghezza': 'TextEdit', 'Area': 'TextEdit', 'Larghezza': 'TextEdit', });
lyr_UNDGrandeproduttivit_5.set('fieldImages', {'name': 'TextEdit', 'address': 'TextEdit', 'type': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'INDIRIZZO': '', 'UND': '', 'CATEGORIA': 'TextEdit', });
lyr_UNDBassaproduttivit_6.set('fieldImages', {'name': 'TextEdit', 'address': 'TextEdit', 'type': 'TextEdit', 'CATEGORIA': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'UND': '', 'INDIRIZZO': '', });
lyr_Confinecomunale_7.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Areeraccoltaprossimit_8.set('fieldImages', {'SEZ21_ID': 'TextEdit', 'FAM21': 'TextEdit', });
lyr_Postazionidiprossimit_9.set('fieldImages', {'pkuid': 'TextEdit', 'Indirizzo': 'TextEdit', 'Latitudine': 'TextEdit', 'Longitudine': 'TextEdit', 'Numero': 'TextEdit', 'Stato': 'TextEdit', 'Quantità': 'TextEdit', });
lyr_Sezionidicensimento_2.set('fieldLabels', {'COD_REG': 'hidden field', 'PRO_COM': 'hidden field', 'SEZ21_ID': 'hidden field', 'POP21': 'hidden field', 'FAM21': 'header label - always visible', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Zona': 'hidden field', 'R12_2023_C': 'hidden field', 'R12_2023_R': 'hidden field', 'R12_2023_1': 'hidden field', 'R12_2023_P': 'hidden field', 'R12_2023_2': 'hidden field', 'R12_2023_3': 'hidden field', 'R12_2023_4': 'inline label - visible with data', 'R12_2023_5': 'hidden field', });
lyr_Densitdipopolazione_3.set('fieldLabels', {'COD_REG': 'hidden field', 'PRO_COM': 'hidden field', 'SEZ21_ID': 'hidden field', 'POP21': 'header label - always visible', 'FAM21': 'header label - always visible', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'R12_2023_C': 'hidden field', 'R12_2023_R': 'hidden field', 'R12_2023_1': 'hidden field', 'R12_2023_P': 'hidden field', 'R12_2023_2': 'hidden field', 'R12_2023_3': 'hidden field', 'R12_2023_4': 'hidden field', 'R12_2023_5': 'hidden field', 'DENSPOP': 'header label - always visible', });
lyr_Grafostradale_4.set('fieldLabels', {'Nome': 'no label', 'Lunghezza': 'no label', 'Area': 'no label', 'Larghezza': 'header label - always visible', });
lyr_UNDGrandeproduttivit_5.set('fieldLabels', {'name': 'hidden field', 'address': 'hidden field', 'type': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'INDIRIZZO': 'header label - always visible', 'UND': 'header label - always visible', 'CATEGORIA': 'header label - always visible', });
lyr_UNDBassaproduttivit_6.set('fieldLabels', {'name': 'hidden field', 'address': 'hidden field', 'type': 'hidden field', 'CATEGORIA': 'header label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'UND': 'header label - always visible', 'INDIRIZZO': 'header label - always visible', });
lyr_Confinecomunale_7.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Areeraccoltaprossimit_8.set('fieldLabels', {'SEZ21_ID': 'no label', 'FAM21': 'no label', });
lyr_Postazionidiprossimit_9.set('fieldLabels', {'pkuid': 'no label', 'Indirizzo': 'no label', 'Latitudine': 'no label', 'Longitudine': 'no label', 'Numero': 'no label', 'Stato': 'no label', 'Quantità': 'no label', });
lyr_Postazionidiprossimit_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});