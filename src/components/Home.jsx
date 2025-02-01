import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui";
const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-[800px] w-full flex-col">
      <div className="p-4 text-right"> 
        <h1 className="text-6xl mb-8">Stay Organized, Stay Productive</h1>
        <h3 className="text-2xl text-left">
          Create, manage, and complete your tasks effortlessly
        </h3>
        <div className="mt-6"> 
          <Button
            label={"Get Started"}
            onClick={() => {
              navigate("/signup")
            }}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
