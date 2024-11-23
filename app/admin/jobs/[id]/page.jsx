"use client";
import React from "react";
import JobUpdateComponent from "../../../component/common/jobUpdateComponent";
import { useParams } from "next/navigation";
const JobEdit = () => {
  const { id } = useParams();

  return (
    <div>
      <JobUpdateComponent id={id} />
    </div>
  );
};

export default JobEdit;
