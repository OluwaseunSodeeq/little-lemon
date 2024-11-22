import { useContext } from "react";
import { ReservationsContextData } from "./ReservationsContext";

function useReservationsContext() {
  const context = useContext(ReservationsContextData);
  if (context === undefined)
    throw new Error(
      "Reservation context was used outside open context provider"
    );
  return context;
}

export default useReservationsContext;
