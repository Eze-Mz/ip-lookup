import { useState } from "react"; 
import { searchIpInfo } from "../services/ip.service";
import { IpData } from "../types";

export function useGetIpData() {
  const [ipData, setIpData] = useState<IpData | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const [loading, setLoading] = useState(false);

  const getIpData = async (ip: string) => { 
    try {
      setLoading(true);
      setError(null);
      const ipInfo = await searchIpInfo(ip);
      setIpData(ipInfo);
    } catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        }
        console.log(error, typeof error);
    } finally {
        setLoading(false);
    }
  };


  return { ipData, error, loading, getIpData };
}