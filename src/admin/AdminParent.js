import React from "react";
import AdminMenu from "./components/AdminMenu";

const AdminParent = ({ Component }) => {
  return (
    <div>
      <AdminMenu />
      <Component />
    </div>
  );
};

export default AdminParent;
