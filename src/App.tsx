import { useState } from 'react';
import './App.css';
import { ShowIpData } from './components/IpData';
import { IPv4_REGEXP } from './const';
import { useGetIpData } from './hooks/useGetIpData';



function App(): JSX.Element {
  const [ip, setIp] = useState<string>('');
  const { ipData, loading, getIpData } = useGetIpData();
  console.log(process.env.RAPID_API_KEY);
  console.log(process.env.RAPID_API_HOST);
  console.log(process.env.HERE_API_KEY);
  const api_key = process.env.RAPID_API_KEY;
console.log(api_key);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    getIpData(ip);
  };

  return (
    <main className='container'>
      <h1 className='center'>IPv4 lookup</h1>
      <form className='search-box' onSubmit={handleSubmit}>
        <div>
          <input
            required value={ip}
            onChange={(e) => setIp(e.target.value)}
            type="text"
            placeholder='for example 8.8.4.4'
            pattern={IPv4_REGEXP.source}
          />
          <span>use a valid IPv4 format</span>
        </div>
        <button type='submit'>check IP</button>
      </form>
      { loading ? <p>loading... </p> : <ShowIpData ipData={ipData} />}
    </main>
  );
}

export default App;
