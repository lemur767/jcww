'use client';

import React, { useRef, useEffect, useState } from 'react';

const MaskCanvas = ({ color, pattern, text }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw pattern
		if (pattern) {
			const img = new Image();
			img.src = `/patterns/${pattern}.png`; // Assumes you have pattern images in the public folder
			img.onload = () => {
				const pattern = ctx.createPattern(img, 'repeat');
				ctx.fillStyle = pattern;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			};
		}

		// Draw color overlay
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Draw text
		ctx.fillStyle = 'white';
		ctx.font = '30px Arial';
		ctx.fillText(text, 50, 50);
	}, [color, pattern, text]);

	return (
		<canvas
			ref={canvasRef}
			width={500}
			height={500}
			style={{ border: '1px solid black' }}
		/>
	);
};

export default MaskCanvas;
