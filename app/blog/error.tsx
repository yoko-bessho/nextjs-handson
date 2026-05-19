"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <h2>Something went wrong while fetching posts!</h2>
            <button
                onClick={() => reset()}
            className="bg-amber-100 rounded-xl">Try again</button>
        </div>
    )
}