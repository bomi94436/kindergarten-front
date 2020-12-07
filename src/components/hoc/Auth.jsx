import React, { useEffect, useState, useCallback } from "react";
import * as api from "../../utils/api";
import userRole from "../../utils/role";

export default function (SpecificComponent, option) {
  // option
  // null     => 아무나 출입이 가능한 페이지
  // true     => 로그인한 유저만 출입이 가능한 페이지
  // false    => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const [loggedInfo, setLoggedInfo] = useState({
      kindergartenid: null,
      role: null,
      name: null,
      userid: null,
    });

    const updateLoggedInfo = useCallback((name, value) => {
      setLoggedInfo((item) => ({ ...item, [name]: value }));
    }, []);

    useEffect(() => {
      if (localStorage.getItem("X-AUTH-TOKEN")) {
        api
          .auth()
          .then((response) => {
            console.log(response.data);
            updateLoggedInfo("kindergartenid", response.data.kindergartenid);
            updateLoggedInfo("role", response.data.role);
            updateLoggedInfo("name", response.data.name);
            updateLoggedInfo("userid", response.data.userid);
          })
          .catch((error) => {
            localStorage.removeItem("X-AUTH-TOKEN");
          });
      } else {
        updateLoggedInfo("kindergartenid", null);
        updateLoggedInfo("role", null);
        updateLoggedInfo("name", null);
        updateLoggedInfo("userid", null);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem("X-AUTH-TOKEN")]);

    if (loggedInfo.role !== null) {
      if (option === "admin" && loggedInfo.role !== userRole.ROLE_ADMIN) {
        alert("잘못된 접근입니다.");
        props.history.push("/");
      }
      return <SpecificComponent {...props} loggedInfo={loggedInfo} />;
    } else if (option !== "admin") {
      return <SpecificComponent {...props} loggedInfo={loggedInfo} />;
    } else return <></>;
  }

  return AuthenticationCheck;
}
