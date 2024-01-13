/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/EMab69cosSP
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { cookies } from 'next/headers';

export function Landpage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email)
    
    const privateKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!privateKey) throw new Error(`Expected env var SUPABASE_SERVICE_ROLE_KEY`)
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!url) throw new Error(`Expected env var SUPABASE_URL`)
    const client = createClient(url, privateKey)

    try {
      const newWaitlistEntry = { email: email, signup_date: new Date().toISOString() };
      const { data, error } = await client.from('waitlist').insert([newWaitlistEntry]);
      if (error) throw error;
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <section className="w-full h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex flex-row items-center justify-center px-4 md:px-6">
      <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">Next-Gen Browser Plugin</h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-[500px]">
          Enhance your browsing with our new plugin. It's faster, secure, and customizable.
        </p>
        <div className="w-full max-w-sm space-y-2 mt-6">
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <Input
              className="max-w-lg flex-1 bg-gray-100 border-gray-200 text-gray-700"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-gray-800 text-white" type="submit">
              Waitlist
            </Button>
          </form>
          <p className="text-xs text-gray-500">Get notified at launch.</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          alt="Promotional Image"
          className="w-full h-auto max-w-sm"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
    </section>
  )
}
