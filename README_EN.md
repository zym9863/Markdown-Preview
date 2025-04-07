[中文](README.md)

# Markdown Preview Browser Extension

A simple and practical browser extension that converts Markdown text to HTML preview in real-time.

## Features

- Real-time Preview: Instantly converts Markdown text to HTML display
- Clean Interface: Clear dual-pane design with editing on the left and preview on the right
- Beautiful Styling: Preview area uses modern design, supporting various Markdown elements
- Lightweight: No additional dependencies, ready to use after installation

## Installation

1. Download all files from this project
2. Open Chrome browser and go to the extensions page (chrome://extensions/)
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked extension"
5. Select the folder containing this project

## Usage

1. Click the extension icon in the browser toolbar
2. Enter Markdown formatted text in the left input box
3. The right panel will show the converted HTML preview in real-time

## Supported Markdown Syntax

- Headers (H1-H6)
- Bold and Italic text
- Ordered and unordered lists
- Links and images
- Blockquotes
- Code blocks
- Horizontal rules
- Tables

## Technical Implementation

- Uses Chrome Extension Manifest V3
- Implements marked.js for Markdown conversion
- Custom CSS styling for preview beautification

## Notes

- This extension supports basic Markdown syntax only
- Image preview requires valid image URLs
- Regular saving of important content is recommended to avoid accidental loss