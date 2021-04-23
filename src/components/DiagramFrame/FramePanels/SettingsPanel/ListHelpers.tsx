/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

 import { OVERRIDE_KEY_SUBTLE } from "../../../../utils/constants"
 import styled from "styled-components"
 import {
   Icon,
 } from "@looker/components"

export const ExploreListWrapper = styled.ul`
margin-top: ${(props) => props.theme.sizes.xxxsmall};
overflow: auto;
height: 70vh;
`

export const ExploreListitem = styled.li`
border-bottom: solid 1px ${(props) => props.theme.colors.ui2};
`

export const ExploreButton = styled.button`
all: inherit;
font-size: ${(props) => props.theme.fontSizes.small};
color: ${(props) => props.theme.colors.text5};
cursor: pointer;
padding: ${(props) => props.theme.sizes.xxxsmall};
width: 100%;
border: none;


${Icon} {
  transform: translateX(0px);
  transition: all 500ms ease-out;
} 

&:hover {
  background-color: ${OVERRIDE_KEY_SUBTLE};
  
  ${Icon} {
    transform: translateX(4px);
  }

}

& > * {
  pointer-events: none;
}
`