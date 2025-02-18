import React, {FC, ReactElement} from 'react'
import { useUsersQuery } from '../Hooks/useUsersQuery';

const UserCardQuery: FC = () : React.JSX.Element => { 
  const { users } = useUsersQuery();  
  
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
      <h2>User (React Query)</h2>
        {mapUserCard()}
      </>    
    )    
  };

export default UserCardQuery