import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

const Cover = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 0.5rem 0;

  p {
    margin: 0;
    color: #303030;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }
  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const SearchKindergartenItem = ({
  item,
  actor,
  setRegisterSearch,
  handleClose,
  index,
}) => {
  return (
    <Cover>
      <div>
        <p style={{ display: "none" }}>{item.id}</p>
        <p>{item.type}</p>
        <h1>{item.name}</h1>
        <p>
          <FaMapMarkerAlt />
          {item.address}
        </p>
      </div>
      <Button
        type="button"
        color="primary"
        onClick={() => {
          setRegisterSearch({
            name: "selected",
            value: { id: item.id, name: item.name },
            actor: actor,
            index: index,
          });
          handleClose();
        }}
      >
        선택
      </Button>
    </Cover>
  );
};

export default SearchKindergartenItem;
