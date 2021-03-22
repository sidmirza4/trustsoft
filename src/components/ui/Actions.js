import React, { Fragment } from 'react';
import { IconButton } from '@material-ui/core';
import { Edit, Visibility, Delete } from '@material-ui/icons';

export default function Actions() {
	return (
		<Fragment>
			<IconButton>
				<Edit />
			</IconButton>
			<IconButton>
				<Visibility />
			</IconButton>
			<IconButton>
				<Delete />
			</IconButton>
		</Fragment>
	);
}
