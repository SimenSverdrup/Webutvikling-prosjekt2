import React from 'react';

export default function GridSvg() {
    return (
        <div id="grid_svg">
            <svg width="300" height="200" background-color="white">
                <rect id="house" width="100" height="60" x="100" y="120" />
                <rect width="5" height="200" x="0" y="0" />
                <rect width="5" height="200" x="295" y="0" />
                <rect width="300" height="5" x="0" y="195" />
                <rect width="300" height="5" x="0" y="0" />
            </svg>
        </div>
    )
}