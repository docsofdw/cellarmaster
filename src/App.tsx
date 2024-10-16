import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { CustomAuthenticator } from './CustomAuthenticator';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Wines from './pages/Wines';
import Spirits from './pages/Spirits';

Amplify.configure(awsExports);

function AppContent() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Router>
      <div className="min-h-screen bg-cellar-light dark:bg-cellar-dark text-cellar-dark dark:text-cellar-light">
        <nav className="bg-white dark:bg-black shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-semibold text-cellar-highlight">CellarMaster</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="border-transparent text-cellar-accent hover:text-cellar-highlight hover:border-cellar-highlight inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Dashboard</Link>
                  <Link to="/clients" className="border-transparent text-cellar-accent hover:text-cellar-highlight hover:border-cellar-highlight inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Clients</Link>
                  <Link to="/wines" className="border-transparent text-cellar-accent hover:text-cellar-highlight hover:border-cellar-highlight inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Wines</Link>
                  <Link to="/spirits" className="border-transparent text-cellar-accent hover:text-cellar-highlight hover:border-cellar-highlight inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Spirits</Link>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-4">Welcome, {user.username}</span>
                <button onClick={signOut} className="bg-cellar-highlight text-white px-4 py-2 rounded-md text-sm font-medium">Sign Out</button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/wines" element={<Wines />} />
            <Route path="/spirits" element={<Spirits />} />
          </Routes>
        </main>

        <footer className="bg-white dark:bg-black shadow-lg mt-auto">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-cellar-accent">© 2023 CellarMaster. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function App() {
  return (
    <CustomAuthenticator>
      <AppContent />
    </CustomAuthenticator>
  );
}

export default App;