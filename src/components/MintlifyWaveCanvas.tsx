import React, { useEffect, useRef } from 'react';

export interface RibbonSettings {
  width: number;
  height: number;
  count: number;
  resolution: number;
  spacing: number;
  amplitude: number;
  frequency: number;
  phase: number;
  twist: number;
  bulge: number;
  morph: number;
  speed: number;
  anim: 'spin' | 'flow' | 'morph' | 'breathe';
  strokeWidth: number;
  opacity: number;
  gradientStart: string;
  gradientEnd: string;
  background?: string;
  particlesOn: boolean;
  particleColors: string[];
  particleCount: number;
  particleSize: number;
  particleLength: number;
  particleFade: boolean;
  particleSpeed: number;
  particleCoverage: number;
  particleRandom: boolean;
  particleSparse: number;
  particleVariance: number;
  particleSeed: number;
  rotate: number;
  edgeFade: number;
  edgeFadeStart?: number;
  edgeFadeEnd?: number;
  p2Phase?: number;
}

export const DEFAULT_RIBBON_SETTINGS: RibbonSettings = {
  width: 1720,
  height: 1080,
  count: 24,
  resolution: 81,
  spacing: 4.9,
  amplitude: 163,
  frequency: 0.75,
  phase: 0.14,
  twist: 0.41,
  bulge: 0.66,
  morph: 0.5,
  speed: 0.9,
  anim: 'spin',
  strokeWidth: 1.15,
  opacity: 0.88,
  gradientStart: '#18e299',
  gradientEnd: '#baff24',
  background: 'transparent',
  particlesOn: true,
  particleColors: ['#d87cff', '#ffa723', '#44aeff', '#ffa3d3'],
  particleCount: 1,
  particleSize: 2.8,
  particleLength: 88,
  particleFade: true,
  particleSpeed: 1.15,
  particleCoverage: 1,
  particleRandom: true,
  particleSparse: 0.32,
  particleVariance: 0,
  particleSeed: 2025,
  rotate: 0,
  edgeFade: 0.08,
  edgeFadeStart: 0.12,
  edgeFadeEnd: 0.12
};

function parseHexColor(hex: string): [number, number, number] {
  let t = hex.replace('#', '');
  if (t.length === 3) t = t.split('').map((c) => c + c).join('');
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}

function hexToRgba(hex: string, alpha: number): string {
  const [r, g, b] = parseHexColor(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function prng(seed1: number, seed2: number, seed3: number): number {
  let r = (0x165667b1 * seed1 + 0x27d4eb2f * seed2 + 0x3a8f05c5 * seed3) | 0;
  r = Math.imul(r ^ (r >>> 13), 0x4bf19f61);
  return (((r ^ (r >>> 16)) >>> 0) % 100000) / 100000;
}

function generateLinePoints(
  lineIndex: number,
  time: number,
  settings: RibbonSettings
): Array<{ x: number; y: number }> {
  const segs = Math.max(2, settings.resolution) - 1;
  const centerY = settings.height / 2;
  const rad = (settings.rotate * Math.PI) / 180;
  const cosRad = Math.cos(rad);
  const sinRad = Math.sin(rad);
  const centerX = settings.width / 2;

  const points: Array<{ x: number; y: number }> = [];

  for (let n = 0; n <= segs; n++) {
    const progress = n / segs; // 0 to 1 along the line

    const count = settings.count;
    const linePhase = settings.phase * (lineIndex - (count - 1) / 2);
    const twist = settings.twist;
    const freq = settings.frequency * Math.PI * 2;
    const bulge = 1 + settings.bulge * Math.sin(progress * Math.PI);

    let u_anim = 0;
    let d_anim = 0;
    let m_anim = 1;
    let h_anim = 0;

    if (settings.anim === 'flow') u_anim = 0.8 * time;
    if (settings.anim === 'morph') d_anim = 0.6 * time;
    if (settings.anim === 'breathe') m_anim = 1 + 0.35 * Math.sin(1.2 * time);
    if (settings.anim === 'spin') h_anim = 0.7 * time;

    const p = Math.sin(freq * progress + linePhase + u_anim);
    const f = Math.sin(0.5 * freq * progress - 2 * linePhase + 0.7 * u_anim + h_anim + (settings.p2Phase ?? 0));
    let g = 0;
    if (settings.morph > 0) {
      g = Math.sin(3.7 * progress + d_anim + 0.2 * lineIndex) * Math.cos(2.1 * progress - 0.5 * d_anim + 0.13 * lineIndex);
    }

    const yOffset = (p + twist * f + settings.morph * g) * 0.5 * bulge * m_anim;
    const lineOffset = ((count <= 1 ? 0.5 : lineIndex / (count - 1)) - 0.5) * settings.count * settings.spacing;

    const rawX = progress * settings.width;
    const rawY = centerY + lineOffset + yOffset * settings.amplitude;

    if (settings.rotate === 0) {
      points.push({ x: rawX, y: rawY });
    } else {
      const dx = rawX - centerX;
      const dy = rawY - centerY;
      points.push({
        x: centerX + dx * cosRad - dy * sinRad,
        y: centerY + dx * sinRad + dy * cosRad
      });
    }
  }

  return points;
}

function drawRibbonFrame(
  ctx: CanvasRenderingContext2D,
  settings: RibbonSettings,
  time: number,
  introFade: number = 1
) {
  const { width, height } = settings;
  ctx.clearRect(0, 0, width, height);

  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  const colors: Array<{ solid: string; clear: string; full: string }> = [];
  const [r1, g1, b1] = parseHexColor(settings.gradientStart);
  const [r2, g2, b2] = parseHexColor(settings.gradientEnd);
  for (let t = 0; t < settings.count; t++) {
    const factor = settings.count <= 1 ? 0 : t / (settings.count - 1);
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    colors.push({
      solid: `rgb(${r}, ${g}, ${b})`,
      clear: `rgba(${r}, ${g}, ${b}, 0)`,
      full: `rgba(${r}, ${g}, ${b}, ${settings.opacity})`
    });
  }

  ctx.lineWidth = settings.strokeWidth;

  const clamp = (val: number) => Math.min(0.5, Math.max(0, val));
  const edgeFadeStart = clamp(settings.edgeFadeStart ?? settings.edgeFade);
  const edgeFadeEnd = clamp(settings.edgeFadeEnd ?? settings.edgeFade);

  const allLines: Array<Array<{ x: number; y: number }>> = [];

  for (let lineIdx = 0; lineIdx < settings.count; lineIdx++) {
    const pts = generateLinePoints(lineIdx, time, settings);
    allLines.push(pts);
    if (pts.length < 2) continue;

    const first = pts[0];
    const last = pts[pts.length - 1];
    const col = colors[lineIdx];
    if (!first || !last || !col) continue;

    if (introFade < 1) {
      const rVal = Math.min(introFade / (0.6 + 0.4 * prng(lineIdx, 53, settings.particleSeed)), 1);
      const l = rVal * rVal * (3 - 2 * rVal);
      if (l <= 0) {
        ctx.setLineDash([]);
        continue;
      }
      if (l < 1) {
        let totalLen = 0;
        for (let j = 1; j < pts.length; j++) {
          totalLen += Math.hypot(pts[j].x - pts[j - 1].x, pts[j].y - pts[j - 1].y);
        }
        ctx.setLineDash([totalLen * l, totalLen + 1]);
      } else {
        ctx.setLineDash([]);
      }
    } else {
      ctx.setLineDash([]);
    }

    if (edgeFadeStart > 0 || edgeFadeEnd > 0) {
      const grad = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
      grad.addColorStop(0, edgeFadeStart > 0 ? col.clear : col.full);
      if (edgeFadeStart > 0) grad.addColorStop(edgeFadeStart, col.full);
      if (edgeFadeEnd > 0) grad.addColorStop(1 - edgeFadeEnd, col.full);
      grad.addColorStop(1, edgeFadeEnd > 0 ? col.clear : col.full);
      ctx.strokeStyle = grad;
      ctx.globalAlpha = 1;
    } else {
      ctx.strokeStyle = col.solid;
      ctx.globalAlpha = settings.opacity;
    }

    ctx.beginPath();
    ctx.moveTo(first.x, first.y);
    for (let j = 1; j < pts.length - 1; j++) {
      const p1 = pts[j];
      const p2 = pts[j + 1];
      ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    }
    ctx.lineTo(last.x, last.y);
    ctx.stroke();
  }

  if (introFade < 1) ctx.setLineDash([]);

  // Multi-colored filaments & particles (signature Mintlify sparkle)
  if (settings.particlesOn && settings.particleCount > 0 && introFade >= 1) {
    ctx.globalAlpha = 1;
    const numParticles = Math.floor(settings.particleCount);

    for (let lineIdx = 0; lineIdx < settings.count; lineIdx++) {
      if (settings.particleRandom && prng(lineIdx, 7, settings.particleSeed) > settings.particleSparse) {
        continue;
      }

      const pts = allLines[lineIdx];
      if (!pts || pts.length < 2) continue;

      const lengths: number[] = [];
      let totalLength = 0;
      for (let j = 1; j < pts.length; j++) {
        const segLen = Math.hypot(pts[j].x - pts[j - 1].x, pts[j].y - pts[j - 1].y);
        lengths.push(segLen);
        totalLength += segLen;
      }
      if (totalLength === 0) continue;

      for (let pIdx = 0; pIdx < numParticles; pIdx++) {
        const period = Math.max(0.8, 3.4 / Math.max(0.15, Math.abs(settings.particleSpeed)));
        const cycle = period + 2.2;
        const lineShift = 0.18 * lineIdx;
        const randShift = 1.8 * prng(lineIdx, 17 * pIdx + 3, settings.particleSeed);
        let s = (time + lineShift - 0.9 * pIdx - randShift) % cycle;
        if (s < 0) s += cycle;
        if (s > period) continue;

        const u = s / period;
        const fade = u < 0.18 ? u / 0.18 : u > 0.68 ? (1 - u) / 0.32 : 1;
        const targetDist = u * settings.particleCoverage * totalLength;

        let currentDist = 0;
        let px = pts[0].x;
        let py = pts[0].y;
        let dx = 0;
        let dy = 0;

        for (let k = 0; k < lengths.length; k++) {
          const segLen = lengths[k];
          if (currentDist + segLen >= targetDist) {
            const frac = segLen > 0 ? (targetDist - currentDist) / segLen : 0;
            const pA = pts[k];
            const pB = pts[k + 1];
            px = pA.x + (pB.x - pA.x) * frac;
            py = pA.y + (pB.y - pA.y) * frac;
            dx = pB.x - pA.x;
            dy = pB.y - pA.y;
            break;
          }
          currentDist += segLen;
        }

        const distLen = Math.hypot(dx, dy) || 1;
        const normDx = dx / distLen;
        const normDy = dy / distLen;
        const halfLen = settings.particleLength / 2;

        const startX = px - normDx * halfLen;
        const startY = py - normDy * halfLen;
        const endX = px + normDx * halfLen;
        const endY = py + normDy * halfLen;

        const pColors = settings.particleColors.length ? settings.particleColors : ['#ffffff'];
        const colorIdx = Math.floor(prng(lineIdx, 19 * pIdx + 11, settings.particleSeed) * pColors.length) % pColors.length;
        const pColor = pColors[colorIdx] || '#ffffff';

        ctx.lineWidth = settings.particleSize;

        if (settings.particleFade) {
          const pGrad = ctx.createLinearGradient(startX, startY, endX, endY);
          pGrad.addColorStop(0, hexToRgba(pColor, 0));
          pGrad.addColorStop(1, hexToRgba(pColor, 1));
          ctx.strokeStyle = pGrad;
        } else {
          ctx.strokeStyle = pColor;
        }

        ctx.globalAlpha = fade;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }
  }

  ctx.globalAlpha = 1;
}

export const MintlifyWaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const settings = DEFAULT_RIBBON_SETTINGS;
    let animationFrameId: number;
    let startTime = 0;
    let introStartTime = 0;

    const render = (timestamp: number) => {
      if (startTime === 0) startTime = timestamp;
      if (introStartTime === 0) introStartTime = timestamp;

      const elapsed = (timestamp - startTime) / 1000 * settings.speed;
      const introFade = Math.min((timestamp - introStartTime) / 1200, 1);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const targetW = Math.max(1, Math.round(rect.width * dpr));
      const targetH = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      const scale = Math.max(rect.width / settings.width, rect.height / settings.height);
      const offsetX = (rect.width - settings.width * scale) / 2;
      const offsetY = (rect.height - settings.height * scale) / 2;

      ctx.setTransform(scale * dpr, 0, 0, scale * dpr, offsetX * dpr, offsetY * dpr);
      drawRibbonFrame(ctx, settings, elapsed, introFade);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="block size-full pointer-events-none absolute inset-y-0 left-1/2 z-0 w-full max-w-[1920px] -translate-x-1/2"
    />
  );
};
