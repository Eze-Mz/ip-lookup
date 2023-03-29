import { useEffect, useRef } from "react";
import H from "@here/maps-api-for-javascript";
import { DefaultLayers } from "../types";

interface Props {
    lat: number | undefined;
    lng: number | undefined;

}

export const Map: React.FC<Props> = ({lat = 0, lng = 0}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<H.Map | null>(null);
    
    

    useEffect(() => {
        const platform = new H.service.Platform({
            apikey: import.meta.env.VITE_HERE_API_KEY ?? "",
        });
        const defaultLayers = platform.createDefaultLayers() as DefaultLayers;
        
        if(mapRef.current === null) {
        mapRef.current = new H.Map(
            containerRef.current as HTMLElement,
            defaultLayers.vector.normal.map,
            {
                pixelRatio: window.devicePixelRatio,
                center: { lat, lng },
                zoom: 15,
            },
        );
        const ipMarker = new H.map.Marker({lat, lng});
        mapRef.current.addObject(ipMarker);
       
        const newBehavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(mapRef.current));
        const newUi = H.ui.UI.createDefault(mapRef.current, defaultLayers);
    }
        
    }, []);

       

    

    return (
        <div ref={containerRef} style={{ width: "300px", height: "300px", minWidth: "300px" }} />
    );
};