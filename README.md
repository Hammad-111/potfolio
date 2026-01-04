# Hammad Javed Portfolio

A high-performance digital experience featuring immersive animations, glassmorphism design, and cyber-holographic aesthetics. This repository contains the full source code for my professional portfolio, optimized for current web standards and speed.

---

## The Vision

The goal of this project was to push the boundaries of traditional web design. By combining advanced JavaScript libraries like GSAP with high-speed CSS animations, I created an environment that is both visually stunning and technically lightweight. Every transition is calculated to provide a premium brand feel.

---

## Key Features and Animations

### 1. Liquid Crystal Brand Identity
The Hammad Javed name in the header isn't just a static logo; it's a living element.
- Aurora Gradient: Uses CSS variables to cycle through a tailored color palette (Blue/White/Soft Cyan) smoothly.
- Crystal Sweeps: Two independent pseudo-elements generate light rays that sweep across the text at staggered intervals, creating a 3D glass effect.
- Optimization: All brand animations are 100% CSS, ensuring they never block the main browser thread.

### 2. Digital Identity Splash Screen
The entry point of the site is an optimized, multi-stage preloader:
- Holographic Hub: A central pulse system that represents system initialization.
- Binary Rain: A high-performance canvas/CSS overlay that simulates falling data.
- Scanning Beam: A GPU-accelerated scanner that uses translateY and will-change: transform to stay fluid even on lower-end devices.
- Smart Reveal: The exit logic allows a 250ms hold state for professionalism, followed by a synchronized cross-fade reveal of the main content.

### 3. Infinite Project Slider
A horizontally scrolling section that showcases key works with hover-active glassmorphism cards. Each card uses VanillaTilt.js for real-time 3D interaction.

### 4. Featured Upcoming: HamSync
A premium, "Cyber-Void" aesthetic section highlighting the upcoming "HamSync" project.
- **Constrained Neon Glow**: Light strictly follows the border trace, preventing visual washout.
- **Modern Glassmorphism**: Deep, rich background with a sophisticated "Coming Soon" pill badge.
- **Mobile Optimized**: Fully responsive layout with adjusted logo sizing and spacing for small devices.

### 5. Experience Timeline
A high-contrast vertical timeline that uses pulsing nodes and staggered entrance animations. It is built to guide the reader through my career path chronologically with visual emphasis on milestones.

### 6. Professional Certifications
A dedicated section displaying industry credentials in modern glass-cards.
- **Verified Badges**: Each certificate includes a "Verified" badge and visual branding.
- **Hover Effects**: subtle lift and glow on interaction.

### 7. 3D Contact Hub
A completely redesigned "Get In Touch" section featuring:
- **3D Tilt Cards**: Contact methods (Email, Phone, WhatsApp) are presented as interactive 3D elements.
- **Floating Input Fields**: Modern form inputs with floating labels and focus animations.


---

## Technical Stack

- Animation Engine: GreenSock (GSAP) - Used for all complex, time-based sequences and ScrollTrigger reveals.
- Smooth Content Flow: Lenis Scroll - Provides the heavy, high-end momentum scrolling feel.
- Interactive UI: VanillaTilt.js for 3D card effects and Particles.js for the matrix background.
- Icons and Typography: Using Lucide Icons for ultra-sharp SVG visuals and Google Fonts for modern typography.

---

## Setup and Local Development

To set up the project locally on your machine, follow these commands.

### Prerequisites
- A modern web browser (Chrome, Firefox, or Edge recommended)
- A local server environment (like VS Code Live Server) or simply open the file directly.

### Commands

1. Clone the repository:
git clone https://github.com/Hammad-111/potfolio.git

2. Navigate into the directory:
cd potfolio

3. Previewing the site:
If you have Python installed, you can quickly spin up a local server:
python3 -m http.server 8000
Then visit http://localhost:8000 in your browser.

---

## Performance Optimization Metrics

I have prioritized performance to ensure that the site remains fast despite the heavy animation profile:

- GPU Acceleration: By avoiding top, left, or margin for animations and strictly using transform, the site achieves a constant 60 FPS on high-refresh-rate displays.
- Main Thread Deferral: Heavy components (like the Particles background and Tilt effects) are deferred by 200ms using setTimeout. This allows the splash screen to start instantly without any freeze during initialization.
- Binary Asset Management: Images are optimized for web use, and icons are handled as lightweight SVGs.

---

## Project Structure

assets/
  css/
    style.css      (Custom design system and animations)
  js/
    script.js     (Orchestration and library initializations)
  images/         (Optimized project assets)
index.html        (Main site structure)
README.md         (Project documentation)

---

## Contribution

Feel free to fork this project. If you find any issues or have suggestions for new animations, please open an issue or submit a pull request.

Developed by Hammad Javed.
