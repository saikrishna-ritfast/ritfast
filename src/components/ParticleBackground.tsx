import { useEffect, useRef } from "react";
import styles from "../styles/componentStyles/particleBackground.module.css";

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const mouse = { x: -100, y: -100 };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            x: number;
            y: number;
            size: number;
            color: string;
            offsetX: number;
            offsetY: number;
            speed: number;

            constructor(x: number, y: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                // Random offset from center of swarm (reduced spread)
                const spread = 80;
                this.offsetX = (Math.random() - 0.5) * spread;
                this.offsetY = (Math.random() - 0.5) * spread;
                // Speed of following
                this.speed = Math.random() * 0.08 + 0.04;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                // Draw small dash/rectangle for confetti look
                ctx.rect(this.x, this.y, this.size, this.size * 0.4);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // Move towards mouse + offset
                // If mouse is offscreen, do nothing
                if (mouse.x < 0) return;

                const targetX = mouse.x + this.offsetX;
                const targetY = mouse.y + this.offsetY;

                this.x += (targetX - this.x) * this.speed;
                this.y += (targetY - this.y) * this.speed;
            }
        }

        function init() {
            particles = [];
            // Reduced number of particles for a cleaner swarm
            const numberOfParticles = 80;
            for (let i = 0; i < numberOfParticles; i++) {
                // Spawn at random positions initially
                let x = Math.random() * canvas!.width;
                let y = Math.random() * canvas!.height;
                let size = (Math.random() * 5) + 2;
                // Google-like colors or just blues per design request
                const colors = ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#4285F4', '#4285f4cc'];
                let color = colors[Math.floor(Math.random() * colors.length)];
                particles.push(new Particle(x, y, size, color));
            }
        }

        function animate() {
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        handleResize(); // Initialize size and particles
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default ParticleBackground;
