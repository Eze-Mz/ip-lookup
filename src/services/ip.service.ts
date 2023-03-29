const IpAPI = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
    }
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapIpData = (data: any) => {
    return  { 
      continent: data.continent,
    continent_code: data.continent_code,
    country: data.country,
    country_code: data.country_code,
    country_flag: data.country_flag,
    country_capital: data.country_capital,
    country_phone: data.country_phone,
    country_neighbours: data.country_neighbours,
    region: data.region,
    city: data.city,
    latitude: data.latitude,
    longitude: data.longitude,
    asn: data.asn,
    org: data.org,
    isp: data.isp,
    timezone: data.timezone,
    timezone_name: data.timezone_name,
    currency: data.currency,
    currency_code: data.currency_code,
    raw_data: JSON.stringify(data, null, 2)
    };
};

export const searchIpInfo = async (ip: string) => {
    const res = await fetch(IpAPI + ip, options);
    const data = await res.json();
    return mapIpData(data);
  };