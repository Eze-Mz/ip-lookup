export interface IpData {
    continent: string
    continent_code: string
    country: string
    country_code: string
    country_flag: string
    country_capital: string
    country_phone: string
    country_neighbours: string
    region: string
    city: string
    latitude: number
    longitude: number
    asn: string
    org: string
    isp: string
    timezone: string
    timezone_name: string
    currency: string
    currency_code: string
    raw_data: string
}

export interface DefaultLayers {
    vector: {
        normal: {
            map: H.map.layer.TileLayer,
            traffic: H.map.layer.TileLayer,
            trafficincidents: H.map.layer.MarkerTileLayer
        }
    };
    raster: {
        normal: H.service.MapType;
        satellite: H.service.MapType;
        terrain: H.service.MapType;
    };
}