import React from 'react';
import { Helmet } from 'react-helmet';

export const SEOHead: React.FC = () => {
  const siteUrl = 'https://mentorflow.com.br'; // Ajustar para URL real
  const siteName = 'MentorFlow';
  const title = 'MentorFlow - Sistema Completo para Criar e Vender Sua Mentoria Online';
  const description = 'Descubra como criar, estruturar e vender sua mentoria online com o sistema completo MentorFlow. Aumente suas vendas, automatize processos e transforme conhecimento em renda recorrente.';
  const keywords = 'como criar mentoria, vender mentoria online, plataforma de mentoria, sistema de vendas mentoria, funil de vendas mentoria, landing page mentoria, como montar mentoria lucrativa, programa de mentoria online, mentoria digital, vender consultoria online';
  const image = `${siteUrl}/og-image.jpg`; // Criar esta imagem depois
  
  // Schema.org JSON-LD - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["Portuguese"]
    },
    "sameAs": [
      "https://facebook.com/mentorflow",
      "https://instagram.com/mentorflow",
      "https://linkedin.com/company/mentorflow"
    ]
  };

  // Schema.org JSON-LD - Product/Service
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MentorFlow - Sistema de Vendas para Mentorias",
    "description": "Sistema completo para criar, estruturar e vender mentorias online com alta conversão",
    "brand": {
      "@type": "Brand",
      "name": siteName
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL",
      "url": siteUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Schema.org JSON-LD - Course
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Como Criar uma Mentoria Lucrativa",
    "description": "Aprenda a criar, estruturar e vender sua mentoria online do zero",
    "provider": {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl
    },
    "educationalLevel": "Beginner to Advanced",
    "inLanguage": "pt-BR",
    "teaches": [
      "Como estruturar um programa de mentoria",
      "Estratégias de vendas para mentorias",
      "Funil de vendas otimizado",
      "Marketing digital para mentores"
    ]
  };

  // Schema.org JSON-LD - WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": siteUrl,
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl
    },
    "about": {
      "@type": "Thing",
      "name": "Mentoria Online",
      "description": "Criação e venda de programas de mentoria online"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Luciano Soares" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={siteUrl} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="pt-BR" />
      <link rel="alternate" hrefLang="pt-BR" href={siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="MentorFlow - Sistema de Vendas para Mentorias" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="MentorFlow - Sistema de Vendas para Mentorias" />
      
      {/* AI Crawlers - ChatGPT, Perplexity, Claude */}
      <meta name="ai:summary" content="MentorFlow é um sistema completo para mentores que desejam criar, estruturar e vender suas mentorias online. Oferece funil de vendas otimizado, landing pages de alta conversão e estratégias comprovadas para aumentar vendas de programas de mentoria." />
      <meta name="ai:category" content="Education, Business, Online Courses, Mentorship" />
      <meta name="ai:keywords" content="mentoria online, vender mentoria, criar mentoria, sistema de vendas, funil de vendas, marketing digital" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#020617" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.tailwindcss.com" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(courseSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};
