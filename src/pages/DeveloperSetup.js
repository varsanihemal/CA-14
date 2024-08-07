// src/pages/DeveloperSetup.js
import React from 'react';

const DeveloperSetup = () => {
    return (
        <section className="developer-setup">
        <h2>Developer Setup</h2>
        <div className="setup-item">
            <h3>VSCode Setup</h3>
            <ul>
                <li>
                    <strong>Installation:</strong> Download and install Visual Studio Code from <a href="https://code.visualstudio.com/" className="resource-link">VSCode Official Site</a>.
                </li>
                <li>
                    <strong>Extensions:</strong> 
                    <ul>
                        <li><strong>Prettier:</strong> Code formatter for consistent code style. Install from the <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" className="resource-link">VSCode Marketplace</a>.</li>
                        <li><strong>ESLint:</strong> Linting tool to ensure code quality. Install from the <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" className="resource-link">VSCode Marketplace</a>.</li>
                        <li><strong>Bracket Pair Colorizer:</strong> Colorizes matching brackets to improve readability. Install from the <a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer" className="resource-link">VSCode Marketplace</a>.</li>
                    </ul>
                </li>
                <li>
                    <strong>Settings:</strong> Configure your settings for a better development experience.
                    <ul>
                        <li><strong>Editor:</strong> Enable format on save to automatically format code. <code>"editor.formatOnSave": true</code></li>
                        <li><strong>File Encoding:</strong> Set UTF-8 encoding for compatibility. <code>"files.encoding": "utf8"</code></li>
                        <li><strong>Font Size:</strong> Adjust font size to your preference. <code>"editor.fontSize": 14</code></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="setup-item">
            <h3>Terminal Setup</h3>
            <ul>
                <li>
                    <strong>Installation:</strong> Use the integrated terminal in VSCode or install a separate terminal like <a href="https://github.com/microsoft/terminal" className="resource-link">Windows Terminal</a> or <a href="https://iterm2.com/" className="resource-link">iTerm2</a>.
                </li>
                <li>
                    <strong>Configuration:</strong>
                    <ul>
                        <li><strong>Shell:</strong> Configure your preferred shell (e.g., <code>bash</code>, <code>zsh</code>, <code>fish</code>) in terminal settings.</li>
                        <li><strong>Aliases:</strong> Set up common command aliases to streamline your workflow. Example: <code>alias ll='ls -la'</code></li>
                        <li><strong>Custom Prompts:</strong> Customize your shell prompt to include useful information (e.g., current directory, git branch).</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="setup-item">
            <h3>Preferred Editor Font</h3>
            <ul>
                <li>
                    <strong>Font:</strong> <code>Fira Code</code> - A popular monospaced font with programming ligatures that enhances readability and reduces eye strain.
                </li>
                <li>
                    <strong>Installation:</strong> Download and install <a href="https://github.com/tonsky/FiraCode" className="resource-link">Fira Code</a>. 
                    After installation, select the font in your VSCode settings: <code>"editor.fontFamily": "Fira Code", "editor.fontLigatures": true</code>.
                </li>
            </ul>
        </div>
    </section>
    );
};

export default DeveloperSetup;
