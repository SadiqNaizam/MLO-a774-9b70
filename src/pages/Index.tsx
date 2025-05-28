import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginForm from '../components/Login/LoginForm';

/**
 * LoginPage displays the main login interface for the application.
 * It utilizes the MainAppLayout to provide a consistent, centered page structure
 * and renders the LoginForm component within a styled card element.
 * The page title is set to "Login Page".
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout title="Login Page">
      {/* 
        This div acts as the 'card' described in the layout requirements.
        It centers the LoginForm and applies specific styling:
        - Fixed width of 400px (w-[400px]).
        - Background color from the theme's card color (bg-card), 
          which corresponds to 'surface' in the PRD.
        - Padding around the content (p-6).
        - Rounded corners (rounded-md).
        - A medium shadow effect (shadow-md).
      */}
      <div className="w-[400px] bg-card p-6 rounded-md shadow-md">
        <LoginForm />
      </div>
    </MainAppLayout>
  );
};

export default LoginPage;
