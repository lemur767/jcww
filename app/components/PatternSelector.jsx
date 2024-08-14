'use client';

import React from 'react';

const PatternSelector = () => {
	return (
		<div>
			<label>
				Select Pattern:
				<select>
					<option value='pattern1'>Pattern 1</option>
					<option value='pattern2'>Pattern 2</option>
					<option value='pattern3'>Pattern 3</option>
				</select>
			</label>
		</div>
	);
};

export default PatternSelector;
