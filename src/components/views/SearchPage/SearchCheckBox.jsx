import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SearchCheckBox = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div style={{ width: "100%" }}>
      <p style={{ margin: 0, fontWeight: 600 }}>구분</p>
      <FormGroup>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="전체"
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="유치원"
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="어린이집"
          />
        </div>
      </FormGroup>

      <div style={{ borderBottom: "1px solid gray", margin: "1rem 0.5rem" }} />

      <p style={{ margin: 0, fontWeight: 600 }}>설립유형</p>

      <FormGroup>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={<Checkbox checked color="primary" />}
            label="전체"
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="국공립"
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="법인"
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="민간/가정"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="사립"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="기타"
          />
        </div>
      </FormGroup>
    </div>
  );
};

export default SearchCheckBox;
