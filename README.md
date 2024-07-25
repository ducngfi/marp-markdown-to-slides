# Marp Convert Slides to Images

This project converts a Markdown file containing slides into individual PNG images using Marp CLI. The slides are styled using a custom CSS theme.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/)
- [Google Chrome](https://www.google.com/chrome/) or [Microsoft Edge](https://www.microsoft.com/edge/)

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/ducngfi/marp-markdown-to-slides.git
    cd marp-markdown-to-slides
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

1. **Prepare your Markdown and CSS files**:
    - `slides.md`: This file contains your slide content in Markdown format.
    - `slides.css`: This file contains the custom CSS for styling your slides.

    Ensure both files are in the root directory of your project.

2. **Run the conversion script**:
    ```sh
    npm run convert
    ```

3. **View the generated images**:
    - The converted slide images will be saved in the `images` directory.

## Project Structure

```
/your-project-directory
├── convert.js
├── slides.md
├── slides.css
├── images/  # This directory will be created if it doesn't exist
└── package.json
```

## Script Explanation

The `convert.js` script does the following:

1. Reads the `slides.md` file.
2. Extracts and removes the global front matter.
3. Splits the Markdown content into individual slides.
4. Ensures the `images` directory exists.
5. For each slide:
   - Writes the slide content to a temporary Markdown file.
   - Converts the slide to an image using Marp CLI, applying the custom CSS theme.
   - Deletes the temporary Markdown file.

## Troubleshooting

- Ensure you have Node.js and npm installed.
- Ensure you have Google Chrome or Microsoft Edge installed for generating images.
- Make sure your `slides.md` and `slides.css` files are correctly formatted and located in the root directory.
- Check the console output for any errors during the conversion process.

## License

This project is licensed under the MIT License.