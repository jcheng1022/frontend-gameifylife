'use client';

import 'firebase/auth'
import {auth} from "@/lib/firebase/firebase";
import {useQuery} from "@tanstack/react-query";
import APIClient from "@/services/api"
import {defaultQueryProps} from "@/app/providers";
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";


export const useCurrentUser = ( props = {})  => {

    const queryKey = ['currentUser', props];

    const uid = auth.currentUser?.uid


    return useQuery({
        queryKey,
        ...defaultQueryProps,
        enabled: !!uid && APIClient.isReady,
        retry: 5,
        queryFn: () => APIClient.api.get(`/user/me`, {params: props})
    })


}

export const useCurrentUserData = (props = {})  => {

    const queryKey = ['userData', props];



    return useQuery({
        queryKey,
        ...defaultQueryProps,

        // enabled: !!userId,
        retry: 5,
        queryFn: () => APIClient.api.get(`/user/ranking`, {params: props})
    })


}

export const useUserTasks = (userId, props = {})  => {

    const queryKey = [userId, 'tasks', props];



    return useQuery({
        queryKey,
        ...defaultQueryProps,
        enabled: !!userId,
        retry: 5,
        queryFn: () => APIClient.api.get(`/task/${userId}/tasks`, {params: props})
    })


}

export const useUserTaskHistory = (userId) => {
    const queryKey = [userId, 'tasks', 'history']


    return useQuery({
        queryKey,
        ...defaultQueryProps,
        enabled: !!userId,
        retry: 5,
        queryFn: () => APIClient.api.get(`/user/${userId}/history`, {})
    })

}

export const useUserTodayTasks = (userId, props = {})  => {

    const queryKey = [userId, 'tasks', 'today',props];



    return useQuery({
        queryKey,
        ...defaultQueryProps,
        enabled: !!userId,
        retry: 5,
        queryFn: () => APIClient.api.get(`/task/${userId}/today`, {params: props})
    })


}

export const useUserIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    onAuthStateChanged(auth,  (user) => {
        if (user) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }})

    return isLoggedIn
}
