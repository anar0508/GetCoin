import React from "react";
import AdminCabinetContainer from './AdminCabinetContainer';
import UserCabinetContainer from './UserCabinetContainer';

function Cabinet(props) {
  const { isAdmin } = props;
  return (
    <>
      {isAdmin? <AdminCabinetContainer/>: <UserCabinetContainer/>}
    </>
  );
}


export default Cabinet;