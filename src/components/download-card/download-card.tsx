'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { AnimatedCard } from '@/components/ui/animated-card'
import { Button } from '@/components/ui/button'
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  title: string
  description: string
  image: string
  links?: { label: string; href: string }[]
  index: number
}

export const DownloadCard = ({ description, image, links, title, index }: Props) => {
  const [downloads, setDownloads] = useState<number | null>(null)

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await fetch('https://challenge-integro-production.up.railway.app/api/counter')
        if (!response.ok) {
          throw new Error('Failed to fetch downloads')
        }
        const data = await response.json()
        setDownloads(data?.downloads || 0)
      } catch (error) {
        console.error('Error fetching downloads:', error)
        setDownloads(0) // fallback in case of error
      }
    }

    fetchDownloads()
  }, [])

  const handleDownloadClick = async (href) => {
    try {
      // Hacer el POST al endpoint de increment
      const response = await fetch('https://challenge-integro-production.up.railway.app/api/counter/increment', {
        method: 'POST',
      })
      if (!response.ok) {
        throw new Error('Failed to increment download count')
      }

      window.open(href, '_blank')

      setDownloads((prev) => (prev !== null ? prev + 1 : 1))
    } catch (error) {
      console.error('Error incrementing download count:', error)
    }
  }

  return (
    <AnimatedCard
      initial="hidden"
      animate={'show'}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 10, filter: `blur(10px)` },
        show: { opacity: 1, y: 0, filter: `blur(0px)`, transition: { type: 'spring', delay: index * 0.04 } }
      }}
      className="max-w-[350px] overflow-hidden"
    >
      <CardHeader className="p-0 text-left">
        <Image src={image} alt="ututo view" width="1280" height="720" />
        <div className="p-6">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-around space-x-4">
        Descargas: {downloads !== null ? downloads : 'Cargando...'}
        {links?.map(({ label, href }) => (
          <Button key={label} size={'sm'} variant={'ringHover'} onClick={()=>{handleDownloadClick(href)}}>
            {label}
          </Button>
        ))}
      </CardFooter>
    </AnimatedCard>
  )
}
