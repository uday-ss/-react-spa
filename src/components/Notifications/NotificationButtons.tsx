import React from "react";
import { addNotification } from "../../firebase/firestore/notifications";
import Button from "../Button/Button";

const NotificationButtons: React.FC = () => {
  const handleButtonClick = async (message: string) => {
    await addNotification(message);
  };

  return (
    <>
      <Button
        text="Notification Button 1"
        onClick={() => handleButtonClick("Notification 1")}
      />
      <Button
        text="Notification Button 2"
        onClick={() => handleButtonClick("Notification 2")}
      />
      <Button
        text="Notification Button 3"
        onClick={() => handleButtonClick("Notification 3")}
      />
    </>
  );
};

export default NotificationButtons;
