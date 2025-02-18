import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@scottish-government/design-system/dist/css/design-system.css'
import Header from './Components/Page/Header';
import { BrowserRouter, Routes, Route } from "react-router";
import UserCard from './Components/UserCard';
import UserCardQuery from './Components/UserCardQuery';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>      
      <div className="ds_wrapper">
        <div className="ds_page">           
          <BrowserRouter>
            <Header />  
            <div className="ds_page__middle" style={{maxHeight : '500px', overflowY: 'auto', overflowX: 'hidden', marginTop: '20px'}}>              
              <Routes>
                <Route path="/" element={<UserCard />} />
                <Route path="users" element={<UserCard />} />
                <Route path="/usersQuery" element={<UserCardQuery />} />
              </Routes>
            </div>
          </BrowserRouter>                  
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
