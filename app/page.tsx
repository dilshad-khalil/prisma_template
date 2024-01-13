"use client";
import React, { useEffect } from "react";

const Home = () => {
  async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts`);
    if (!res.ok) {
      console.log(res);
    }
    return res.json();
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div className="w-screen h-screen bg-teal-900"></div>;
};

export default Home;
