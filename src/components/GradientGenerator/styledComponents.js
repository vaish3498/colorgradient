// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 550px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
`

export const DirectionDescription = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`

export const ColorPickerDescription = styled.p`
  color: #ededed;
  font-family: Roboto;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
color:#1e293b;
font-family:Roboto;
font-size:14px;
font-weight:600;
background-color:#014f7b;
min-width:25px;
border-radius:6px;
border:none;
padding-left:24px;
padding-top:12px;
padding-bottom:24px;
padding-right:12px;
margin:15px;
outline:none;
corner-present
`
