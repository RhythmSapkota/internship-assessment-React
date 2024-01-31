import React from "react";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const MemberCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  button {
    margin-left: 25px;
  }
`;

const MemberPhoto = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 12px;
`;

const MemberName = styled.h3`
  color: #333;
  margin-bottom: 8px;
`;

const MemberDepartment = styled.p`
  color: #666;
  margin-bottom: 16px;
`;

const MemberDescription = styled.p`
  color: #444;
`;

const Member = ({
  id,
  name,
  department,
  description,
  photo,
  handleEdit,
  handleDelete,
}) => {
  const handleEditItem = (e) => {
    e.preventDefault();
    handleEdit(id, name, description, photo, department);
  };

  const handleDeleteItem = (e) => {
    e.preventDefault();
    handleDelete(id);
  };
  return (
    <MemberCard>
      {photo && <MemberPhoto src={photo} alt={`${name}'s photo`} />}
      <MemberName>{name}</MemberName>
      <MemberDepartment>{department}</MemberDepartment>
      {description && <MemberDescription>{description}</MemberDescription>}
      <button onClick={handleEditItem}>
        <FaEdit size={30} />
      </button>

      <button onClick={handleDeleteItem}>
        <MdDeleteForever style={{ fontSize: "30px" }} />
      </button>
    </MemberCard>
  );
};

export default Member;
