import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScotchStructureFeatures } from './components/ScotchStructureFeatures';
import { BenefitsRoiImpact } from './components/BenefitsRoiImpact';
import { ProblemSolution } from './components/ProblemSolution';
import { TechnologyTransition } from './components/TechnologyTransition';
import { ArchitectureHero } from './components/ArchitectureHero';
import { TechStack } from './components/TechStack';
import { C4DiagramViewer } from './components/C4DiagramViewer';
import { TechnicalChallenges } from './components/TechnicalChallenges';
import { CicdPipeline } from './components/CicdPipeline';
import { TechnicalResources } from './components/TechnicalResources';
import { DemoCta } from './components/DemoCta';
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
    const el = document.getElementById('funcionalidades');
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
    <div className="w-full min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#18e299] selection:text-black">
      {/* 1.1 Barra de Navegación Superior Adaptativa (Luz en B2B -> Oscuro en Tecnología) */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content (Single Page with Smooth Scrolling Anchors) */}
      <main className="flex-1 w-full bg-white">
        {/* ======================================================== */}
        {/* BLOQUE 1: LA CARA B2B Y CONVERSIÓN DE NEGOCIO (TEMA CLARO MINTLIFY) */}
        {/* ======================================================== */}
        
        {/* 1.2 Sección Hero (Layout Split de Mintlify, Canvas de ondas verdes, marco de app y conectores) */}
        <Hero 
          onOpenDemoModal={handleOpenDemoModal} 
          onExploreWorkflow={handleExploreWorkflow} 
        />

        {/* 1.3 Estructura y Organización Scotch POS (4 Fases, Filtros y selector lateral sticky) */}
        <ScotchStructureFeatures onOpenDemoModal={handleOpenDemoModal} />

        {/* 1.4 Ventajas, Horas Ahorradas e Impacto Cuantificable (Simulador de ROI interactivo) */}
        <BenefitsRoiImpact onOpenDemoModal={handleOpenDemoModal} />

        {/* 1.5 Sección Problema vs. Solución (El caos tradicional frente a la automatización) */}
        <ProblemSolution onOpenDemoModal={handleOpenDemoModal} />

        {/* ======================================================== */}
        {/* TRANSICIÓN SUAVE DE BLANCO A NEGRO: ENTRADA A TECNOLOGÍA  */}
        {/* ======================================================== */}
        <TechnologyTransition />

        {/* ======================================================== */}
        {/* BLOQUE 2: MODO INGENIERÍA Y ARQUITECTURA TÉCNICA (TEMA NEGRO + VERDES) */}
        {/* ======================================================== */}
        <div className="bg-[#08090a] text-white">
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

          {/* 2.8 Sección de Contacto Final en Tema Oscuro */}
          <DemoCta />
        </div>
      </main>

      {/* Pie de Página Oficial en Tema Oscuro */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Modal de Contacto */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

export default App;
