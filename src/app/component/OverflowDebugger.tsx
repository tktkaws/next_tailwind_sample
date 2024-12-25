'use client'

import { useEffect } from 'react'

export default function OverflowDebugger() {
  useEffect(() => {
    const checkOverflow = () => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll('*');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.width > viewportWidth) {
          console.log('横スクロールの原因となる要素:', {
            element: element,
            elementWidth: rect.width,
            viewportWidth: viewportWidth,
            difference: rect.width - viewportWidth
          });
        }
      });
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return null;
} 