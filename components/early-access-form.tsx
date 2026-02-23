"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"

export function EarlyAccessForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate submission
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1500)
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/5 px-6 py-4">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <Check className="size-4 text-accent-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">
          {"You're on the list. We'll be in touch."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 sm:h-14 sm:text-base"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md disabled:opacity-70 sm:h-14 sm:px-8 sm:text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Requesting...</span>
          </>
        ) : (
          <>
            <span>Request Early Access</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  )
}
