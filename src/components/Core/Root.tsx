import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
export const Root = () => {
  const loaderData = useLoaderData();
    useEffect(() => {
      console.log(loaderData);
    },[])
    return (<div>
      <h1>Root</h1>
    </div>);
}