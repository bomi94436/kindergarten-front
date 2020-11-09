import React, { useEffect, useState } from "react";
import * as api from "../../utils/api";

export default function (SpecificComponent, option) {
  // option
  // null     => 아무나 출입이 가능한 페이지
  // true     => 로그인한 유저만 출입이 가능한 페이지
  // false    => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const [role, setRole] = useState(null);

    useEffect(() => {
      api.auth().then((response) => {
        setRole(response.data);
      });
    }, []);

    return <SpecificComponent {...props} role={role} />;
  }

  return AuthenticationCheck;
}
