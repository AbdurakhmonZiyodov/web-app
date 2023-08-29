import { COLORS } from "constants/colors";
import { styled } from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 1px 17px 0px rgba(70, 70, 70, 0.12);

  .container {
    display: flex;
  }

  .header-logo {
    display: flex;
    flex: 1;
    a {
      color: ${COLORS.pink};
      font-size: 37px;
      font-weight: 700;
      line-height: 47.43px;
      text-transform: uppercase;
    }
  }

  .header-search {
    display: flex;
    justify-content: center;
    flex: 5;
    .header-search__input {
      display: flex;
      flex: 0.9;
      background: ${COLORS.light};
      padding: 8px 10px;
      border-radius: 15px;
      position: relative;
      input {
        font-size: 17px;
        line-height: 26px;
        font-weight: 400;
        width: 80%;
        border: none;
        outline: none;
        background: none;
      }

      .icon {
        font-size: 23px;
        position: absolute;
        right: 20px;
        color: ${COLORS.black3};
        margin-top: 2px;
      }
    }
  }

  .header-rightbar {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu-list {
      display: flex;
      align-items: center;
      flex: 0.6;
      position: relative;

      button {
        border: none;
        outline: none;
        display: flex;
        flex: 1;
        background: none;
        cursor: pointer;
        justify-content: center;
      }

      .animate-line {
        width: 25%;
        border-bottom: 5px solid ${COLORS.pink};
        position: absolute;
        bottom: -10px;
        border-radius: 20px;
        left: 0;
      }
    }

    .addition-bar {
      display: flex;
      align-items: center;
      flex: 0.3;

      button {
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
        position: relative;
      }

      .notification-btn {
        &::after {
          position: absolute;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: ${COLORS.pink};
          left: 12px;
          top: -6px;
        }
      }

      .user-dropdown {
        display: flex;
        align-items: center;
        .user-image {
          width: 41px;
          height: 41px;
          border-radius: 50%;
          margin-left: 10px;
          object-fit: cover;
        }

        .icon {
          width: 30px;
          font-size: 20px;
        }
      }
    }
  }
`;
