"use client"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const TestSelector = () => {

    const { data, loading, error } = useSelector((state: RootState) => state.userData);

  return (
    <div>
          <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>User Data: {JSON.stringify(data)}</p>
      )}
    </div>
    </div>
  )
}