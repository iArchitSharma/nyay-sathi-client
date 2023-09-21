import ProfileCompletionForm from '@/components/ProfileCompletionForm';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

export default function fullDetails() {

    const router = useRouter();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <p>Error</p>;
  }

  const userType = localStorage.getItem("type");

  return (
    <ProfileCompletionForm userType={userType} />
  )
}
