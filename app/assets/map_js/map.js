$(document).ready(function() {
    var app = new Mapp({
        element: '#appMap',
        presets: {
            latlng: {
                lat: 33 ,
                lng: 51,
            },
            zoom: 8,
        },
        i18n: {
            fa: {
                'custom-baselayer-1': 'لایه یک',
                'custom-baselayer-2': 'لایه دو',
            },
            en: {
                'custom-baselayer-1': 'Baselayer one',
                'custom-baselayer-2': 'Baselayer two',
            },
        },
        apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAwNzc1ODZhYmExZDhmZGJjZjcwNzYyMDZhNjFmZGIyZTgwOWI0NjE2YzI5NmM0ZDFkYWUwNWNjZDk0MGEzMGZlMWYzZWQ0ODMyZjFhNDRjIn0.eyJhdWQiOiIyOTc3OCIsImp0aSI6IjAwNzc1ODZhYmExZDhmZGJjZjcwNzYyMDZhNjFmZGIyZTgwOWI0NjE2YzI5NmM0ZDFkYWUwNWNjZDk0MGEzMGZlMWYzZWQ0ODMyZjFhNDRjIiwiaWF0IjoxNzMyNzAxMTkyLCJuYmYiOjE3MzI3MDExOTIsImV4cCI6MTczNTIwNjc5Miwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.OieJIdfhxWwEV50dMNCgiI66slEE3QbnWzjIYKWcNFGFsnQDn3s_LH0N8jjFtVfd4pPaHeqo5BFaud1r-PrGVIU5jKfqaSEJdXSI-axMCgn8bNwhDctHm_ICtPpofdkg4NWx-1TSpEIhck56LxNq1pvhtI1HwzVHGYnuz7C_C0ZYP7Yj2Y_DxeZxZcaFL-Y3b8iVK-u9P7xbGTf3cNe46kyIutTwq-3VGEIAe_u0Ktr6GZyBWI_dm2PjSscpc0gC4EGxQAAGz07bt1cP0oOMuUCOpH4jUoa_rjaYqHUeLooWR6InjGqT2tqPWchJSWtbSYZy1L3L7df4bBiKIX3IYQ'
    });
    app.addFullscreen();
    app.addZoomControls();
    app.addDynamicLocation({
        format: 'dms',
        source: 'center',
    });
    app.addContextmenu({
        here: true,
        distance: true,
        area: true,
        copy: true,
        share: true,
        static: true,
    });

    app.showReverseGeocode({
        state: {
            latlng: {
                lat: 35.73249,
                lng: 51.42268,
            },
            zoom: 16,
        },
    });

    app.addGeolocation({
        history: true,
        onLoad: true,
        onLoadCallback: function(){
            console.log(app.states.user.latlng);
        },
    });

    app.map.on('click', function(e) {
        app.showReverseGeocode({
          state: {
            latlng: {
              lat: e.latlng.lat,
              lng: e.latlng.lng
            },
            zoom: 16
          }
        });
        app.addMarker({
          name: 'advanced-marker',
          latlng: {
            lat: e.latlng.lat,
            lng: e.latlng.lng
          },
          icon: app.icons.red,
          popup: false
        });
    });
    app.addLayers({
        base: {
            default: {
                server: 'https://map.ir/shiveh',
                layers: 'Shiveh:Shiveh',
                format: 'image/png',
                i18n: 'custom-baselayer-1',
            },
            other: {
                server: 'https://world.map.ir/shiveh',
                layers: 'Shiveh:Shiveh',
                format: 'image/png',
                i18n: 'custom-baselayer-2',
            },
        },
        over: {},
    });
    app.addVectorLayers();
    let marker = app.addMarker({
        name: 'marker',
        latlng: {
          lat: 35.73249,
          lng: 51.42268
        },
        popup: {
          open: false
        }
    });
    app.openStaticMap({
        state: {
            latlng: {
                lat: 35.73249,
                lng: 51.42268,
            },
            zoom: 16,
        },
        width: 800,
        height: 600,
        label: 'Test Map',
        color: 'blue',
    });
    

});