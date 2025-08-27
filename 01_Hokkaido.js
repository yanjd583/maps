let sta01original, rail01original;
let sta01layer, rail01layer;
const thresholdInput = document.getElementById('threshold');
const thresholdLabel = document.getElementById('threshold-label');
const filterToggle = document.getElementById('filter-toggle');
//var customIcon = L.icon({
//  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//  iconSize: [24, 24],
//  iconAnchor: [12, 24],
//  popupAnchor: [0, -24]
//});
var customIcon = L.divIcon({
    className: 'circle',
    iconSize: [5, 5]
});
// GeoJSONを読み込んで初期化
fetch('01_Sta_hokkaido.geojson')
  .then(res => res.json())
  .then(data => {
    sta01original = data;
    updateLayer();
  })
  .catch(err => console.error('GeoJSON 読み込みエラー:', err));
// レイヤ更新関数
function updateLayer() {
  const thresh = +thresholdInput.value;
  thresholdLabel.textContent = thresh;
  if (sta01layer) {
    map.removeLayer(sta01layer);
  }
  sta01layer = L.geoJSON(sta01original, {
    filter: features => {
      if (!filterToggle.checked) return true;
      return features.properties.start_y <= thresh && features.properties.end_y >= thresh;
    },
    pointToLayer: function(features, latlng) {
      return L.marker(latlng, {icon: customIcon});
    },
    
    onEachFeature: (features, layer) => {
      layer.bindPopup(`駅名: ${features.properties.N05_011}<br>
      会社: ${features.properties.N05_003}<br>
      路線: ${features.properties.N05_002}<br>
      開: ${features.properties.start_org}<br>
      自: ${features.properties.start}<br>
      至: ${features.properties.end}`);
    }
    
  }).addTo(map);
}

fetch('01_Rail_hokkaido.geojson')
  .then(res => res.json())
  .then(data => {
    rail01original = data;
    updateLayer();
  })
  .catch(err => console.error('GeoJSON 読み込みエラー:', err));
// レイヤ更新関数
function updateLayer() {
  const thresh = +thresholdInput.value;
  thresholdLabel.textContent = thresh;
  if (rail01layer) {
    map.removeLayer(rail01layer);
  }
  rail01layer = L.geoJSON(rail01original, {
    filter: features => {
      if (!filterToggle.checked) return true;
      return features.properties.start_y <= thresh && features.properties.end_y >= thresh;
    },
    //pointToLayer: function(features, latlng) {
    //  return L.marker(latlng, {icon: customIcon});
    //},
    
    onEachFeature: (features, layer) => {
      layer.bindPopup(`会社: ${features.properties.N05_003}<br>
      路線: ${features.properties.N05_002}<br>
      軌間: ${features.properties.gauge}<br>
      電化: ${features.properties.Electrific}<br>
      開: ${features.properties.start_org}<br>
      自: ${features.properties.start}<br>
      至: ${features.properties.end}`);
    }
    
  }).addTo(map);
}