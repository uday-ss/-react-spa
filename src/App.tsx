import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import NotificationButtons from './components/Notifications/NotificationButtons';
import NotificationList from './components/Notifications/NotificationList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Notification System</h1>
        <nav>
          <ul>
            <li>
              <Link to="/notifications/send">Send Notification</Link>
            </li>
            <li>
              <Link to="/notifications/list">View Notifications</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/notifications/send" element={<NotificationButtons />} />
          <Route path="/notifications/list" element={<NotificationList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
