import Link from 'next/link';
import Logo from '../logo/index';
import { StyledText, FlexDiv } from '../logo/styles';
import { navData } from './data';
import { Button, Container } from './styles';

export default function Nav() {
	return (
		<>
			<Container>
				<Logo></Logo>
				<StyledText>NinjaMail</StyledText>
			</Container>
			<FlexDiv>
				{navData.map((menuIten, i) => (
					<Link href={menuIten.path} passHref key={i}>
						{menuIten.label}
					</Link>
				))}
				<Button>SIGN UP</Button>
			</FlexDiv>
		</>
	);
}
