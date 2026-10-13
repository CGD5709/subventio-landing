import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { MetricsUseCases } from './components/MetricsUseCases';
import { DemoCta } from './components/DemoCta';
import { ArchitectureHero } from './components/ArchitectureHero';
import { TechStack } from './components/TechStack';
import { C4DiagramViewer } from './components/C4DiagramViewer';
import { TechnicalChallenges } from './components/TechnicalChallenges';
import { CicdPipeline } from './components/CicdPipeline';
import { TechnicalResources } from './components/TechnicalResources';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleExploreWorkflow = () => {
    const el = document.getElementById('metodologia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToC4 = () => {
    const el = document.getElementById('c4-diagrams');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1.1 Barra de Navegación Superior */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content (Single Page with Smooth Scrolling Anchors) */}
      <main className="flex-1 w-full">
        {/* BLOQUE 1: LA CARA B2B Y CONVERSIÓN DE NEGOCIO */}
        
        {/* 1.2 Sección Hero (Gancho Principal) */}
        <Hero 
          onOpenDemoModal={handleOpenDemoModal} 
          onExploreWorkflow={handleExploreWorkflow} 
        />

        {/* 1.3 Sección Problema vs. Solución */}
        <ProblemSolution onOpenDemoModal={handleOpenDemoModal} />

        {/* 1.4 Sección de Características Principales (Features) */}
        <Features />

        {/* 1.5 Sección de Flujo de Trabajo (Metodología / Cómo Funciona) */}
        <Workflow />

        {/* 1.6 Sección de Métricas y Casos de Uso */}
        <MetricsUseCases onOpenDemoModal={handleOpenDemoModal} />

        {/* 1.7 Sección de Cierre y Llamada a la Acción Final */}
        <DemoCta />

        {/* BLOQUE 2: LA CARA PARA DESARROLLADORES Y TRIBUNAL TÉCNICO */}
        
        {/* 2.1 & 2.2 Hero Técnico y Navegación de Contexto */}
        <ArchitectureHero />

        {/* 2.3 Stack Tecnológico Detallado (4 Paneles) */}
        <TechStack />

        {/* 2.4 Arquitectura del Sistema y Visor Interactivo de Diagramas C4 */}
        <C4DiagramViewer />

        {/* 2.5 Retos Técnicos y Soluciones de Ingeniería */}
        <TechnicalChallenges />

        {/* 2.6 Canalización CI/CD, Despliegue e Infraestructura Cloud */}
        <CicdPipeline />

        {/* 2.7 Recursos, Especificación de API y Código Fuente */}
        <TechnicalResources onScrollToC4={handleScrollToC4} />
      </main>

      {/* Pie de Página Oficial */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Modal Interactivo de Demostración */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

export default App;
