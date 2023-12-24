"use client";

import { useEffect, useState } from "react";

import { ProMoadal } from "@/components/pro-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    }, [])

    if (!isMounted){
        return null;
    }

    if(isMounted){
        return (
          <>
            <ProMoadal />
          </>
        )
    }
}