/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Qb1CWqV44mg
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { cookies } from 'next/headers';

export default function WaitlistPopup({onClose}) {
  const [email, setEmail] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email)
    
    const privateKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!privateKey) throw new Error(`Expected env var SUPABASE_SERVICE_ROLE_KEY`)
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!url) throw new Error(`Expected env var SUPABASE_URL`)
    const client = createClient(url, privateKey)

    try {
      setIsSubmitting(true);
      const newWaitlistEntry = { email: email, signup_date: new Date().toISOString() };
      const { data, error } = await client.from('waitlist').insert([newWaitlistEntry]);
      if (error) throw error;
      console.log('Success:', data);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      setSubmitSuccess(false);
    }
    setIsSubmitting(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 w-full max-w-md mx-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Join the Waitlist</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Enter your email below to join the waitlist.</p>
          </div>
          <div className="space-y-4">
            <Input
              className="w-full text-lg bg-gray-100 dark:bg-gray-800 border-none rounded-lg py-2 px-4"
              id="email"
              placeholder="m@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="w-full text-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg py-2 px-4 shadow-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join'}
            </Button>          
          </div>
          {!submitSuccess && (
            <p className="text-xs text-gray-500">
              I won&apos;t send you any spam. I hate it, just like you do.</p>
        )}
          
          {submitSuccess && (
          <p className="text-green-500 mt-4">
            √ You&apos;re on the waitlist! We&apos;ll be in touch soon.
          </p>
        )}
        </div>
      </div>
    </div>
  )
}