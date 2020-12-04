import React, { useState } from "react";
import { StyledReviewComment } from "./styles";
import { Divider, TextField, Button } from "@material-ui/core";

const ReviewComment = ({
  userid,
  comment,
  reviewWriter,
  handleWriteReviewComment,
}) => {
  const [desc, setDesc] = useState("");
  if (comment.data)
    return (
      <>
        {userid === reviewWriter ? (
          <StyledReviewComment>
            <div className="head">
              <p className="name">{userid}</p>
            </div>
            <TextField
              className="description"
              variant="outlined"
              multiline
              rows={2}
              placeholder="댓글 쓰기"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
            <div className="buttons">
              <Button color="primary" onClick={() => setDesc("")}>
                취소
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleWriteReviewComment(userid, desc);
                  setDesc("");
                }}
              >
                댓글
              </Button>
            </div>
          </StyledReviewComment>
        ) : (
          <StyledReviewComment>
            <div className="head">
              <p className="name">리뷰 작성자만 댓글쓰기가 가능합니다.</p>
            </div>
          </StyledReviewComment>
        )}

        <Divider />

        {comment.data.findComments.map((item) => (
          <StyledReviewComment key={item.id}>
            <div className="head">
              <p className="name">
                {item.writer === "익명리뷰"
                  ? "익명"
                  : item.writer.indexOf("선생") !== -1
                  ? item.writer
                  : item.userid}
              </p>
            </div>
            <div className="content">{item.desc}</div>
          </StyledReviewComment>
        ))}
      </>
    );
  else return <></>;
};

export default ReviewComment;
