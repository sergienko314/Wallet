import {Wrapper} from './Conteiner.styled';

const Conteiner = ({children}) => {
    return ( 
        <Wrapper>
            {children}
       </Wrapper>
     );
}
 
export default Conteiner ;