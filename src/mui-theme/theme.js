import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(https://images.unsplash.com/photo-1561069934-eee225952461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	title: {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		flexGrow: 1,
	},
	sidebar: {
		paddingTop: '56px',
	},
	SideList: {
		color: 'white',
		backgroundColor: theme.palette.primary.main,
		width: '100%',
	},
	mainContent: {
		padding: '100px 20px 0 20px',
	},
	divider: {
		backgroundColor: '#000',
		height: '2px',
		width: '100%',
		marginTop: '10px',
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
}));
