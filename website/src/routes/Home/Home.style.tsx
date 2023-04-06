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
      .content {
        padding: 50px 0 70px;
        > .title {
          display: flex;
          flex-direction: column;
          color: white;
          align-items: center;
          padding-bottom: 30px;
          gap: 15px;
          h2 {
            font-weight: 500;
            color: ${OpenColor.gray[1]};
          }
          .description {
            color: ${OpenColor.gray[5]};
            font-weight: 200;
            text-align: center;
          }
        }
        .cursors {
          display: flex;
          justify-content: center;
          gap: 80px;
          padding: 50px 0 60px;
          .cursor {
            color: ${OpenColor.gray[4]};
            width: 100px;
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 10px;
            .cursor-wrapper {
              background-color: ${OpenColor.gray[7]};
              padding: 15px;
              border-radius: 12px;
              width: 100px;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              &.phinger {
                > * {
                  margin-right: 12px;
                  margin-bottom: 20px;
                }
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
        .options {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding-top: 40px;
          color: ${OpenColor.gray[2]};
          .option {
            display: flex;
            align-items: center;
            .label {
              width: 70px;
            }
            input {
              width: 300px;
            }
            .value {
              text-align: center;
              width: 70px;
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
`

export default StyledWrapper
