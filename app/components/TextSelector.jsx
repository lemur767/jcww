'use client';

import React, { useState } from 'react';

const TextEditor = () => {
	const [text, setText] = useState('');

	return (
		<div>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder='Enter text'
			/>
			<span>Text: {text}</span>
		</div>
	);
};

export default TextEditor;
