import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'

const Logo = () => {
	const navigate = useNavigate()
	//TODO updated logo in future text is not consistent
	return (
		<Box
			onClick={() => navigate('/')}
			style={{
				cursor: 'pointer',
				marginRight: 20,
			}}
		>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80' width='180' height='60'>
				<g transform='translate(10 21.017244481186907) rotate(0 109.87031244381168 32.59614205173483)'>
					<text
						x='-30'
						y='40.5'
						fontFamily={`"Caveat", "sans-serif"`}
						fontSize='70px'
						fontWeight={'900'}
						style={{ whiteSpace: 'pre' }}
						letterSpacing={1}
						fill='#228be6'
						textAnchor='start'
						direction='ltr'
						dominantBaseline='alphabetic'
					>
						книги бг
					</text>
				</g>
				<g transform='translate(137.60687955030443 18)' stroke='none'>
					<text
						x='0'
						y='40.5'
						fontFamily={`"Caveat", "sans-serif"`}
						fontSize='70px'
						fontWeight={'900'}
						style={{ whiteSpace: 'pre' }}
						letterSpacing={1}
						fill='#fab005'
						textAnchor='start'
						direction='ltr'
						dominantBaseline='alphabetic'
					>
						бг
					</text>
					{/* <path
						fill='#fab005'
						d='M -15.81,-2.75 Q -15.81,-2.75 -17.18,-4.90 -18.56,-7.06 -20.37,-10.13 -22.19,-13.21 -23.39,-15.36 -24.59,-17.52 -25.72,-19.23 -26.86,-20.94 -27.95,-22.33 -29.03,-23.72 -30.23,-24.93 -31.42,-26.15 -32.61,-26.80 -33.79,-27.46 -35.34,-27.67 -36.89,-27.89 -38.13,-27.07 -39.36,-26.25 -40.58,-24.84 -41.80,-23.42 -42.63,-21.55 -43.45,-19.67 -43.19,-18.53 -42.93,-17.40 -41.86,-17.17 -40.79,-16.95 -39.68,-16.83 -38.56,-16.71 -36.92,-16.57 -35.28,-16.43 -33.09,-16.37 -30.90,-16.31 -28.90,-16.75 -26.90,-17.19 -24.45,-18.02 -22.00,-18.86 -20.04,-19.60 -18.08,-20.35 -16.07,-21.41 -14.07,-22.46 -13.78,-22.54 -13.50,-22.61 -13.20,-22.59 -12.91,-22.57 -12.64,-22.45 -12.37,-22.34 -12.15,-22.15 -11.93,-21.95 -11.78,-21.70 -11.63,-21.44 -11.57,-21.15 -11.52,-20.86 -11.55,-20.57 -11.59,-20.28 -11.72,-20.02 -11.85,-19.75 -12.05,-19.54 -12.26,-19.33 -12.52,-19.20 -12.79,-19.06 -13.08,-19.02 -13.37,-18.98 -13.66,-19.03 -13.95,-19.09 -14.20,-19.23 -14.46,-19.37 -14.66,-19.59 -14.86,-19.81 -14.98,-20.07 -15.10,-20.34 -15.12,-20.64 -15.15,-20.93 -15.08,-21.22 -15.01,-21.50 -14.86,-21.75 -14.70,-22.00 -14.47,-22.19 -14.24,-22.37 -13.97,-22.48 -13.69,-22.58 -13.40,-22.59 -13.10,-22.60 -12.82,-22.52 -12.54,-22.44 -12.30,-22.27 -12.06,-22.10 -11.89,-21.86 -11.71,-21.62 -11.62,-21.34 -11.53,-21.06 -11.54,-20.77 -11.55,-20.47 -11.64,-20.19 -11.74,-19.92 -11.93,-19.69 -12.11,-19.45 -12.35,-19.29 -12.60,-19.13 -12.60,-19.13 -12.60,-19.13 -14.67,-18.16 -16.74,-17.19 -18.70,-16.28 -20.67,-15.37 -23.23,-14.29 -25.80,-13.20 -28.22,-12.42 -30.64,-11.65 -33.05,-11.36 -35.47,-11.07 -37.29,-11.04 -39.11,-11.02 -40.85,-11.18 -42.60,-11.34 -43.87,-11.79 -45.14,-12.24 -46.32,-13.09 -47.51,-13.94 -48.23,-15.27 -48.95,-16.59 -48.86,-18.42 -48.77,-20.25 -47.98,-21.98 -47.19,-23.71 -46.53,-25.02 -45.86,-26.33 -44.89,-27.56 -43.91,-28.78 -42.87,-29.53 -41.82,-30.28 -40.41,-31.03 -39.00,-31.78 -37.65,-31.94 -36.29,-32.11 -35.24,-31.84 -34.18,-31.57 -33.03,-31.04 -31.87,-30.51 -30.43,-29.49 -29.00,-28.47 -27.72,-27.06 -26.44,-25.65 -25.39,-24.16 -24.34,-22.68 -23.08,-20.91 -21.82,-19.14 -20.55,-17.07 -19.28,-15.01 -17.39,-12.09 -15.51,-9.18 -13.97,-7.13 -12.43,-5.09 -12.32,-4.87 -12.20,-4.65 -12.14,-4.41 -12.08,-4.17 -12.08,-3.92 -12.08,-3.67 -12.14,-3.43 -12.20,-3.19 -12.31,-2.97 -12.43,-2.75 -12.59,-2.57 -12.76,-2.38 -12.96,-2.24 -13.16,-2.10 -13.39,-2.01 -13.63,-1.92 -13.87,-1.89 -14.12,-1.86 -14.36,-1.89 -14.61,-1.92 -14.84,-2.01 -15.07,-2.10 -15.28,-2.24 -15.48,-2.38 -15.64,-2.56 -15.81,-2.75 -15.81,-2.75 L -15.81,-2.75 Z'
					></path> */}
				</g>
			</svg>
		</Box>
	)
}

export default Logo

{
	/* <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 84"
                width="170"
                height="70"
            >
                <g
                    transform="translate(111.70727199099213 40.18904713515485) rotate(0 -14.639449325884243 10.108191201205727)"
                    stroke="none"
                >
                    <path
                        d="M-6.16 -0.07 C-6.91 -1.36, -11.29 -6.69, -10.51 -9.6 C-9.73 -12.51, -2.76 -16.14, -1.47 -17.51 C-0.18 -18.88, -4.82 -17.06, -2.77 -17.82 C-0.73 -18.58, 7.8 -22.49, 10.79 -22.07 C13.77 -21.64, 13.73 -17.9, 15.14 -15.28 C16.56 -12.65, 17.26 -9.89, 19.3 -6.34 C21.33 -2.79, 27.12 1.86, 27.36 6.02 C27.6 10.17, 22.13 16.38, 20.71 18.59 C19.29 20.8, 23.3 17.07, 18.85 19.29 C14.41 21.51, -0.99 28.92, -5.96 31.91 C-10.93 34.89, -10.53 36.11, -10.95 37.2 C-11.37 38.29, -6.37 39.83, -8.49 38.44 C-10.6 37.06, -19.21 32.14, -23.65 28.91 C-28.09 25.69, -32.61 22.87, -35.13 19.09 C-37.65 15.31, -36.96 7.76, -38.77 6.23 C-40.57 4.71, -44.38 10.44, -45.98 9.96 C-47.57 9.48, -46.87 6.6, -48.36 3.35 C-49.84 0.09, -53.99 -6.75, -54.89 -9.56 C-55.79 -12.38, -55.15 -12.47, -53.78 -13.53 C-52.41 -14.59, -49.54 -14.25, -46.65 -15.93 C-43.76 -17.62, -40.09 -22.3, -36.45 -23.63 C-32.81 -24.96, -27.65 -25.38, -24.81 -23.92 C-21.97 -22.47, -21.3 -16.26, -19.42 -14.89 C-17.54 -13.53, -14.59 -17.31, -13.55 -15.73 C-12.51 -14.14, -14.31 -8.06, -13.17 -5.37 C-12.02 -2.67, -6.92 -0.24, -6.67 0.44 C-6.43 1.13, -11.44 -0.77, -11.68 -1.27"
                        stroke="none"
                        strokeWidth="0"
                        fill="#ffd088"
                        fillRule="evenodd"
                    ></path>
                    <path
                        fill="#ffd088"
                        d="M -12.65,-2.96 Q -12.65,-2.96 -12.33,-4.21 -12.01,-5.46 -11.72,-6.56 -11.43,-7.66 -10.93,-8.85 -10.42,-10.04 -10.07,-11.25 -9.72,-12.46 -9.07,-13.81 -8.43,-15.17 -7.49,-16.35 -6.54,-17.52 -5.18,-19.12 -3.81,-20.71 -2.51,-21.74 -1.21,-22.77 0.05,-23.19 1.33,-23.60 2.44,-23.68 3.56,-23.76 4.95,-23.79 6.33,-23.82 7.86,-23.83 9.38,-23.84 10.50,-23.83 11.63,-23.82 12.67,-23.53 13.71,-23.24 15.01,-22.93 16.30,-22.62 17.56,-21.79 18.82,-20.96 20.29,-19.75 21.76,-18.53 22.50,-16.76 23.24,-14.99 24.10,-13.14 24.96,-11.30 25.54,-10.16 26.12,-9.03 26.45,-7.99 26.79,-6.95 27.03,-5.69 27.28,-4.42 27.35,-3.21 27.42,-1.99 27.63,-0.58 27.84,0.82 27.91,1.94 27.99,3.06 28.00,4.35 28.02,5.63 28.03,6.69 28.05,7.76 27.78,9.50 27.50,11.23 27.11,12.25 26.72,13.27 25.79,14.48 24.85,15.69 24.24,16.63 23.63,17.56 22.12,18.53 20.61,19.50 19.72,20.31 18.82,21.12 17.36,21.93 15.90,22.74 14.94,23.36 13.98,23.97 12.66,24.59 11.34,25.21 10.05,25.91 8.76,26.61 7.68,27.18 6.60,27.75 5.47,28.36 4.34,28.96 3.04,29.77 1.73,30.58 -0.17,31.28 -2.07,31.97 -3.07,33.06 -4.06,34.15 -4.98,35.20 -5.89,36.24 -6.22,37.30 -6.56,38.35 -6.78,39.46 -7.00,40.57 -8.90,42.36 -10.81,44.14 -12.78,43.11 -14.74,42.09 -15.55,40.64 -16.36,39.19 -17.02,38.11 -17.67,37.03 -18.07,35.92 -18.47,34.81 -19.23,33.74 -19.99,32.67 -20.59,31.59 -21.20,30.51 -22.11,29.32 -23.03,28.13 -23.94,27.40 -24.85,26.68 -26.16,25.79 -27.48,24.90 -28.52,23.89 -29.57,22.88 -30.78,21.89 -31.99,20.91 -33.40,19.87 -34.82,18.83 -36.39,17.80 -37.96,16.78 -39.40,15.82 -40.84,14.87 -41.98,14.20 -43.11,13.52 -44.15,13.27 -45.19,13.01 -46.26,12.33 -47.34,11.65 -48.39,11.03 -49.43,10.41 -50.26,9.73 -51.09,9.04 -52.38,8.00 -53.67,6.96 -54.58,5.74 -55.50,4.52 -55.95,3.35 -56.39,2.18 -56.60,0.93 -56.81,-0.30 -56.90,-1.42 -56.99,-2.53 -57.03,-4.31 -57.06,-6.09 -57.08,-7.25 -57.10,-8.41 -56.88,-10.17 -56.66,-11.92 -56.34,-13.11 -56.01,-14.30 -55.36,-15.50 -54.71,-16.69 -53.92,-17.44 -53.13,-18.18 -51.64,-19.50 -50.14,-20.82 -49.11,-21.21 -48.08,-21.60 -46.83,-21.99 -45.58,-22.39 -43.89,-22.98 -42.21,-23.58 -40.49,-23.90 -38.78,-24.22 -37.38,-24.30 -35.98,-24.38 -34.63,-24.39 -33.27,-24.40 -32.03,-24.41 -30.79,-24.41 -28.74,-24.18 -26.68,-23.96 -25.11,-23.34 -23.55,-22.73 -21.93,-22.06 -20.31,-21.39 -19.29,-20.93 -18.27,-20.46 -16.76,-19.27 -15.26,-18.08 -14.21,-17.27 -13.15,-16.45 -12.35,-15.34 -11.56,-14.23 -10.40,-12.87 -9.24,-11.51 -8.57,-10.28 -7.90,-9.04 -7.49,-7.96 -7.09,-6.88 -6.84,-5.21 -6.59,-3.53 -6.57,-2.16 -6.55,-0.79 -6.58,-0.77 -6.61,-0.75 -6.66,-0.33 -6.71,0.08 -6.86,0.48 -7.00,0.87 -7.24,1.22 -7.48,1.57 -7.79,1.85 -8.11,2.13 -8.48,2.33 -8.85,2.53 -9.26,2.63 -9.67,2.73 -10.09,2.73 -10.51,2.73 -10.92,2.64 -11.33,2.54 -11.71,2.34 -12.08,2.15 -12.40,1.87 -12.72,1.59 -12.96,1.25 -13.20,0.90 -13.35,0.51 -13.50,0.11 -13.55,-0.29 -13.61,-0.71 -13.51,-1.28 -13.42,-1.85 -13.16,-2.35 -12.89,-2.85 -12.48,-3.24 -12.07,-3.63 -11.56,-3.86 -11.04,-4.10 -10.48,-4.16 -9.92,-4.22 -9.37,-4.10 -8.81,-3.98 -8.33,-3.69 -7.84,-3.39 -7.48,-2.96 -7.11,-2.53 -6.90,-2.00 -6.69,-1.48 -6.66,-0.91 -6.63,-0.35 -6.78,0.19 -6.94,0.73 -7.25,1.20 -7.57,1.67 -8.02,2.01 -8.47,2.35 -9.01,2.53 -9.55,2.71 -10.11,2.71 -10.68,2.71 -11.21,2.53 -11.75,2.35 -12.20,2.01 -12.65,1.66 -12.97,1.20 -13.28,0.73 -13.44,0.18 -13.59,-0.35 -13.56,-0.92 -13.52,-1.48 -13.31,-2.01 -13.10,-2.53 -12.74,-2.97 -12.37,-3.40 -11.89,-3.69 -11.40,-3.98 -10.85,-4.10 -10.30,-4.22 -9.73,-4.16 -9.17,-4.10 -8.66,-3.86 -8.14,-3.62 -7.73,-3.23 -7.32,-2.84 -7.06,-2.34 -6.79,-1.84 -6.70,-1.28 -6.61,-0.73 -6.61,-0.74 -6.61,-0.75 -6.66,-0.33 -6.71,0.08 -6.86,0.48 -7.00,0.87 -7.24,1.22 -7.48,1.57 -7.79,1.85 -8.11,2.13 -8.48,2.33 -8.85,2.53 -9.26,2.63 -9.67,2.73 -10.09,2.73 -10.51,2.73 -10.92,2.64 -11.33,2.54 -11.71,2.34 -12.08,2.15 -12.40,1.87 -12.72,1.59 -12.96,1.25 -13.20,0.90 -13.35,0.51 -13.50,0.11 -13.55,-0.29 -13.61,-0.71 -13.64,-0.10 -13.68,0.51 -13.69,-0.71 -13.70,-1.94 -13.73,-3.08 -13.75,-4.23 -14.18,-5.35 -14.60,-6.48 -15.33,-7.80 -16.06,-9.11 -17.14,-10.57 -18.23,-12.03 -19.35,-12.92 -20.47,-13.80 -22.03,-14.50 -23.60,-15.21 -24.83,-15.71 -26.05,-16.21 -27.24,-16.68 -28.42,-17.15 -29.61,-17.28 -30.79,-17.40 -32.02,-17.41 -33.24,-17.41 -34.51,-17.40 -35.77,-17.39 -37.32,-17.28 -38.86,-17.18 -40.02,-16.93 -41.17,-16.68 -42.87,-16.16 -44.57,-15.64 -46.00,-14.79 -47.43,-13.94 -48.29,-13.20 -49.15,-12.45 -49.68,-11.13 -50.21,-9.81 -50.23,-8.67 -50.25,-7.53 -50.23,-6.15 -50.21,-4.78 -50.11,-3.23 -50.01,-1.69 -49.37,0.26 -48.73,2.23 -47.69,3.09 -46.64,3.96 -45.71,4.64 -44.78,5.32 -43.89,6.00 -43.01,6.67 -41.41,7.19 -39.82,7.72 -38.44,8.55 -37.07,9.39 -35.64,10.31 -34.21,11.23 -32.71,12.16 -31.21,13.09 -29.24,14.42 -27.26,15.75 -26.14,16.62 -25.03,17.49 -23.57,18.73 -22.12,19.97 -20.72,20.88 -19.32,21.79 -18.03,23.17 -16.74,24.55 -16.00,25.57 -15.27,26.58 -14.48,27.96 -13.69,29.34 -12.91,30.34 -12.13,31.33 -11.51,32.77 -10.88,34.20 -10.65,35.63 -10.43,37.05 -12.00,37.19 -13.57,37.32 -13.15,35.57 -12.74,33.81 -11.70,32.31 -10.66,30.81 -9.83,29.88 -9.01,28.95 -8.19,28.06 -7.38,27.17 -6.36,26.49 -5.35,25.81 -4.19,25.46 -3.03,25.10 -1.94,24.43 -0.85,23.77 0.56,22.87 1.98,21.96 3.10,21.34 4.22,20.71 5.34,20.11 6.46,19.50 7.54,19.03 8.62,18.55 9.77,17.91 10.93,17.27 12.49,16.41 14.04,15.56 15.23,14.61 16.42,13.66 17.64,12.76 18.87,11.87 19.62,10.97 20.37,10.07 20.56,8.59 20.75,7.11 20.76,5.88 20.76,4.65 20.75,3.37 20.75,2.09 20.49,0.91 20.24,-0.25 20.24,-2.06 20.24,-3.86 19.72,-5.26 19.20,-6.65 18.65,-8.13 18.11,-9.60 17.61,-11.04 17.10,-12.48 16.53,-13.53 15.97,-14.58 14.66,-15.42 13.36,-16.25 11.37,-16.50 9.38,-16.74 7.86,-16.75 6.34,-16.75 5.26,-16.77 4.19,-16.79 2.97,-16.74 1.74,-16.69 0.39,-16.26 -0.95,-15.83 -1.80,-14.64 -2.65,-13.45 -3.26,-12.48 -3.86,-11.50 -4.28,-10.40 -4.70,-9.31 -5.49,-7.75 -6.28,-6.19 -6.59,-5.16 -6.91,-4.13 -7.24,-2.88 -7.57,-1.63 -7.68,-1.34 -7.80,-1.05 -7.98,-0.79 -8.17,-0.53 -8.41,-0.32 -8.65,-0.12 -8.93,0.02 -9.21,0.16 -9.52,0.23 -9.83,0.30 -10.14,0.30 -10.46,0.30 -10.77,0.22 -11.07,0.14 -11.35,-0.01 -11.63,-0.16 -11.86,-0.37 -12.10,-0.58 -12.27,-0.84 -12.45,-1.11 -12.56,-1.40 -12.66,-1.70 -12.70,-2.02 -12.73,-2.33 -12.69,-2.64 -12.65,-2.96 -12.65,-2.96 L -12.65,-2.96 Z"
                    ></path>
                </g>

                <g transform="translate(10 10) rotate(0 109.87031244381166 32.59614205173483)">
                    <text
                        x="-15"
                        y="48"
                        fontFamily={`"Caveat", "Montserrat Alternates", "sans-serif"`}
                        fontSize="70px"
                        fontWeight={'900'}
                        fill="#d653ed"
                        textAnchor="start"
                        style={{ whiteSpace: 'pre' }}
                        direction="ltr"
                        letterSpacing={2}
                        dominantBaseline="alphabetic"
                    >
                        Ем  нуил
                    </text>
                </g>
                <g
                    transform="translate(128.74974959937288 65.80884165131056) rotate(0 -26.868511679810183 -15.113537819893281)"
                    stroke="none"
                >
                    <path
                        fill="#343a40"
                        d="M -10.20,1.10 Q -10.20,1.10 -11.84,-1.35 -13.48,-3.81 -15.62,-7.32 -17.76,-10.83 -19.17,-13.30 -20.59,-15.77 -21.93,-17.73 -23.28,-19.70 -24.50,-21.34 -25.73,-22.98 -27.11,-24.42 -28.49,-25.87 -29.91,-26.68 -31.33,-27.49 -32.39,-27.73 -33.44,-27.96 -35.02,-27.70 -36.60,-27.44 -37.54,-26.78 -38.48,-26.12 -39.41,-25.36 -40.33,-24.60 -40.93,-23.66 -41.54,-22.73 -42.03,-21.61 -42.53,-20.49 -43.03,-19.42 -43.53,-18.34 -43.52,-16.96 -43.51,-15.57 -41.78,-14.99 -40.05,-14.41 -38.67,-14.23 -37.29,-14.06 -35.35,-13.86 -33.42,-13.65 -30.82,-13.65 -28.22,-13.64 -25.83,-14.21 -23.43,-14.77 -20.56,-15.78 -17.68,-16.78 -15.39,-17.67 -13.11,-18.56 -10.76,-19.77 -8.41,-20.99 -8.14,-21.06 -7.86,-21.12 -7.58,-21.10 -7.30,-21.08 -7.05,-20.97 -6.79,-20.86 -6.58,-20.67 -6.37,-20.48 -6.23,-20.24 -6.09,-20.00 -6.04,-19.72 -5.98,-19.44 -6.02,-19.17 -6.06,-18.89 -6.18,-18.63 -6.31,-18.38 -6.50,-18.18 -6.70,-17.98 -6.95,-17.86 -7.21,-17.73 -7.48,-17.69 -7.76,-17.66 -8.04,-17.71 -8.31,-17.76 -8.56,-17.90 -8.80,-18.04 -8.99,-18.24 -9.18,-18.45 -9.29,-18.71 -9.40,-18.97 -9.43,-19.25 -9.45,-19.53 -9.38,-19.80 -9.32,-20.08 -9.17,-20.31 -9.02,-20.55 -8.80,-20.73 -8.58,-20.90 -8.31,-21.00 -8.05,-21.10 -7.77,-21.11 -7.49,-21.12 -7.22,-21.03 -6.95,-20.95 -6.72,-20.79 -6.49,-20.62 -6.33,-20.40 -6.16,-20.17 -6.08,-19.90 -6.00,-19.63 -6.01,-19.35 -6.01,-19.07 -6.11,-18.81 -6.20,-18.54 -6.38,-18.32 -6.56,-18.10 -6.79,-17.95 -7.03,-17.80 -7.03,-17.80 -7.03,-17.80 -9.45,-16.68 -11.87,-15.57 -14.17,-14.55 -16.47,-13.54 -19.46,-12.34 -22.45,-11.14 -25.22,-10.30 -28.00,-9.47 -30.79,-9.20 -33.58,-8.93 -35.68,-8.86 -37.79,-8.79 -39.76,-8.94 -41.73,-9.08 -43.16,-9.57 -44.58,-10.05 -45.88,-10.95 -47.18,-11.84 -47.97,-13.24 -48.76,-14.64 -48.83,-15.81 -48.90,-16.98 -48.37,-18.75 -47.83,-20.52 -47.28,-21.51 -46.73,-22.50 -45.98,-23.97 -45.24,-25.43 -44.16,-26.78 -43.08,-28.14 -41.90,-28.98 -40.71,-29.82 -39.15,-30.66 -37.59,-31.50 -36.12,-31.69 -34.65,-31.88 -33.48,-31.58 -32.30,-31.27 -31.00,-30.69 -29.71,-30.11 -28.07,-28.99 -26.43,-27.88 -24.91,-26.31 -23.39,-24.74 -22.12,-23.07 -20.85,-21.40 -19.39,-19.38 -17.93,-17.35 -16.46,-14.96 -14.99,-12.57 -12.80,-9.20 -10.61,-5.83 -8.84,-3.47 -7.07,-1.10 -6.96,-0.90 -6.86,-0.69 -6.80,-0.47 -6.74,-0.25 -6.74,-0.01 -6.74,0.21 -6.79,0.43 -6.84,0.66 -6.95,0.86 -7.05,1.07 -7.20,1.24 -7.35,1.42 -7.54,1.55 -7.73,1.68 -7.95,1.77 -8.16,1.85 -8.39,1.88 -8.62,1.91 -8.85,1.88 -9.08,1.86 -9.29,1.78 -9.51,1.70 -9.70,1.57 -9.89,1.44 -10.05,1.27 -10.20,1.10 -10.20,1.10 L -10.20,1.10 Z"
                    ></path>
                </g>
            </svg> */
}
