import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css
import './App.css';

// components
import Home from './components/Home.tsx';
import NotFound from './components/NotFound.tsx';

function App() {
	return (
		<div className='App'>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>

					{/* NotFound 404 Error*/}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;