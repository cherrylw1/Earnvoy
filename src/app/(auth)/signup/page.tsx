'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

import { Button, Card, CardDescription, CardTitle, Input } from '@/components/ui'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const supabase = createClient()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    })

    setLoading(false)

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    setSuccess('Account created! Check your email to confirm.')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm px-6">
        <p className="mb-8 text-center font-serif text-2xl font-normal text-cream">
          Earnvoy
        </p>
        <Card className="p-8">
          <CardTitle className="text-center">Create your account</CardTitle>
          <CardDescription className="mb-6 mt-1 text-center">
            Start your affiliate program today
          </CardDescription>
          <form onSubmit={handleSignUp}>
            <Input
              label="Full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <Input
              className="mt-4"
              label="Email address"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Input
              className="mt-4"
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <p className="mt-1 text-xs text-mist">Minimum 8 characters</p>
            <Button className="mt-6" fullWidth loading={loading} type="submit">
              Create account
            </Button>
          </form>
          {error ? (
            <p className="mt-4 text-center text-sm text-ember">{error}</p>
          ) : null}
          {success ? (
            <p className="mt-4 text-center text-sm text-emerald">{success}</p>
          ) : null}
        </Card>
        <p className="mt-6 text-center text-sm text-mist">
          Already have an account?{' '}
          <Link href="/login" className="text-amber">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
