import { Container, Imageper, TextDiv, Text } from './style';
import Link from 'next/link';
type CardProps = {
	image: string;
	text: string;
};
export default function Card({ image, text }: CardProps) {
	return (
		<Container>
			<Imageper src={image} width="320px" height="220px"></Imageper>
			<TextDiv>
				<Text>{text}</Text>
				<Link href="/" passHref>
					Learn More
				</Link>
			</TextDiv>
		</Container>
	);
}
