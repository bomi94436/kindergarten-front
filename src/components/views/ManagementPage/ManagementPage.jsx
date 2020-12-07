import React, { useState } from "react";
import { StyledManagementList, Wrapper, StyledPaper } from "./styles";
import "../../../utils/styles.css";
import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Tabs,
  Tab,
} from "@material-ui/core";
import Loading from "../common/Loading/Loading";

const ManagementPage = ({
  typeIndex,
  setTypeIndex,
  students,
  teachers,
  directors,
  handleAccessStudent,
  handleAccessTeacher,
  handleAccessDirector,
}) => {
  console.log(students);

  return (
    <Wrapper className="container">
      <h1>승인 요청 리스트</h1>

      <div className="tabs">
        <Tabs
          value={typeIndex}
          onChange={(event, newValue) => {
            setTypeIndex(newValue);
          }}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="학생" />
          <Tab label="선생" />
          <Tab label="원장" />
        </Tabs>
      </div>
      {students.loading !== false ? (
        <Loading />
      ) : typeIndex === 0 ? (
        <StyledManagementList>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>이름</TableCell>
                  <TableCell>생일</TableCell>
                  <TableCell>유치원</TableCell>
                  <TableCell>학부모 성명</TableCell>
                  <TableCell>학부모 전화번호</TableCell>
                  <TableCell align="right">승인 버튼</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {students.data &&
                  students.data.map(
                    (student) =>
                      !student.access && (
                        <TableRow key={student.name}>
                          <TableCell component="th" scope="row">
                            {student.name}
                          </TableCell>
                          <TableCell>{student.birthday}</TableCell>
                          <TableCell>{student.kindergarten_name}</TableCell>
                          <TableCell>{student.username}</TableCell>
                          <TableCell>{student.userphone}</TableCell>
                          <TableCell align="right">
                            <Button
                              color="primary"
                              onClick={() =>
                                handleAccessStudent(student.studentId)
                                  .then(() =>
                                    alert(
                                      `${student.name} 학생을 ${student.kindergarten_name}에 승인시켰습니다.`
                                    )
                                  )
                                  .catch((e) => console.log(e))
                              }
                            >
                              승인
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledManagementList>
      ) : typeIndex === 1 ? (
        <StyledManagementList>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>이름</TableCell>
                  <TableCell>유치원</TableCell>
                  <TableCell>전화번호</TableCell>
                  <TableCell align="right">승인 버튼</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {teachers.data &&
                  teachers.data.map(
                    (teacher) =>
                      !teacher.access && (
                        <TableRow key={teacher.name}>
                          <TableCell component="th" scope="row">
                            {teacher.name}
                          </TableCell>
                          <TableCell>{teacher.kindergartenname}</TableCell>
                          <TableCell>{teacher.phone}</TableCell>
                          <TableCell align="right">
                            <Button
                              color="primary"
                              onClick={() =>
                                handleAccessTeacher(teacher.id)
                                  .then(() =>
                                    alert(
                                      `${teacher.name} 선생님을 ${teacher.kindergartenname}에 승인시켰습니다.`
                                    )
                                  )
                                  .catch((e) => console.log(e))
                              }
                            >
                              승인
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledManagementList>
      ) : (
        <StyledManagementList>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>이름</TableCell>
                  <TableCell>유치원</TableCell>
                  <TableCell>전화번호</TableCell>
                  <TableCell align="right">승인 버튼</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {directors.data &&
                  directors.data.map(
                    (director) =>
                      !director.access && (
                        <TableRow key={director.name}>
                          <TableCell component="th" scope="row">
                            {director.name}
                          </TableCell>
                          <TableCell>{director.kindergartenname}</TableCell>
                          <TableCell>{director.phone}</TableCell>
                          <TableCell align="right">
                            <Button
                              color="primary"
                              onClick={() =>
                                handleAccessDirector(director.id)
                                  .then(() =>
                                    alert(
                                      `${director.name} 원장님 ${director.kindergartenname}에 승인시켰습니다.`
                                    )
                                  )
                                  .catch((e) => console.log(e))
                              }
                            >
                              승인
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledManagementList>
      )}
    </Wrapper>
  );
};

export default ManagementPage;
