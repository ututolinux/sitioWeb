'use client'

import { Folder, FolderLock } from '@phosphor-icons/react'
import { FileIcon, ImageIcon } from '@radix-ui/react-icons'
import { CSSProperties, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import styles from './styles.module.css'

export function FeaturePrivacy() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const tm = setTimeout(() => {
      console.log('changing')

      if (position === 0) {
        setPosition(100)
      } else {
        setPosition(0)
      }
    }, 2000)

    return () => {
      clearTimeout(tm)
    }
  }, [position])

  return (
    <div className="pointer-events-none absolute flex max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg p-6 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-background">
        <div className="relative flex flex-1 flex-col">
          <Folders hidden={false} />
          <div
            className="absolute h-full w-full"
            style={
              {
                '--mask-position': `${position}%`
              } as CSSProperties
            }
          >
            <div className={cn(styles['magnifier-mask'], 'h-full w-full')}>
              <Folders hidden={true} />
            </div>
            <div className="absolute left-0 top-0 h-full w-[70%] p-4 sm:p-6">
              <div
                className={cn(
                  'absolute top-0 h-[170px] w-[170px] rounded-full border border-border bg-secondary/30',
                  styles['magnifier-view']
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Folders = ({ hidden }: { hidden: boolean }) => {
  if (hidden) {
    return (
      <div className="flex-1 overflow-auto bg-background p-4 sm:p-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
            <div className="flex h-20 items-center justify-center">
              <FolderLock className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="mt-2 truncate text-sm font-medium">******</div>
            <div className="text-xs text-muted-foreground">****</div>
          </div>
          <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
            <div className="flex h-20 items-center justify-center">
              <FolderLock className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="mt-2 truncate text-sm font-medium">******</div>
            <div className="text-xs text-muted-foreground">****</div>
          </div>
          <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
            <div className="flex h-20 items-center justify-center">
              <FolderLock className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="mt-2 truncate text-sm font-medium">******</div>
            <div className="text-xs text-muted-foreground">****</div>
          </div>
          <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
            <div className="flex h-20 items-center justify-center">
              <FolderLock className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="mt-2 truncate text-sm font-medium">******</div>
            <div className="text-xs text-muted-foreground">****</div>
          </div>
          <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
            <div className="flex h-20 items-center justify-center">
              <FolderLock className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="mt-2 truncate text-sm font-medium">******</div>
            <div className="text-xs text-muted-foreground">****</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex-1 overflow-auto p-4 sm:p-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
          <div className="flex h-20 items-center justify-center">
            <Folder className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="mt-2 truncate text-sm font-medium">Project Files</div>
          <div className="text-xs text-muted-foreground">Folder</div>
        </div>
        <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
          <div className="flex h-20 items-center justify-center">
            <FileIcon className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="mt-2 truncate text-sm font-medium">README.md</div>
          <div className="text-xs text-muted-foreground">Text Document</div>
        </div>
        <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
          <div className="flex h-20 items-center justify-center">
            <ImageIcon className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="mt-2 truncate text-sm font-medium">Landscape.jpg</div>
          <div className="text-xs text-muted-foreground">Image</div>
        </div>
        <div className="group relative rounded-md border bg-muted/40 p-4 transition-all hover:bg-muted">
          <div className="flex h-20 items-center justify-center">
            <FileIcon className="h-12 w-12 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="mt-2 truncate text-sm font-medium">Report.pdf</div>
          <div className="text-xs text-muted-foreground">PDF Document</div>
        </div>
      </div>
    </div>
  )
}
