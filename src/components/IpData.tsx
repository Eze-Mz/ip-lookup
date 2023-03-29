import "./IpData.css";
import { Map } from "./Map";
import { IpData as IpDataType } from "../types";

interface Props {
    ipData: IpDataType | null;
}

export const ShowIpData: React.FC<Props> = ({ ipData }) => {
    return (
        <>
            {ipData &&
                <section>
                    <div className="data">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Continent</th>
                                    <td>{ipData?.continent}</td>
                                </tr>
                                <tr>
                                    <th>Country</th>
                                    <td>{ipData?.country} <img className="flag" src={ipData?.country_flag} alt="country flag" /></td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{ipData.city}</td>
                                </tr>
                                <tr>
                                    <th>Phone code</th>
                                    <td>{ipData?.country_phone}</td>
                                </tr>
                                <tr>
                                    <th>Concurrency</th>
                                    <td>{ipData?.currency}</td>
                                </tr>
                                <tr>
                                    <th>Timezone</th>
                                    <td>{ipData?.timezone_name}</td>
                                </tr>
                                <tr>
                                    <th>ISP (Internet Service Provider)</th>
                                    <td>{ipData?.isp}</td>
                                </tr>
                            </tbody>
                        </table>

                        <Map lat={ipData?.latitude} lng={ipData?.longitude} />
                    </div>

                    <div className="raw">
                        <h3>Raw data</h3>
                        <pre>
                            {ipData.raw_data}
                        </pre>
                    </div>
                </section>
            }
        </>
    );
};