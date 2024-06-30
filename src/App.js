import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import IndecisionApp from './Components/IndecisionApp';

  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  //root.render(<IndecisionApp />);