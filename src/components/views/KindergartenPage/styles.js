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

export const StyeldQuestion = styled.div`
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
