import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.gray_600};
    align-items: center;
    padding: 40px;    
`;