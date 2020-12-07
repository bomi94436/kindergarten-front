import React from "react";
import userRole from "src/utils/role";
import Loading from "../common/Loading/Loading";
import { StyledManagementList } from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Divider,
} from "@material-ui/core";

const ManagementList = ({
  detail,
  loggedInfo,
  students,
  teachers,
  handleAccessStudent,
  handleAccessTeacher,
}) => {
  console.log(teachers);

  if (students.loading !== false && !students.data) return <Loading />;
  else
    return (
      <StyledManagementList>
        <h2>{detail.data.name} 승인 요청 리스트</h2>
        <Divider />
        <h3>학생</h3>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell>생일</TableCell>
                <TableCell>학부모 성명</TableCell>
                <TableCell>학부모 전화번호</TableCell>
                <TableCell align="right">승인 버튼</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {students.data.map(
                (student) =>
                  !student.access && (
                    <TableRow key={student.name}>
                      <TableCell component="th" scope="row">
                        {student.name}
                      </TableCell>
                      <TableCell>{student.birthday}</TableCell>
                      <TableCell>{student.userName}</TableCell>
                      <TableCell>{student.userPhone}</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          onClick={() =>
                            handleAccessStudent(student.studentId).then(() =>
                              alert(
                                `${student.name} 학생을 ${detail.data.name}에 승인시켰습니다.`
                              )
                            )
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
        {loggedInfo.role === userRole.ROLE_DIRECTOR && (
          <>
            <h3>선생님</h3>

            <TableContainer component={Paper}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>이름</TableCell>
                    <TableCell>전화번호</TableCell>
                    <TableCell align="right">승인 버튼</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {teachers.loading === false &&
                    teachers.data &&
                    teachers.data.map((teacher) => (
                      <TableRow key={teacher.name}>
                        <TableCell component="th" scope="row">
                          {teacher.name}
                        </TableCell>
                        <TableCell>{teacher.userPhone}</TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            onClick={() =>
                              handleAccessTeacher(teacher.id).then(() =>
                                alert(
                                  `${teacher.name} 선생님을 ${detail.data.name}에 승인시켰습니다.`
                                )
                              )
                            }
                          >
                            승인
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </StyledManagementList>
    );
};

export default ManagementList;
