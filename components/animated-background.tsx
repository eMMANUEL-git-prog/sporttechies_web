"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const heroImages = [
  {
    src: "/images/hero-athlete.jpg",
    alt: "Athlete in a futuristic performance lab",
  },
  {
    src: "/images/hero-tech.jpg",
    alt: "Advanced sports wearable technology",
  },
  {
    src: "/images/hero-stadium.jpg",
    alt: "Smart stadium at twilight",
  },
]

export function AnimatedBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Rotating background images */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay for readability — light & dark themed */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/85" />

      {/* Gradient vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--background) 75%)",
          opacity: 0.6,
        }}
      />

      {/* Subtle animated accent glow */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full opacity-[0.04] dark:opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #1B3A6B 0%, transparent 70%)",
          animation: "float-1 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-1/4 -bottom-1/4 h-[600px] w-[600px] rounded-full opacity-[0.03] dark:opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #00A651 0%, transparent 70%)",
          animation: "float-2 25s ease-in-out infinite",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, 50px) scale(1.05); }
          66% { transform: translate(-40px, 80px) scale(0.95); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, -40px) scale(1.08); }
          66% { transform: translate(50px, -60px) scale(0.92); }
        }
      `}</style>
    </div>
  )
}
