import React, {FC, ReactElement} from 'react'
import UserCard from '../UserCard';
import { Outlet } from "react-router";

const Content: FC = (): ReactElement => {
  return (
    <>            
      <div className="ds_page__middle">          
        <Outlet/>
      </div>  
      </>
  )
};

export default Content