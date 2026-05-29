"use client";

import { useState, useEffect } from "react";

export default function RenderedTime() {
    const [time, setTime] = useState("");

    //マウント後にクライアントサイドでのみ実行
    useEffect(() => {
        setTime(new Date().toLocaleTimeString());
    }, []);

    if (!time) {
        return <p>Rendered at: calculating... ...</p>;
    }

    return <p>クライアントでのRendered at: {time}</p>;
}