import styled from 'styled-components';
import logo from '../../assets/footer/logo3.svg';

const MypageProfile = () => {
    return (
        <AllContainer>
        <Container1>
            <TitleBox>Stats</TitleBox>
            <StatsBox>
                <div>
                    <QuantityBox>1</QuantityBox>
                    <ExpainText>reputation</ExpainText>
                    <QuantityBox>2</QuantityBox>
                    <ExpainText>answers</ExpainText>
                    </div>
                    <div>
                    <QuantityBox>3</QuantityBox>
                    <ExpainText>reached</ExpainText>
                    <QuantityBox>4</QuantityBox>
                    <ExpainText>questions</ExpainText>
                    </div>
            </StatsBox>
            <TitleBox>Communities</TitleBox>
            <CommunitiesBOX><img src ={logo} width={10} height={10}/>Stack Overflow</CommunitiesBOX>
        </Container1>
        <Container2>
            <TitleBox>About</TitleBox>
            <ShowBox></ShowBox>
            <TitleBox>badges</TitleBox>
            <ShowBox></ShowBox>
        </Container2>
        </AllContainer>
    );
};

const AllContainer = styled.div`
    display: flex;
    width: 1000px;
    height: 600px;
`

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 400px;
    margin-left: 25px;
`
const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 400px;
    margin-left: 25px;
`
const ShowBox = styled.div`
    width: 54vw;
    height: 97px;
    border: solid 1px #a5a5a5;
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-bottom: 30px;
`

const StatsBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 245px;
    height: 134px;
    border: solid 1px #a5a5a5;
    border-radius: 5px;
    margin-bottom: 30px;
    padding-right: 30px;
    padding-left: 15px;
    padding-top: 15px;
`

const TitleBox = styled.div`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
`

const QuantityBox= styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
`
const ExpainText= styled.div`
    font-size: 14px;
    margin-bottom: 10px;
    color: #7b7b7b;
`

const CommunitiesBOX = styled.div`
    width: 245px;
    height: 60px;
    border: solid 1px #a5a5a5;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 19px;
    color: #0074d9;
    cursor: pointer;
    &:hover {
        color: #4d93d1;
    }
`



export default MypageProfile;