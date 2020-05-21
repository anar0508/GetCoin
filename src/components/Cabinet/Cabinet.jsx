import React from "react";
import AdminCabinetContainer from './AdminCabinetContainer';
import UserCabinet from './UserCabinet';

function Cabinet(props) {
  const { isAdmin } = props;
  return (
    <>
      {isAdmin? <AdminCabinetContainer/>: <UserCabinet/>}
    </>
  );
}


export default Cabinet;