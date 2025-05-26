'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Hero bölümü için bileşen
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax efekti için transform değerleri
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div className="h-screen relative overflow-hidden flex items-center justify-center" ref={containerRef}>
      {/* Parallax arka plan */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        
        {/* Arka plan içindeki küçük ikonlar/elementler */}
        <motion.div className="absolute top-[10%] left-[20%] w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 opacity-30" 
          style={{ y: y3 }}
          animate={{ y: ['0px', '20px', '0px'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div className="absolute top-[30%] right-[15%] w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 opacity-30" 
          style={{ y: y2 }}
          animate={{ y: ['0px', '-25px', '0px'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div className="absolute bottom-[25%] left-[35%] w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 opacity-30" 
          style={{ y: y3 }}
          animate={{ y: ['0px', '15px', '0px'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Daha fazla arka plan elementleri eklenebilir */}
      </motion.div>

      {/* Hero içeriği */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl px-4" 
        style={{ scale, opacity }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Eren Keskinoglu
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Yazılım geliştirici, sanat tutkunu, ve daha fazlası
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 justify-center"
        >
          <Link 
            href="/projects" 
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Projeler
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            İletişim
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

// Animasyonlu kartlar için bileşen
interface FeaturedCardProps {
  title: string;
  description: string;
  index: number;
  image: string;
}

const FeaturedCard = ({ title, description, index, image }: FeaturedCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  // Her kart için farklı gecikme
  const delay = index * 0.2;
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

// Sayaç animasyonu için bileşen
interface CountUpProps {
  end: number;
  duration?: number;
  title: string;
}

const CountUp = ({ end, duration = 2, title }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return (
    <motion.div 
      ref={nodeRef}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">{count}</span>
      <h3 className="text-lg text-gray-600 dark:text-gray-300 mt-2">{title}</h3>
    </motion.div>
  );
};

// Ana sayfa bileşeni
export default function Home() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  
  useEffect(() => {
    // GSAP ScrollTrigger için kayıt
    gsap.registerPlugin(ScrollTrigger);
    
    // Projeler bölümü için animasyon
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // Hakkımda bölümü için animasyon
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // İstatistikler bölümü için animasyon
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const featuredProjects = [
    {
      title: "Killer Sudoku Helper",
      description: "Killer Sudoku bulmacalarını çözmenize yardımcı olan interaktif bir araç.",
      image: "/next.svg"
    },
    {
      title: "Kripto Analiz Aracı",
      description: "Kripto para verilerini analiz etmek için kullanılan kapsamlı bir araç seti.",
      image: "/vercel.svg"
    },
    {
      title: "Kişisel Web Sitesi",
      description: "Bu web sitesinin kendisi - Next.js, TypeScript ve TailwindCSS ile geliştirilmiştir.",
      image: "/globe.svg"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Projeler Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" ref={projectsRef}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Öne Çıkan Projeler</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kariyerim boyunca geliştirdiğim en önemli projelerden bazıları.
              Her biri, farklı becerileri ve teknolojileri yansıtıyor.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedCard key={index} {...project} index={index} />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/projects"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Tüm projeleri görüntüle
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Hakkımda Section */}
      <section className="py-20 px-4" ref={aboutRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/file.svg"
                  alt="Eren Keskinoglu" 
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Hakkımda</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Yazılım geliştirme konusunda tutkulu, sürekli öğrenmeye ve gelişmeye odaklı bir yazılım mühendisiyim.
                Kullanıcı deneyimini ön planda tutan, temiz ve sürdürülebilir kod yazmayı prensip edinen biri olarak,
                modern web teknolojileri ile çalışmaktan keyif alıyorum.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Aynı zamanda sanat, felsefe ve bilim gibi alanlara olan ilgim, geliştirdiğim projelere farklı perspektifler
                katmama yardımcı oluyor.
              </p>
              <Link 
                href="/about"
                className="px-6 py-3 bg-blue-600 text-white rounded-full inline-flex items-center hover:bg-blue-700 transition-colors"
              >
                Daha fazla bilgi
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* İstatistikler Section */}
      <section className="py-20 px-4 bg-blue-50 dark:bg-blue-900/20" ref={statsRef}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Sayılarla</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Projeler, deneyimler ve başarılar...
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CountUp end={15} title="Tamamlanan Proje" />
            <CountUp end={5} title="Yıllık Deneyim" />
            <CountUp end={12} title="Kullanılan Teknoloji" />
            <CountUp end={8} title="Mutlu Müşteri" />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bir projede birlikte çalışalım mı?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Fikrinizi gerçeğe dönüştürmek veya mevcut bir projenizi geliştirmek için iletişime geçin.
            </p>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg inline-block hover:bg-blue-50 transition-colors"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
