import React from "react";
// Consts
import { DATA_TRANSFER_FORMAT } from "../../constants";

export const DropableNode = ({ children, data }) => {
  return (
    <div
      draggable
      onDragStart={event => {
        event.dataTransfer.setData(DATA_TRANSFER_FORMAT, JSON.stringify(data));
      }}
    >
      {children}
    </div>
  );
};
