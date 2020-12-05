import palette from "src/utils/palette";
import styled from "styled-components";

export const StyledDialog = styled.div`
  width: 600px;

  .contents {
    .bottom {
      display: flex;
      justify-content: space-between;
    }

    .step2subtitle {
      color: gray;
      font-size: 0.9rem;
      margin: 0;
    }
  }
`;

export const StyledQuestion = styled.div`
  padding: 24px;

  .slider {
    margin: 40px 20px;
  }

  .step1 {
    p {
      margin: 0;
      text-align: right;
    }

    span:nth-child(1) {
      color: ${palette.primary};
      font-weight: normal;
      font-size: 18px;
    }

    span:nth-child(2) {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .step2 {
    p {
      margin: 0;
      text-align: right;
    }

    span:nth-child(1) {
      color: ${palette.primary};
      font-weight: normal;
      font-size: 18px;
    }
  }

  .score {
    color: ${palette.primary};
  }

  .hidden {
    visibility: hidden;
  }

  .description {
    width: 100%;
  }
`;

export const StyledReviewList = styled.div`
  .root {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .top {
    display: flex;
    flex-flow: column;
  }

  .middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rating {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-right: 1rem;
  }

  .desc {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 100%;
  }

  .desc-text {
    margin: 0.5rem 0;
    height: 112px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .rating-detail {
    display: flex;
    align-items: center;
  }

  .comment {
    span {
      margin-left: 4px;
    }
  }
`;

export const StyledReviewComment = styled.div`
  padding: 10px 20px;

  p {
    margin: 5px 0;
  }

  .head {
    display: flex;
    justify-content: space-between;

    .head-left {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      .profile {
        width: 30px;
        height: 30px;
      }

      .name {
        margin-left: 8px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .content {
    border: 0.5px solid ${palette.gray};
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 16px;
  }

  .description {
    width: 100%;
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;
