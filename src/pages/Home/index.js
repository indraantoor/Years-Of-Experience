import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/*
 * Currently Navigates to profile page
 * In future it can be implemented
 */

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/profile/indraantoor/");
  }, []);

  return <div></div>;
};
