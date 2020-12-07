import React, { useState } from "react";
import { StyledReviewComment } from "./styles";
import { Divider, TextField, Button, Avatar } from "@material-ui/core";
import { BsFillPersonFill } from "react-icons/bs";

const ReviewComment = ({
  loggedInfo,
  comment,
  reviewWriter,
  handlePostReviewComment,
  handlePutReviewComment,
  handleDeleteReviewComment,
}) => {
  const [desc, setDesc] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updateInput, setUpdateInput] = useState(false);

  if (comment.data)
    return (
      <>
        {loggedInfo.userid === reviewWriter ? (
          <StyledReviewComment>
            <div className="head">
              <div className="head-left">
                <p className="name">{loggedInfo.userid}</p>
              </div>
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
                  handlePostReviewComment(loggedInfo.userid, desc);
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
              <div className="head-left">
                <p className="name">리뷰 작성자만 댓글쓰기가 가능합니다.</p>
              </div>
            </div>
          </StyledReviewComment>
        )}

        <Divider style={{ margin: "10px 0" }} />

        <span style={{ fontWeight: "bold", padding: "10px 20px" }}>
          댓글{" "}
          <span
            style={{
              color: "#4751b1",
            }}
          >
            {comment.data.findComments.length}
          </span>
          개
        </span>

        {comment.data.findComments.map((item) => {
          return (
            <StyledReviewComment key={item.id}>
              <div className="head">
                <div className="head-left">
                  <Avatar className="profile">
                    <BsFillPersonFill />
                  </Avatar>
                  <p className="name">
                    {item.writer === "익명리뷰"
                      ? "익명"
                      : item.writer.indexOf("선생") !== -1
                      ? item.writer
                      : item.userid}
                  </p>
                </div>

                <div>
                  {item.userid === loggedInfo.userid &&
                    (!updateInput ? (
                      <>
                        <Button
                          onClick={() => {
                            setUpdateInput(item.id);
                            setUpdateDesc(item.desc);
                          }}
                        >
                          수정
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => handleDeleteReviewComment(item.id)}
                        >
                          삭제
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          color="secondary"
                          onClick={() => setUpdateInput(false)}
                        >
                          수정 취소
                        </Button>
                        <Button
                          color="primary"
                          onClick={() => {
                            handlePutReviewComment(item.id, updateDesc);
                            setUpdateInput(false);
                          }}
                        >
                          수정 완료
                        </Button>
                      </>
                    ))}
                </div>
              </div>

              {item.id !== updateInput ? (
                <div className="content">{item.desc}</div>
              ) : (
                <TextField
                  className="description"
                  variant="outlined"
                  multiline
                  rows={2}
                  placeholder="댓글 쓰기"
                  value={updateDesc}
                  onChange={(event) => setUpdateDesc(event.target.value)}
                />
              )}
            </StyledReviewComment>
          );
        })}
      </>
    );
  else return <></>;
};

export default ReviewComment;
