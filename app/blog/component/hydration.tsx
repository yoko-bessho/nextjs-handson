'use client';

import { useState, useEffect } from "react";

function useIsClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => { setIsClient(true) }, []);

    return isClient;
}

export function HydrationTest() {
    const isClient = useIsClient();

    return <div>{isClient ? "Client" : "Server"}</div>
}

export function HydrationTest2() {
    return (
        <div suppressHydrationWarning={true}>
            Timestamp: {new Date().toLocaleTimeString()}
        </div>
    );
}