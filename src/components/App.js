import React from 'react';
import { useVerifyUser } from '../hooks/useVerifyUser';
import { usePreview } from '../hooks/usePreview';
import AdminGroupForm from './adminGroupForm/AdminGroupForm';
import { useAddDev } from '../hooks/useAddDev';
import { AuthPage } from '../components/auth/AuthPage';


export default function App() {
  usePreview();
  useAddDev();
  return (
    <>
      <AuthPage /> 
      <AdminGroupForm />
    </>
  );
}
