# Color Blender

A simple React project that lets you blend and visualize RGB colors dynamically. Generate random color palettes, blend colors smoothly on a canvas, and experiment with color mixing in real time. 

[Live site](https://fultong.github.io/color-blender/)

---

## Features

* **Canvas component** that blends incoming RGB colors with a smooth averaging effect.
* **Color palette** displaying a set of random or generated colors.
* Responsive layout with adaptive grid for palette squares (max 4 columns).
* CSS custom properties for dynamic styling of colors.
* Easy to extend and customize for color-related UI projects.

---

## Installation

1. Clone the repo:

   ```
   git clone https://github.com/FultonG/color-blender.git
   cd color-blender
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```
   npm start
   # or
   yarn start
   ```

---

## Usage

* The **Canvas** component accepts a color prop as an RGB object `{ r, g, b }`.
* The **ColorPalette** generates and displays a customizable number of color squares.
* Colors update and blend smoothly on the canvas whenever props change.

---

## Utilities

* `avg(...nums)`: Calculates the average of numbers (rounded down).
* `generatePalette(numColors)`: Creates an array of random RGB colors.
* `toString(rgb)`: Converts RGB objects to CSS-compatible strings like `"r, g, b"`.
* `white`: Predefined white color `{ r: 255, g: 255, b: 255 }`.

---

## Folder Structure

```
src/
 ├── components/
 │    ├── Canvas.jsx
 │    └── ColorPalette.jsx
 ├── utils/
 │    └── rgb.js
 ├── App.jsx
 ├── index.js
 └── styles/
      ├── canvas.css
      └── color-palette.css
```

---

## License

MIT License © 2025 Fulton Garcia

---

## Contribution

Feel free to open issues or pull requests for new features or bug fixes!

---

## Contact

Fulton Garcia – [fultongarcia@gmail.com](mailto:fultongarcia@gmail.com)

Project Link: [https://github.com/FultonG/color-blender](https://github.com/FultonG/color-blender)
