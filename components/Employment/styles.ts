import styled from "@emotion/styled"

export const Container = styled.div`
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(360px, 35%) minmax(180px, 15%) minmax(500px, 50%); 
    grid-column-gap: 50px;
    padding: 70px 0px 0px 60px;
`;
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 16px;
`;