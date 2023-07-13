import { createContext, useState } from "react";
import { data } from "../database/MeetUpData";

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [meetUpData,setMeetUpData]=useState(data.meetups);
    const [eventType,setEventType]=useState("")

  return (
    <>
      <DataContext.Provider value={{meetUpData,setMeetUpData,eventType,setEventType}}>{children}</DataContext.Provider>
    </>
  );
}
