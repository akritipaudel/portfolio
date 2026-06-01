import React, { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle interaction
    const mouse = { x: -1000, y: -1000, radius: 100 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle class
    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1); // float upwards (anti-gravity)
        this.speedX = Math.random() * 0.3 - 0.15;
        this.wobble = Math.random() * 0.02;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
        // Warm amber/gold or soft holographic cyan/green colors
        const colors = [
          'rgba(255, 159, 104, ', // amber
          'rgba(197, 168, 128, ', // gold
          'rgba(134, 227, 206, ', // cyan
          'rgba(163, 226, 201, ', // green
        ];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.4 + 0.15;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.speedY;
        this.angle += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.angle) * 0.2;

        // Mouse avoidance/repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Push particles slightly away
          this.x += Math.cos(angle) * force * 1.5;
          this.y += Math.sin(angle) * force * 1.5;
        }

        // Reset if particles go off screen
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset(false);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorBase}${this.alpha})`;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      }
    }

    // Initialize particle array
    const maxParticles = Math.min(80, Math.floor((width * height) / 15000));
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw a subtle warm vignetted cosmic gradient
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 10,
        width / 2, height / 2, Math.max(width, height)
      );
      gradient.addColorStop(0, '#1c1511'); // deep warm sepia
      gradient.addColorStop(0.5, '#120d0b'); // darker sepia
      gradient.addColorStop(1, '#080605'); // deep space black-sepia
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render cosmic dust nebulae glow spots
      ctx.globalCompositeOperation = 'screen';
      
      // Cyan glow in top-right
      const cyanGlow = ctx.createRadialGradient(
        width * 0.8, height * 0.2, 50,
        width * 0.8, height * 0.2, 350
      );
      cyanGlow.addColorStop(0, 'rgba(134, 227, 206, 0.04)');
      cyanGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, 0, width, height);

      // Amber glow in bottom-left
      const amberGlow = ctx.createRadialGradient(
        width * 0.2, height * 0.8, 50,
        width * 0.2, height * 0.8, 400
      );
      amberGlow.addColorStop(0, 'rgba(255, 159, 104, 0.04)');
      amberGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = amberGlow;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 w-full h-full paper-grain opacity-100 mix-blend-overlay" />
      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 w-full h-full crt-scanlines opacity-40 mix-blend-color-burn" />
    </div>
  );
}
