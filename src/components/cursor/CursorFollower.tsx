'use client';

import { useEffect, useState, useContext, useRef } from 'react';
import { ThemeContext } from '@/app/providers';

interface CursorFollowerProps {
  size?: number; // Kare boyutu (px cinsinden)
  delay?: number; // Hareket gecikmesi (saniye cinsinden)
}

const CursorFollower: React.FC<CursorFollowerProps> = ({
  size = 20, // Boyutu normale döndürelim
  delay = 0.05 // Hızlı takip etsin
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false); // Referans olarak görünürlük durumunu takip edelim
  const { theme } = useContext(ThemeContext);
  
  // Tema rengine göre kare rengini ayarlayalım - tam opak
  const cursorColor = theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
  
  useEffect(() => {
    // Fare hareketlerini takip et
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Görünürlüğü sadece ilk kez ayarla
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };
    
    // Sayfanın görünür kısmına fare geldiğinde ve ayrıldığında
    const handleMouseEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };
    
    const handleMouseLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    
    // Bileşen mount olduğunda görünür yapalım
    visibleRef.current = true;
    setVisible(true);
    
    // İlk konumu ekranın ortasına ayarlayalım
    const initialX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const initialY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    setPosition({ x: initialX, y: initialY });
    
    // Event listener'ları ekle
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]); // Tema değiştiğinde efekti güncelle
  
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: cursorColor,
        opacity: visible ? 1 : 0, // Tam opak
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
        transition: `transform ${delay}s ease-out, opacity 0.2s ease`,
      }}
    />
  );
};

export default CursorFollower; 