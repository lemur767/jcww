import React from 'react';

const MaskCanvas = () => {
	return (
		<div style={{ display: 'block', padding: '8px', alignItems: 'center' }}>
			<canvas
				id='maskCanvas'
				width='500'
				height='500'
				style={{ border: '1px solid black' }}
			></canvas>
		</div>
	);
};

export default MaskCanvas;
