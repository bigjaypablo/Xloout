import React, { useState, useEffect } from 'react';

const MobileDebugger = () => {
  const [logs, setLogs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Function to add log
  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { message, type, timestamp }]);
  };

  // Override console.log to capture logs
  useEffect(() => {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args) => {
      addLog(args.join(' '), 'info');
      originalLog.apply(console, args);
    };

    console.error = (...args) => {
      addLog(args.join(' '), 'error');
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      addLog(args.join(' '), 'warn');
      originalWarn.apply(console, args);
    };

    // Check localStorage on load
    const token = localStorage.getItem('x_access_token');
    const user = localStorage.getItem('x_user_data');
    addLog(`🔍 localStorage: token=${token ? '✅ Present' : '❌ Missing'}, user=${user ? '✅ Present' : '❌ Missing'}`, 'info');

    return () => {
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  const clearLogs = () => setLogs([]);
  const checkStorage = () => {
    const token = localStorage.getItem('x_access_token');
    const user = localStorage.getItem('x_user_data');
    const state = localStorage.getItem('x_oauth_state');
    addLog(`📦 Storage: token=${token ? '✅' : '❌'}, user=${user ? '✅' : '❌'}, state=${state || '❌'}`, 'info');
    addLog(`📍 Current URL: ${window.location.href}`, 'info');
  };

  const clearStorage = () => {
    localStorage.clear();
    addLog('🗑️ Storage cleared!', 'warn');
    window.location.reload();
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50 text-xl font-bold"
      >
        🐛
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <h2 className="font-bold">🐛 Debug Console</h2>
        <div className="flex gap-2">
          <button onClick={checkStorage} className="bg-white/20 px-3 py-1 rounded text-sm">📦 Check</button>
          <button onClick={clearLogs} className="bg-white/20 px-3 py-1 rounded text-sm">🗑️ Clear</button>
          <button onClick={clearStorage} className="bg-red-600 px-3 py-1 rounded text-sm">⚠️ Reset</button>
          <button onClick={() => setIsVisible(false)} className="bg-white/20 px-3 py-1 rounded text-sm">✕</button>
        </div>
      </div>

      {/* Logs */}
      <div className="flex-1 overflow-auto p-4">
        {logs.length === 0 ? (
          <div className="text-gray-500 text-center mt-4">No logs yet</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className={`mb-2 text-sm font-mono ${
              log.type === 'error' ? 'text-red-400' :
              log.type === 'warn' ? 'text-yellow-400' :
              'text-green-400'
            }`}>
              <span className="text-gray-500">[{log.timestamp}]</span> {log.message}
            </div>
          ))
        )}
      </div>

      {/* Quick actions */}
      <div className="bg-gray-900 p-4 flex gap-2 flex-wrap">
        <button 
          onClick={() => window.location.href = '/dashboard'}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm flex-1"
        >
          Go to Dashboard
        </button>
        <button 
          onClick={() => window.location.href = '/connect'}
          className="bg-gray-600 text-white px-4 py-2 rounded text-sm flex-1"
        >
          Go to Connect
        </button>
        <button 
          onClick={() => window.location.href = '/auth/x/callback' + window.location.search}
          className="bg-purple-600 text-white px-4 py-2 rounded text-sm flex-1"
        >
          Try Callback
        </button>
      </div>
    </div>
  );
};

export default MobileDebugger;
