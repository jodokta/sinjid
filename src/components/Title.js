import styled from 'styled-components'

const StyledTitle = styled.div`
    width:100vw;
    height:100vh;
    background-color: black;
    position:relative;
    .menu{
        display:flex;
        width:fit-content;
        height:auto;
        flex-direction: column;
        gap: 6px;
        position:absolute;
        bottom: 0;
        left:0;
        padding-left: 10px;
        padding-bottom: 50px;
        }
`
const StyledButton = styled.div`
    width: 200px;
    height: 50px;
    border: 1px solid #457385;
    border-radius: 4px;
    background-color: #333333;
    position: relative;
    /* background-image: linear-gradient(#fff, #fff), 
    linear-gradient(to right, red 0%,  orange 100%);
    background-origin: border-box;
    background-clip: content-box, border-box; //bg-img에서 정한 첫번째 gradient는 컨텐트 박스에, 두 번째는 보더 박스에 넣음. */
    &::before{
        content: "${props => props.content}";
        font-weight: 700;
        position:absolute;
        top:5px;
        left:5px;
        right:5px;
        bottom:5px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(rgb(55, 89, 99) 0%, rgb(110, 161, 178) 20%, rgb(55, 89, 99) 100%);
    }
    &::after{
        content: "${props => props.content}";
        opacity:0;
        font-weight: 700;
        position:absolute;
        top:5px;
        left:5px;
        right:5px;
        bottom:5px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(rgb(79, 213, 255) 0%, rgb(114, 253, 255) 20%, rgb(55, 176, 255) 100%);
    }

    &:nth-child(n+3){
        width:150px;
        font-size: 14px;
    }

    &:hover{
        background-color:#86C2FF;
        transition:0.5s; 
    }
    &:hover::after{
        animation: opacitychange 2s both;
        
    }

    @keyframes opacitychange {
        0%{
            opacity: 0%;
        }
        100%{
            opacity: 100%;
        }
    }
`


const Title = () => {
    return(
        <StyledTitle>
            <feature><img></img></feature>
            <a></a>
            <div className='menu'>
                <StyledButton content='Start Game'/>
                <StyledButton content='Load Game'/>
                <StyledButton content='Options'/>
                <StyledButton content='View Intro'/>
            </div>
            <div></div>
        </StyledTitle>
    )
}

export default Title