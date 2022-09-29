import styled from 'styled-components'

const Box = styled.div`
width: 100px;
height: 100px;
background-color: black;
`

const Retangulo = styled.section`
width: 500px;
height: 300px;
background-color: blue;
`

const Link = styled.a`
color:white;
`

function Header() {
    return (
      <>
        <Retangulo>
          <Box>
            <Link href="https://www.globo.com.br">Clique Aqui!</Link>
          </Box>
        </Retangulo>
      </>
    )
  }
  
  export default Header
  