import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #0b0c1e, #3c2940);
  color: #fff;
  font-family: Arial, sans-serif;
`

export const Paragraph = styled.p`
  color: white;
  font-size: 15px;
  font-family:"Roboto";
`

export const ImageSection = styled.img`
  height: 100px;
  width: 100px;
`

export const Lockbutton = styled.button`
  padding: 20px 25px;
  border-radius: 10px;
  font-size:25px;
  border: none;
  color: white;
  background-color: #06b6d4;
  outline: none;
  offset:none;
`
