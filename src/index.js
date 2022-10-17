import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import * as PropTypes from "prop-types";
import ContextRoot from "./ContextRoot";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ContextRoot/>
  </React.StrictMode>
);

