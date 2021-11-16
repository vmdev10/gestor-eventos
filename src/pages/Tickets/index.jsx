import BannerEvent from "../../components/BannerEvent";
import TicketsTable from "../../components/Table"

import React from "react";


function Tickets() {
  
  return (
    <div className="TicketContainer">
      <BannerEvent />

      <TicketsTable />

      
    </div>
  );
}

export default Tickets;
