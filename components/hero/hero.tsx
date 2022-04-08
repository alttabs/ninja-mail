import {
	Container,
	ImageContent,
	TextContent,
	Title,
	Text,
	ImageBackground,
	Greenbutton,
	WhiteButton,
} from './style';
import img from '../../public/photo hero.png';

export default function Hero() {
	return (
		<>
			<Container>
				<TextContent>
					<Title>Create Stunning Email Campaigns</Title>
					<Text>
						Create and launch email campaigns that captivate your customers in
						just a few clicks.
					</Text>
					<Greenbutton>Try Now</Greenbutton>
					<WhiteButton>Get A Demo</WhiteButton>
				</TextContent>
				<ImageContent>
					<ImageBackground
						src={img}
						alt="Female worker using notebook"
					></ImageBackground>
				</ImageContent>
			</Container>
		</>
	);
}
