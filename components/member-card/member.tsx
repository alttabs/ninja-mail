import { Container, Name, Text } from './styles';
type CardImageProps = {
	image: string;
	name: string;
	year: string;
};

export default function MemberCard({ image, name, year }: CardImageProps) {
	return (
		<Container color={image}>
			<Name>{name}</Name>
			<Text>Since march {year}</Text>
		</Container>
	);
}
