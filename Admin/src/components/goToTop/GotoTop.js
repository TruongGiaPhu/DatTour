
import { useLocation } from "react-router-dom";
import React, { useEffect } from 'react';

export default function GotoTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
