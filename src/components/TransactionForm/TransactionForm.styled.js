import styled from 'styled-components'

export const Form = styled.form`
padding: 20px;
background-color : lightgray;
display: grid;
grid-template-rows: repeat(6,1fr);
grid-template-columns: 1fr;
grid-gap: 8px;
position: relative;
`

export const Label = styled.label`
padding: 4px;
border-bottom: 1px solid darkgrey;
`

export const InputTitle = styled.p`
color: #212121;
margin-bottom: 8px;
font-size: 12px;
`

export const Input = styled.input`
border-radius: 4px;
border: none;
font-size: 22px;
background-color: transparent;
color: #212121;
`

export const Submit = styled.button`
position: absolute;
/* top: 0; */
right: 12px;
bottom: calc( 100% + 10px );
width: 50px;
height : 50px;
padding: 0;
border: none;
background-color: transparent;
:active{transform: scale(0.95)} 
& svg {
    width: 50px;
    height : 50px;
}
`