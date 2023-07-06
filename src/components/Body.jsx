import { Outlet } from "react-router-dom";

const Body = () => {
  //
  return (
    <div className="w-full text-shadeDark bg-shadeWhite">
      <Outlet />
    </div>
  );
};

export default Body;
