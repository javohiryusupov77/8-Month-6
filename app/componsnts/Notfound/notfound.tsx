"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TimerMsg({ time }: { time: number }) {
  const [remainedTime, setRemainedTime] = useState(time);
  const router = useRouter();

  useEffect(() => {
    if (remainedTime <= 0) return;

    const interval = setInterval(() => {
      setRemainedTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          router.push("/"); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainedTime, router]);

  return remainedTime > 0 ? (
    <div className=" fixed bottom-4 right-4 p-4 bg-red-800 text-white rounded-md shadow-lg">
      <p>Goes back in {remainedTime} seconds </p>
    </div>
  ) : null;
}