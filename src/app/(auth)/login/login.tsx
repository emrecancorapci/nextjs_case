'use client';

import { signIn } from 'next-auth/react';

import { useToast } from '@/components/ui/use-toast';

import LoginForm, { type FormInputs } from './login-form';

export default function Login(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { toast } = useToast();

  const onSubmit: (formData: FormInputs) => void = (formData: FormInputs) => {
    console.log('Form Data', formData);
    signIn('credentials', {
      email: formData.email,
      password: formData.password,
      callbackUrl: '/dashboard',
      redirect: true,
    })
      .then(() => {
        toast({ title: 'Success', description: 'Başarıyla giriş yapıldı.' });
      })
      .catch((error: Error) => {
        console.log('Error', error);
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      });
  };

  return (
    <div className="flex flex-col rounded-lg border bg-background py-10">
      <h1 className="text-center text-4xl font-bold text-primary">Sign In</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
