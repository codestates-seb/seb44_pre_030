import styled from 'styled-components';

const MypageTagsContent = () => {
    return (
        <Container>
            <AllTitleBox>
                <TitleBox>
                    <QuantityBox>0</QuantityBox>
                    <ExpainText>Tags</ExpainText>
                </TitleBox>
                <BtnBox>
                    <LeftBtn>Score</LeftBtn>
                    <RightBtn>Name</RightBtn>
                </BtnBox>
            </AllTitleBox>
            <ShowBox></ShowBox>
        </Container>
    );
};

const Container = styled.div`
    width: 80vw;
    height: 200px;
`
const AllTitleBox= styled.div`
    display: flex;
    justify-content: space-between;
    width: 60vw;
    height: 30px;
`

const ShowBox = styled.div`
    width: 60vw;
    height: 120px;
    border: solid 1px #a5a5a5;
    background-color: #ffffff;
    border-radius: 5px 5px 5px 5px;
    margin-top: 10px;
`

const ExpainText= styled.div`
    height: 24px;
    font-size: 19px;
    color: #000000;
`

const TitleBox = styled.div`
    display: flex;
    height: 30px;
    font-size: 22px;
    font-weight: 500;
`

const QuantityBox= styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-right: 5px;
`
const BtnBox = styled.div`
    
`
const LeftBtn = styled.button`
    width: 45px;
    height: 30px;
    color : #343434;
    font-size: 11px;
    border: solid 1px #a0a0a0;
    border-radius: 3px 0px 0px 3px;
    border-right: none;
    background-color: #d6d6d6;
`
const RightBtn = styled.button`
    width: 45px;
    height: 30px;
    color : #6e6e6e;
    font-size: 11px;
    border: solid 1px #a0a0a0;
    border-radius: 0px 3px 3px 0px;
    background-color: white;
`

export default MypageTagsContent;