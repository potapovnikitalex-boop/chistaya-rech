import { useCallback, useEffect, useState } from 'react'

export type ViewMode = 'auto' | 'mobile' | 'desktop'

const STORAGE_KEY = 'chistaya-rech-view-mode'
const DEFAULT_VIEWPORT = 'width=device-width, initial-scale=1.0'
const DESKTOP_VIEWPORT = 'width=1280'

function applyViewMode(mode: ViewMode) {
  const html = document.documentElement
  const viewportMeta = document.querySelector('meta[name="viewport"]')

  if (mode === 'desktop') {
    html.dataset.view = 'desktop'
    viewportMeta?.setAttribute('content', DESKTOP_VIEWPORT)
  } else if (mode === 'mobile') {
    html.dataset.view = 'mobile'
    viewportMeta?.setAttribute('content', DEFAULT_VIEWPORT)
  } else {
    delete html.dataset.view
    viewportMeta?.setAttribute('content', DEFAULT_VIEWPORT)
  }
}

function readStoredMode(): ViewMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'mobile' || stored === 'desktop' || stored === 'auto') return stored
  } catch {
    // localStorage недоступен (приватный режим) — используем авто-режим
  }
  return 'auto'
}

export function useViewMode() {
  const [mode, setMode] = useState<ViewMode>(readStoredMode)

  useEffect(() => {
    applyViewMode(mode)
    try {
      localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      // localStorage недоступен — переключатель просто не переживёт перезагрузку
    }
  }, [mode])

  const setViewMode = useCallback((next: ViewMode) => setMode(next), [])

  return { mode, setViewMode }
}
