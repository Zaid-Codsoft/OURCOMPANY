'use client';

import { useEffect, useRef } from 'react';

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const colors: [number, number, number][] = [
      [0, 216, 255],    // Cyan
      [124, 255, 103],  // Green
      [255, 255, 255],  // White
    ];

    const particles: any[] = [];
    const properties = {
      bgColor: 'rgba(17, 17, 23, 0.95)',
      particleColor: 'rgba(255, 255, 255, 0.5)',
      particleRadius: 3,
      particleCount: 60,
      particleMaxVelocity: 0.5,
      lineLength: 150,
      particleLife: 6,
    };

    window.onresize = function() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;
      life: number;
      color: [number, number, number];

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.life = Math.random() * properties.particleLife * 60;
        this.color = colors[Math.floor(Math.random() * colors.length)] || [0, 216, 255];
      }

      position() {
        if (this.x + this.velocityX > width || this.x + this.velocityX < 0) {
          this.velocityX *= -1;
        }
        if (this.y + this.velocityY > height || this.y + this.velocityY < 0) {
          this.velocityY *= -1;
        }
        this.x += this.velocityX;
        this.y += this.velocityY;
      }

      reDraw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.life / properties.particleLife / 60})`;
        ctx.fill();
      }

      reCalculateLife() {
        if (this.life < 1) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
          this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
          this.life = Math.random() * properties.particleLife * 60;
          this.color = colors[Math.floor(Math.random() * colors.length)] || [0, 216, 255];
        }
        this.life--;
      }
    }

    function reDrawBackground() {
      if (!ctx) return;
      ctx.fillStyle = properties.bgColor;
      ctx.fillRect(0, 0, width, height);
    }

    function reDrawParticles() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].reCalculateLife();
        particles[i].position();
        particles[i].reDraw();
      }
    }

    function drawLines() {
      if (!ctx) return;
      let x1, y1, x2, y2, length, opacity;
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
          x1 = particles[i].x;
          y1 = particles[i].y;
          x2 = particles[j].x;
          y2 = particles[j].y;
          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          if (length < properties.lineLength) {
            opacity = 1 - length / properties.lineLength;
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      reDrawBackground();
      reDrawParticles();
      drawLines();
      requestAnimationFrame(loop);
    }

    function init() {
      for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle());
      }
      loop();
    }

    init();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default AuroraBackground; 