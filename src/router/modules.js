import React from 'react';

// redirect if authenticated
export const authGuard = (Component) => (renderProps) => {
  if (localStorage.getItem(process.env.LS_EMPLOYER_TOKEN)) {
    return <Component {...renderProps}/>;
  }

  window.location.href = '/';
};

// redirect if not authenticated
export const dashGuard = (Component) => (renderProps) => {
  if (!localStorage.getItem(process.env.LS_EMPLOYER_TOKEN)) {
    return <Component {...renderProps}/>;
  }

  window.location.href = '/dashboard';
};