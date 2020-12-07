import palette from "src/utils/palette";
import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 80vh;

  .tabs {
    width: 800px;
    margin-bottom: 20px;
  }
`;

export const StyledManagementList = styled.div`
  width: 800px;
`;

export const StyledPaper = styled(Paper)`
  width: 500px;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

  h3 {
    margin: 10px 0;
  }
`;

export const StyledDialog = styled.div`
  width: 500px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    margin: 20px 0 10px;
    h2 {
      margin: 0;
      margin-right: 5px;
    }
  }

  .content {
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
    overflow-y: scroll;

    .paper {
      width: 450px;
      height: 70px;
      padding: 20px 10px;
      margin: 10px;

      background-color: #f1f3f7;
    }
  }
`;
