import styled from '@emotion/styled'
import OpenColor from 'open-color'

const StyledWrapper = styled.div`
  height: fit-content;
  > .header {
    background-color: ${OpenColor.violet[9]};
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    gap: 10px;
    .description {
      margin-top: 10px;
      font-size: 1.4rem;
    }
    .buttons {
      display: flex;
      margin-top: 40px;
      margin-bottom: 20px;
      gap: 20px;
      button {
        width: 180px;
        color: ${OpenColor.gray[8]};
      }
    }
  }
  main {
    display: flex;
    justify-content: center;
    padding: 80px 0;
    .window {
      margin: 0 10px;
      border-radius: 12px;
      background-color: ${OpenColor.gray[9]};
      border: 1px solid ${OpenColor.gray[8]};
      width: 100%;
      max-width: 1020px;
      overflow: hidden;
      > .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background-color: ${OpenColor.gray[8]};
        .lt {
          display: flex;
          gap: 14px;
          .btn {
            border-radius: 50%;
            width: 16px;
            height: 16px;
            &[data-type='close'] {
              background-color: ${OpenColor.red[7]};
            }
            &[data-type='minimize'] {
              background-color: ${OpenColor.yellow[7]};
            }
            &[data-type='maximize'] {
              background-color: ${OpenColor.green[7]};
            }
          }
        }
        .rt {
        }
      }
      > .title {
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
        padding: 50px 0 30px;
        gap: 15px;
        h2 {
          font-weight: 500;
          color: ${OpenColor.gray[1]};
        }
        .description {
          color: ${OpenColor.gray[5]};
          font-weight: 200;
        }
      }
      .features {
        display: flex;
        justify-content: center;
        gap: 80px;
        padding: 70px 0;
        .feature {
          color: ${OpenColor.gray[4]};
          width: 200px;
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 10px;
          .svg-wrapper {
            background-color: ${OpenColor.gray[4]};
            padding: 15px;
            border-radius: 12px;
            width: 200px;
            height: 140px;
            svg {
              width: 100%;
              height: 100%;
            }
          }
          .title {
            font-weight: 300;
            color: ${OpenColor.gray[1]};
            margin-top: 10px;
          }
          .description {
            color: ${OpenColor.gray[5]};
            font-weight: 200;
          }
        }
      }
    }
  }
`

export default StyledWrapper
