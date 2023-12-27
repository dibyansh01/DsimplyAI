"use client";

import { useEffect } from "react";
import { Crisp }  from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(()=> {
        Crisp.configure("6e657902-2737-4f94-bf9d-3176fc21538f")
    }, []);

    return null;
}

