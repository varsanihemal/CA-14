import React from 'react';
import './Work.css'; // Import component-specific CSS

const Work = () => (
    <section className="work">
        <h2>Work</h2>
        <div className="work-item">
            <img src="/images/Spotify1.png" alt="Project 1" className="work-image" />
            <h3>Spotify Project</h3>
            <p>A spotify website that plays music and includes various features like increasing volume, playback features and much more!!!!</p>
            <a href="https://github.com/varsanihemal/hvarsani_spotify/blob/master/Readme.md" className="work-link">View Project</a>
        </div>

        <div className="work-item">
            <img src="/images/CMS.png" alt="Project 1" className="work-image" />
            <h3>Pixel Pulse Store(CMS Project Using PHP)</h3>
            <p>A game seller shop that allows cutomers to buy games and add reviews and just enhance customer experience</p>
            <a href="https://github.com/varsanihemal/PixelPulse/tree/main" className="work-link">View Project</a>
        </div>
        {/* Add more work items as needed */}
    </section>
);

export default Work;





