import {auth} from "@clerk/nextjs";

import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";
import { prototype } from "events";

export const increaseAPILimit = async () => {
    const {userId} = auth();
    
    if(!userId){
        return;
    }

    const userAPILimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId: userId
        }
    });
    if(userAPILimit){
        await prismadb.userApiLimit.update({
            where: {
                userId: userId
            },
            data: {count: userAPILimit.count + 1}
        })
    } else{
        await prismadb.userApiLimit.create({
            data:{userId: userId, count: 1}
        });
    }
        
};

export const checkAPILimit = async() => {
    const {userId} = auth();

    if(!userId){
        return false
    }

    const userAPILimit = await prismadb.userApiLimit.findUnique({
        where:{userId: userId}
    });

    if(!userAPILimit || userAPILimit.count < MAX_FREE_COUNTS){
        return true
    } else{
        return false
    }
};

export const getAPILimitCount = async() => {
    const {userId} = auth();

    if(!userId){
        return 0
    }
    const userAPILimit = await prismadb.userApiLimit.findUnique({
        where: {userId: userId}
    })

    if(!userAPILimit){
        return 0
    }

    return userAPILimit.count
}