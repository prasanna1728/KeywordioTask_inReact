import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/Navbar1';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediaAds from './Components/MediaAds';
import TextAds from './Components/TextAds';
import CreateAds from './Components/CreateAds';
import AdsInsights from './Components/AdsInsights';

function App() {
  return (
    <div className="App">

      {/* <Navbar1 /> */}
      {/* <Dashboard /> */}
      {/* <PieChart /> */}
      {/* <Form /> */}
      {/* <MediaAds /> */}
      {/* <TextAds /> */}
      {/* <SubmitForm/> */}
      {/* <AdsInsights /> */}

      <Routes>
        <Route path='/' exact Component={Navbar1} />
        <Route path='/src/Components/Dashboard.jsx' exact Component={Dashboard} />
        <Route path='/src/Components/CreateAds.jsx' exact Component={CreateAds} />

        <Route path='/' exact Component={CreateAds} />
        <Route path='/src/Components/TextAds.jsx' exact Component={TextAds} />
        <Route path='/src/Components/MediaAds.jsx' exact Component={MediaAds} />
      </Routes>



    </div>
  );
}

export default App;
