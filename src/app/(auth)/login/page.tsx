'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { Button, Card, CardDescription, CardTitle, Input } from '@/components/ui'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (signInError) {
      setError(signInError.message)
      return
    }

    router.push('/dashboard')
  }

  async function handleMagicLink() {
    setLoading(true)
    setError('')
    setSuccess('')

    const { error: magicLinkError } = await supabase.auth.signInWithOtp({
      email,
    })

    setLoading(false)

    if (magicLinkError) {
      setError(magicLinkError.message)
      return
    }

    setSuccess('Check your email for the magic link')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm px-6">
        <p className="mb-8 text-center font-serif text-2xl font-normal text-cream">
          Earnvoy
        </p>
        <Card className="p-8">
          <CardTitle className="text-center">Welcome back</CardTitle>
          <CardDescription className="mb-6 mt-1 text-center">
            Sign in to your account
          </CardDescription>
          <form onSubmit={handleSignIn}>
            <Input
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
            <Button className="mt-6" fullWidth loading={loading} type="submit">
              Sign in
            </Button>
          </form>
          <Link
            href="/login"
            className="mt-3 block text-center text-sm text-mist hover:text-cream"
          >
            Forgot password?
          </Link>
          {error ? (
            <p className="mt-4 text-center text-sm text-ember">{error}</p>
          ) : null}
          {success ? (
            <p className="mt-4 text-center text-sm text-emerald">{success}</p>
          ) : null}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-edge" />
            <span className="text-xs text-mist">or</span>
            <div className="h-px flex-1 bg-edge" />
          </div>
          <Button
            fullWidth
            loading={loading}
            type="button"
            variant="secondary"
            onClick={handleMagicLink}
          >
            Continue with magic link
          </Button>
        </Card>
        <p className="mt-6 text-center text-sm text-mist">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-amber">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
