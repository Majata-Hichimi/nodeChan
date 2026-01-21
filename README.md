## nodeChan

*nodeChan is a command-line interface (CLI) tool designed to streamline the creation of Node.js and TypeScript projects. It provides an interactive, guided setup experience that helps developers quickly scaffold a project with a consistent structure and preferred runtime environment.*

# Overview

The goal of nodeChan is to reduce repetitive setup tasks when starting new JavaScript or TypeScript projects. Instead of manually creating directories, configuring runtimes, and installing dependencies, developers can rely on an intuitive CLI workflow to get started efficiently.

The tool is built with modern Node.js tooling and focuses on clarity, predictability, and extensibility.

Features

Interactive CLI prompts for guided project setup

Language selection (JavaScript or TypeScript)

Runtime environment selection (Node.js, Bun, Deno)

Structured and readable terminal output

Clean cancellation handling to prevent partial setups

Extensible architecture for adding future templates and features

Technology Stack

Node.js — Core runtime

TypeScript — Type-safe development

@clack/prompts — Interactive terminal prompts

figlet — ASCII banner rendering

chalk — Terminal text styling

Project Structure (High-Level)

The CLI is structured around a single execution entry point that:

Displays an ASCII banner

Introduces the tool to the user

Collects user preferences via prompts

Executes project setup logic based on selected options

Gracefully exits with a completion message

This approach ensures predictable execution order and a clean user experience.

Design Philosophy

Developer-first: Optimized for developers who frequently create new projects

Minimal friction: Fewer decisions, faster setup

Explicit control: Users choose language and runtime instead of relying on defaults

Maintainable codebase: Clear async flow and modular prompt handling

Current Status

This project is actively under development. Core CLI flow and user interaction are implemented, with future plans to expand project templates, dependency management, and runtime-specific configurations.

Future Improvements

Project templates for different use cases (API, CLI, library)

Automated dependency installation

Configuration file generation

Plugin or preset support

Global installation support via npm

Author

*Developed by Majata Hichimi*
*January 2025*