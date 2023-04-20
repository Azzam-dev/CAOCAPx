"use client";

import React from "react";
import Modal from "./Modal";

export default function LoginModal() {
  return (
    <Modal
      isOpen={true}
      title="Hello World"
      actionLabel="Submit"
      onClose={() => {}}
      onSubmit={() => {}}
      // secondaryAction={() => {}}
      // secondaryActionLabel="Close"
    />
  );
}
