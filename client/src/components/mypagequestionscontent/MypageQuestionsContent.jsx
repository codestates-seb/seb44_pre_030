import styled from 'styled-components';

const MypageQuestionsContent = () => {
    return (
        <Container>
            <AllTitleBox>
                <TitleBox>
                    <QuantityBox>0</QuantityBox>
                    <ExpainText>Questions</ExpainText>
                </TitleBox>
                <BtnBox>
                    <LeftBtn>Score</LeftBtn>
                    <MiddleBtn1>Activity</MiddleBtn1>
                    <MiddleBtn2>Newest</MiddleBtn2>
                    <RightBtn>Views</RightBtn>
                </BtnBox>
            </AllTitleBox>
            <ShowBox></ShowBox>
            <DeleteBox><DeleteText>Deleted questions</DeleteText></DeleteBox>
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
    height: 97px;
    border: solid 1px #a5a5a5;
    background-color: #ffffff;
    border-radius: 5px 5px 0px 0px;
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

const MiddleBtn1 = styled.button`
    width: 45px;
    height: 30px;
    color : #6e6e6e;
    font-size: 11px;
    border-top: solid 1px #a0a0a0;
    border-bottom: solid 1px #a0a0a0;
    border-left: none;
    border-right: solid 1px #a0a0a0;
    background-color: white;
`
const MiddleBtn2 = styled.button`
    width: 45px;
    height: 30px;
    color : #6e6e6e;
    font-size: 11px;
    border-top: solid 1px #a0a0a0;
    border-bottom: solid 1px #a0a0a0;
    border-right: none;
    border-left: none;
    background-color: white;
`

const DeleteBox = styled.div`
    width: 60vw;
    height: 45px;
    border: solid 1px #a5a5a5;
    border-top: none;
    background-color: #ffffff;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    align-items: center;
`

const DeleteText = styled.div`
    display: flex;
    align-items: center;
    color: #3a84c4;
    font-size: 14px;
    font-weight: 500;
    margin-left: 17px;
    cursor: pointer;
    &:hover{
        color: #5da8ea;
    }
`
export default MypageQuestionsContent;