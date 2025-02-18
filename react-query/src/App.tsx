import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@scottish-government/design-system/dist/css/design-system.css'
import Header from './Components/Page/Header';
import Content from './Components/Page/Content';
import { Routes, Route } from "react-router";
import UserCard from './Components/UserCard';
import UserCardQuery from './Components/UserCardQuery';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>      
      <div className="ds_wrapper">
        <div className="ds_page">
          <Header />          
          <Content />     
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
