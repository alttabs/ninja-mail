import mailLogo from '../../public/mail-1.png';
import { StyledLogo, StyledText } from './styles';

export default function Logo() {
	return (<StyledLogo src={mailLogo} alt='Mail Logo Image'></StyledLogo>);
}
