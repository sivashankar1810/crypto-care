import { useEffect, useState } from "react";
import ScreenerFilter from "./ScreenerFilter";
import ScreenerSearch from "./ScreenerSearch";
import ScreenerTable from "./ScreenerTable";

const Screener = ({ filterData }) => {
  // console.log("filterData", filterData);

  // useEffect(() => {}, []);
  // const eventsData = [
  //   {
  //     key: 1,
  //     title: "Bulletproof EP1",
  //     fileType: "Atmos",
  //     process: "match media",
  //     performedBy: "Denise Etridge",
  //     operationNote: "-",
  //     updatedAt: "26/09/2018 17:21",
  //     status: "complete",
  //   },
  //   {
  //     key: 2,
  //     title: "Dexter EP2",
  //     fileType: "Video",
  //     process: "Compliance",
  //     performedBy: "Dane Gill",
  //     operationNote: "passed",
  //     updatedAt: "21/09/2018 12:21",
  //     status: "inProgress",
  //   },
  // ];
  // let originalData;
  // MockData.map((data) => {
  //   return;
  // });
  // const filteredData = filterData && filterData.available
  // const [events, setEvents] = useState(filterData);

  // console.log("events", events);

  const handleFilter = (key) => {};
  //   const selected = parseInt(key);
  //   if (selected === 3) {
  //     // return events;
  //     //   return this.setState({
  //     //     eventsData
  //     //   });
  //   }

  //   const statusMap = {
  //     1: "complete",
  //     2: "inProgress",
  //   };

  //   const selectedStatus = statusMap[selected];

  //   const filteredEvents = filterData.filter(
  //     ({ status }) => status === selectedStatus
  //   );

  //   // setEvents(filteredEvents);
  //   // this.setState({
  //   //   eventsData: filteredEvents
  //   // });
  // };

  const handleSearch = (searchText) => {};
  //   const filteredEvents = filterData.filter(({ title }) => {
  //     title = title.toLowerCase();
  //     return title.includes(searchText);
  //   });
  //   // setEvents(filteredEvents);

  //   // this.setState({
  //   //   eventsData: filteredEvents
  //   // });
  // };

  return (
    // <></>
    <section className="screener-container">
      <header className="screener-header">
        <h1 className="screener-title">Querying results</h1>
        <ScreenerFilter filterBy={handleFilter} className={"screener-action"} />
        <ScreenerSearch onSearch={handleSearch} className={"screener-action"} />
      </header>
      <ScreenerTable events={filterData?.data} />
    </section>
  );
};

export default Screener;
