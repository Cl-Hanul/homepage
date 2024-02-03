import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// css
import './assets/css/App.css';

// components
import { Home, Blog, Game, Tool, Bot } from './components/Root.tsx';
import NotFound from './components/Error.tsx';

function App() {
	return (
		<div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
          {/* base */}
					<Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          {/* other */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/tool" element={<Tool />}></Route>
          <Route path="/bot" element={<Bot />}></Route>

					{/* System page*/}
          <Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;