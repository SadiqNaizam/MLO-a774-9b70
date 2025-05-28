import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Schema for form validation
const loginFormSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z.string()
    .min(1, { message: 'Password is required.' })
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
  // Example: onLoginSuccess?: (data: LoginFormValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLoginSubmit = React.useCallback(async (data: LoginFormValues) => {
    setIsSubmitting(true);
    console.log('Attempting login with:', data);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In a real app, handle successful login (e.g., store token, redirect)
      // if (onLoginSuccess) onLoginSuccess(data);
      alert(`Login successful for user: ${data.username}`); // Placeholder
      form.reset(); // Reset form on success
    } catch (error) {
      // In a real app, handle login errors (e.g., display error message from API)
      console.error('Login failed:', error);
      // Example: form.setError('root.serverError', { type: 'manual', message: 'Invalid credentials' });
      alert('Login failed. Please check your credentials and try again.'); // Placeholder
    } finally {
      setIsSubmitting(false);
    }
  }, [form]); // form is stable, setIsSubmitting is stable, but form contains methods that might change if form itself is re-created.

  return (
    <div className={cn('w-full flex flex-col gap-4', className)}>
      <h2 className="text-3xl font-bold text-card-foreground text-left">
        Log in
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="bg-card border-input text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="bg-card border-input text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* form.formState.errors.root?.serverError && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.root.serverError.message}
            </p>
          )*/}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </Button>
        </form>
      </Form>
      
      <p className="text-center text-sm text-muted-foreground">
        or,{' '}
        <Button
          variant="link"
          className="p-0 h-auto text-sm text-primary hover:text-primary/90 focus-visible:ring-0 focus-visible:ring-offset-0"
          asChild
          disabled={isSubmitting}
        >
          <a 
            href="#" // In a real app, use React Router <Link to="/signup"> or similar
            onClick={(e) => {
              e.preventDefault();
              if (isSubmitting) return;
              // Placeholder for navigation logic
              alert('Redirecting to Sign Up page...');
            }}
          >
            sign up
          </a>
        </Button>
      </p>
    </div>
  );
};

export default LoginForm;
