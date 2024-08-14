'use client';

import React, { useState } from 'react';

const ColorPicker = () => {
	const [color, setColor] = useState('#000000');

	return (
		<div>
			<input
				type='color'
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
			<span>Selected Color: {color}</span>
		</div>
	);
};

export default ColorPicker;
