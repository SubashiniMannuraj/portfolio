# React 3D Portfolio

A modern, interactive portfolio website built with React.js and Three.js featuring stunning 3D animations and smooth scrolling navigation.

## Features

- **3D Animations**: Interactive 3D sphere using Three.js and React Three Fiber
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Modern Design**: Beautiful gradient backgrounds and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Sections**:
  - Hero Section with 3D Animation
  - About Me
  - Technical Skills
  - Projects Portfolio
  - Education Timeline
  - Achievements & Awards
  - Certifications
  - Contact Form

## Tech Stack

- **React.js** - UI Framework
- **Three.js** - 3D Graphics Library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation Library
- **React Scroll** - Smooth Scrolling Navigation

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd subashini_m_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Education.js
│   ├── Achievements.js
│   ├── Certifications.js
│   ├── Contact.js
│   ├── Footer.js
│   └── [corresponding CSS files]
├── App.js
├── index.js
└── index.css
public/
└── index.html
package.json
```

## Customization

### Update Your Information
Edit the following files to add your own information:
- **Navbar.js**: Update logo and navigation
- **Hero.js**: Update your name and title
- **About.js**: Add your biography
- **Skills.js**: List your technical skills
- **Projects.js**: Add your projects
- **Education.js**: Update your education
- **Achievements.js**: Add your achievements
- **Certifications.js**: List your certifications
- **Contact.js**: Update contact information and links

### Customize Colors
Modify the color scheme in the CSS files:
- Primary color: `#64c8ff` (Light Blue)
- Secondary color: `#667eea` (Purple)
- Background: Gradient from `#0f0c29` to `#302b63`

## 🚢 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📝 License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## Contact

For questions or suggestions, feel free to reach out through the contact form on the website.

---

**Made with ❤️ using React, Three.js, and modern web technologies**
