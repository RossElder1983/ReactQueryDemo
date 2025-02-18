import React, {FC, ReactElement} from 'react'
import { useUsers } from '../Hooks/useUsers';

const UserCard: FC = () : React.JSX.Element => { 
  const { users } = useUsers();  
  const mapUserCard = () => {
    return(
      users?.map((user : any) => {
        return(                        
          <div key={user.id} className="ds_phase-banner" style={{marginBottom : '10px'}}>
            <div className="ds_wrapper">
              <p className="ds_phase-banner__content">
                <strong className="ds_tag  ds_phase-banner__tag">
                  {user.username}
                </strong>
                <span className="ds_phase-banner__text">
                  <b>Name:</b> {user.name} 
                </span>
              </p>
            </div>
          </div>                  
        );
      })        
    )
  }

  return(   
      <>
        {mapUserCard()}
      </>    
    )    
  };

export default UserCard