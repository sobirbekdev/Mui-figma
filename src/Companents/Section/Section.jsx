import { useEffect, useState } from "react";
import CardSection from "./CardSection";
import { ProfilCard } from "./ProfilCard";


export function Section() {
    let [data, setData] = useState();
    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
            .then((req) => req.json())
            .then((json) => setData(json.data));
    }, []);

    return (
        <>
            <CardSection useData={data} />
            <ProfilCard useProfil={data} />
        </>
    )
}