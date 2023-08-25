import Container from '@mui/material/Container'
import { Button } from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline'

import AppBar from '@mui/material/AppBar'
import useMediaQuery from '@mui/material/useMediaQuery'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Stack from '@mui/material/Stack'

// styles en linea

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

// { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" }

// const matches =
{
	/* <span>{`(min-width:600px) matches: ${matches}`}</span>; } */
}

export default function App() {
	const md = useMediaQuery('(min-width:600px)')

	let directionBreak = md ? 'column' : 'row'

	return (
		<>
			<Container
				component="main"
				maxWidth="xl"
				disableGutters={true}
				sx={{
					border: '1px solid red',
					height: '100vh',

					'--vega': 'brown',
				}}
			>
				<CssBaseline />
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							News
						</Typography>
					</Toolbar>
				</AppBar>
				<Stack
					spacing={{ sm: '20px', md: '100px', xl: '2px' }}
					mt="40px"
					direction={directionBreak}
				>
					<Button variant="contained">Login</Button>
					<Button
						variant="contained"
						sx={{
							color: 'var(--vega)',
						}}
					>
						Login
					</Button>
					<Button variant="contained">Login</Button>
				</Stack>
			</Container>
		</>
	)
}
