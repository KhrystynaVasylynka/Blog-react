import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Box, Link} from '@mui/material'

type Props = {}
const Social = (props: Props) => {
	const iconStyles = {
		cursor: 'pointer',
		marginRight: '30px',
		color: 'brown',
		'&:hover, &:focus': {
				color: 'red',
		},
}
	return (
		<Box>
		<Link
				href="https://www.facebook.com/help/188157731232424"
				target="_blank"
				sx={iconStyles}
		>
				<FacebookIcon />
		</Link>
		<Link
				href="https://www.facebook.com/help/instagram/155940534568753"
				target="_blank"
				sx={iconStyles}
		>
				<InstagramIcon />
		</Link>
		<Link
				href="https://twitter.com/?lang=ru"
				target="_blank"
				sx={iconStyles}
		>
				<TwitterIcon />
		</Link>
		<Link
				href="https://www.youtube.com/"
				target="_blank"
				sx={{
						...iconStyles,
						'&:last-child': {
								marginRight: 0,
						},
				}}
		>
				<YouTubeIcon />
		</Link>
</Box>
	)
}
export default Social