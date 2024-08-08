import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config";
import { Notification } from "../../types/Notification";

const notificationsCollection = collection(db, "notifications");

export const addNotification = async (message: string): Promise<void> => {
  await addDoc(notificationsCollection, {
    message,
    isRead: false,
  });
};

export const getNotifications = async (): Promise<Notification[]> => {
  const notificationsCollectionsnapshot = await getDocs(
    notificationsCollection
  );
  return notificationsCollectionsnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Notification)
  );
};

export const markAsRead = async (id: string): Promise<void> => {
  const notificationDoc = doc(db, "notifications", id);
  await updateDoc(notificationDoc, {
    isRead: true,
  });
};
