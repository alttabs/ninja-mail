import { Container, Div } from './styes';
type BrandsLogo = {
	image: string;
};
export default function Brands() {
	return (
		<>
			<Container>
				<h1>All the best brands already use us. </h1>
			</Container>
			<Container>
				<BrandsLogos image="/Brand1.png"></BrandsLogos>
				<BrandsLogos image="/Brand2.png"></BrandsLogos>
				<BrandsLogos image="/Brand3.png"></BrandsLogos>
				<BrandsLogos image="/Brand4.png"></BrandsLogos>
				<BrandsLogos image="/Brand5.png"></BrandsLogos>
			</Container>
		</>
	);
}
export function BrandsLogos({ image }: BrandsLogo) {
	return <Div color={image}></Div>;
}
