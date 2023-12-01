import styled from 'styled-components'
const Logo = () => {
  return (
    <Wrapper>
      <h2 className="logo">
        <span className="color">H</span>amoria
      </h2>
    </Wrapper>
  )
}
export default Logo

const Wrapper = styled.div`
  span {
    color: var(--primary-500);
  }
`
