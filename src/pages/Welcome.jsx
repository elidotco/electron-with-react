import React, { useEffect, useLayoutEffect } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Welcome = () => {
  let rout = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      <Navigate to="/login" />;
      rout("/login");
    }, 2000);
  });

  return (
    <div className="wel text-green-400">
      Micro
      <Link to="/login">login</Link>
    </div>
  );
};

export default Welcome;
